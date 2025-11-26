/**
 * Server-side constants
 * Centralizes rate limiting, security, and configuration values
 */

/**
 * Rate limiting configuration (in milliseconds and request counts)
 */
export const RATE_LIMIT_CONFIG = {
  /** General rate limit window duration (15 minutes) */
  GENERAL_WINDOW_MS: 15 * 60 * 1000,
  /** Maximum requests per IP in general window */
  GENERAL_MAX_REQUESTS: 100,
  
  /** Newsletter subscription rate limit window (1 hour) */
  NEWSLETTER_WINDOW_MS: 60 * 60 * 1000,
  /** Maximum newsletter subscription attempts per IP per hour */
  NEWSLETTER_MAX_REQUESTS: 3,
} as const;

/**
 * Compression configuration
 */
export const COMPRESSION_CONFIG = {
  /** Compression level (1-9, 6 is optimal balance) */
  LEVEL: 6,
  /** Minimum response size in bytes to compress */
  THRESHOLD_BYTES: 1024,
} as const;

/**
 * Cache duration constants (in seconds)
 */
export const CACHE_DURATION_S = {
  /** Static assets cache duration (1 year) */
  STATIC_ASSETS: 31536000,
  /** SEO files cache duration (24 hours) */
  SEO_FILES: 86400,
} as const;

/**
 * Port configuration
 */
export const SERVER_CONFIG = {
  /** Default port if not specified in environment */
  DEFAULT_PORT: 5000,
} as const;
