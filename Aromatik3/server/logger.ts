/**
 * Server-side logger utility
 * Provides consistent logging across the server
 */

type LogLevel = 'debug' | 'info' | 'warn' | 'error';

const isDevelopment = process.env.NODE_ENV === 'development';

/**
 * Server logger that controls output based on environment
 */
class ServerLogger {
  /**
   * Log debug information (development only)
   */
  debug(...args: unknown[]): void {
    if (isDevelopment) {
      console.log('[DEBUG]', ...args);
    }
  }

  /**
   * Log informational messages
   */
  info(...args: unknown[]): void {
    console.log('[INFO]', ...args);
  }

  /**
   * Log warnings
   */
  warn(...args: unknown[]): void {
    console.warn('[WARN]', ...args);
  }

  /**
   * Log errors (always logged)
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

export const logger = new ServerLogger();
export default logger;
