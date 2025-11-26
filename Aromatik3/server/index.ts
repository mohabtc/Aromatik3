import express, { type Request, Response, NextFunction } from "express";
import compression from "compression";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import cors from "cors";
import cookieParser from "cookie-parser";
import csrf from "csurf";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import { RATE_LIMIT_CONFIG, COMPRESSION_CONFIG, CACHE_DURATION_S, SERVER_CONFIG } from "./constants";
import { logger } from "./logger";

const app = express();

/**
 * Trust proxy setting for rate limiting behind Replit's proxy
 * Required for accurate IP detection in rate limiting
 */
app.set('trust proxy', 1);

/**
 * CORS configuration for CSRF protection
 * Only allows requests from the same origin in production
 */
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? [process.env.FRONTEND_URL || 'https://aromatikbarcelona.com'].filter(Boolean)
    : true, // Allow all origins in development
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-CSRF-Token'],
};

app.use(cors(corsOptions));

/**
 * Security middleware - Helmet sets various HTTP headers for security
 * Protects against common web vulnerabilities
 */
app.use(helmet({
  contentSecurityPolicy: false, // Disabled for Vite dev server compatibility
  crossOriginEmbedderPolicy: false,
}));

/**
 * Rate limiting middleware to prevent abuse
 * Applies to all requests globally
 */
const generalLimiter = rateLimit({
  windowMs: RATE_LIMIT_CONFIG.GENERAL_WINDOW_MS,
  max: RATE_LIMIT_CONFIG.GENERAL_MAX_REQUESTS,
  message: "Too many requests from this IP, please try again later.",
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(generalLimiter);

/**
 * Enable compression for better performance
 * Compresses response bodies for requests that traverse through middleware
 */
app.use(compression({
  level: COMPRESSION_CONFIG.LEVEL,
  threshold: COMPRESSION_CONFIG.THRESHOLD_BYTES,
  filter: (req: Request, res: Response) => {
    // Don't compress if response is already compressed
    if (req.headers['x-no-compression']) {
      return false;
    }
    // Use compression filter
    return compression.filter(req, res);
  }
}));

/**
 * Set custom security and performance headers
 * Additional headers beyond what Helmet provides
 */
app.use((req: Request, res: Response, next: NextFunction) => {
  // Cache static assets for 1 year
  if (req.url.match(/\.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$/)) {
    res.setHeader('Cache-Control', `public, max-age=${CACHE_DURATION_S.STATIC_ASSETS}, immutable`);
  }
  
  // SEO files cache control
  if (req.url.match(/\/(sitemap\.xml|robots\.txt)$/)) {
    res.setHeader('Cache-Control', `public, max-age=${CACHE_DURATION_S.SEO_FILES}`);
    res.setHeader('Content-Type', req.url.includes('xml') ? 'application/xml' : 'text/plain');
  }
  
  // Performance headers
  res.setHeader('X-DNS-Prefetch-Control', 'on');
  
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/**
 * Cookie parser middleware for CSRF token management
 * Required for cookie-based CSRF protection
 */
app.use(cookieParser());

/**
 * CSRF protection middleware
 * Uses double-submit cookie pattern for protection against CSRF attacks
 * Configured with secure settings for production-grade security
 */
const csrfProtection = csrf({ 
  cookie: {
    httpOnly: true,
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'production'
  }
});

/**
 * Request logging middleware
 * Logs API requests with duration and response data in development
 */
app.use((req: Request, res: Response, next: NextFunction) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, unknown> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson: Record<string, unknown>) {
    capturedJsonResponse = bodyJson;
    return originalResJson.call(res, bodyJson);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

/**
 * CSRF token endpoint
 * Provides CSRF tokens to clients for form submissions
 * Token is automatically set in cookie by csurf middleware
 */
app.get('/api/csrf-token', csrfProtection, (req: Request, res: Response) => {
  res.json({ csrfToken: req.csrfToken() });
});

(async () => {
  const server = await registerRoutes(app, csrfProtection);

  /**
   * Global error handler
   * Catches and handles all errors from routes and middleware
   */
  app.use((err: Error & { status?: number; statusCode?: number }, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    if (status === 500) {
      log(`Server error: ${err.message}`);
      logger.error('Server error stack:', err.stack);
    }
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // ALWAYS serve the app on the port specified in the environment variable PORT
  // Other ports are firewalled. Default to 5000 if not specified.
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = parseInt(process.env.PORT || SERVER_CONFIG.DEFAULT_PORT.toString(), 10);
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true,
  }, () => {
    log(`serving on port ${port}`);
  });
})();
