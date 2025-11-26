/**
 * Environment-aware logger utility
 * Only logs in development mode to keep production console clean
 */

type LogLevel = 'debug' | 'info' | 'warn' | 'error';

const isDevelopment = import.meta.env.DEV;

/**
 * Logger class that conditionally outputs based on environment
 */
class Logger {
  /**
   * Log debug information (development only)
   */
  debug(...args: unknown[]): void {
    if (isDevelopment) {
      console.log('[DEBUG]', ...args);
    }
  }

  /**
   * Log informational messages (development only)
   */
  info(...args: unknown[]): void {
    if (isDevelopment) {
      console.log('[INFO]', ...args);
    }
  }

  /**
   * Log warnings (development only)
   */
  warn(...args: unknown[]): void {
    if (isDevelopment) {
      console.warn('[WARN]', ...args);
    }
  }

  /**
   * Log errors (always logged, even in production)
   */
  error(...args: unknown[]): void {
    console.error('[ERROR]', ...args);
  }

  /**
   * Generic log method with level specification
   */
  log(level: LogLevel, ...args: unknown[]): void {
    switch (level) {
      case 'debug':
        this.debug(...args);
        break;
      case 'info':
        this.info(...args);
        break;
      case 'warn':
        this.warn(...args);
        break;
      case 'error':
        this.error(...args);
        break;
    }
  }
}

export const logger = new Logger();
export default logger;
