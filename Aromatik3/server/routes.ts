import type { Express, RequestHandler } from "express";
import { createServer, type Server } from "http";
import rateLimit from "express-rate-limit";
import { storage } from "./storage";
import { insertNewsletterSchema } from "@shared/schema";
import { RATE_LIMIT_CONFIG } from "./constants";
import { logger } from "./logger";
import { z } from "zod";

/**
 * Strict rate limiter for newsletter subscriptions
 * Prevents spam and abuse of the subscription endpoint
 */
const newsletterLimiter = rateLimit({
  windowMs: RATE_LIMIT_CONFIG.NEWSLETTER_WINDOW_MS,
  max: RATE_LIMIT_CONFIG.NEWSLETTER_MAX_REQUESTS,
  message: "Too many subscription attempts. Please try again later.",
  standardHeaders: true,
  legacyHeaders: false,
  skipSuccessfulRequests: false,
});

/**
 * Sanitize email input to prevent injection attacks
 */
function sanitizeEmail(email: string): string {
  return email.toLowerCase().trim();
}

export async function registerRoutes(app: Express, csrfProtection?: RequestHandler): Promise<Server> {
  /**
   * Newsletter subscription endpoint
   * Protected with CSRF token validation, rate limiting, and input validation
   */
  app.post("/api/newsletter/subscribe", 
    newsletterLimiter, 
    ...(csrfProtection ? [csrfProtection] : []),
    async (req, res) => {
    try {
      // Validate and sanitize input
      const validatedData = insertNewsletterSchema.parse(req.body);
      const sanitizedEmail = sanitizeEmail(validatedData.email);
      
      // Check if email already exists
      const existingSubscription = await storage.getNewsletterByEmail(sanitizedEmail);
      if (existingSubscription) {
        return res.status(409).json({ 
          message: "Este email ya está suscrito a nuestro newsletter" 
        });
      }

      // Subscribe with sanitized email
      const newsletter = await storage.subscribeNewsletter({ email: sanitizedEmail });
      res.status(201).json({ 
        message: "Suscripción exitosa. ¡Bienvenido a la revolución del perfume!",
        newsletter: { id: newsletter.id, email: newsletter.email }
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: "Email inválido. Por favor verifica el formato.",
          errors: error.errors 
        });
      }
      
      // Log error
      logger.error('Newsletter subscription error:', error);
      
      res.status(500).json({ message: "Error interno del servidor. Por favor intenta más tarde." });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
