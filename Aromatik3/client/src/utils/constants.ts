/**
 * Application-wide constants
 * Centralizes magic numbers and timing values for better maintainability
 */

/**
 * Video playback and animation timing constants (in milliseconds)
 */
export const VIDEO_TIMING = {
  /** Delay before showing skip button during intro video */
  SKIP_BUTTON_DELAY_MS: 2000,
  /** Duration of header fade-in animation after video ends */
  HEADER_TRANSITION_DELAY_MS: 300,
  /** Duration of text fade-in animation after header appears */
  TEXT_FADE_IN_DELAY_MS: 800,
  /** Duration of smooth scroll animation */
  SCROLL_ANIMATION_DURATION_MS: 1000,
} as const;

/**
 * Performance monitoring constants (in milliseconds)
 */
export const PERFORMANCE_TIMING = {
  /** Wait time before measuring performance metrics */
  MEASUREMENT_DELAY_MS: 2000,
  /** Threshold for "excellent" DOM load time */
  EXCELLENT_DOM_LOAD_MS: 1000,
  /** Threshold for "excellent" full page load time */
  EXCELLENT_FULL_LOAD_MS: 2000,
  /** Threshold for "excellent" first contentful paint */
  EXCELLENT_FCP_MS: 1500,
} as const;

/**
 * Intersection Observer configuration
 */
export const LAZY_LOAD_CONFIG = {
  /** Distance in pixels before element becomes visible to start loading */
  ROOT_MARGIN_PX: 50,
  /** Percentage of element that must be visible to trigger load */
  THRESHOLD: 0.1,
} as const;

/**
 * Scroll behavior constants
 */
export const SCROLL_CONFIG = {
  /** Scroll position threshold to trigger "scrolled" state */
  HEADER_SCROLL_THRESHOLD_PX: 50,
} as const;

/**
 * Animation duration constants (in seconds for framer-motion)
 */
export const ANIMATION_DURATION = {
  /** Standard fade-in duration */
  FADE_IN_S: 0.6,
  /** Long fade-in duration for emphasis */
  FADE_IN_LONG_S: 1.2,
  /** Slide-in animation duration */
  SLIDE_IN_S: 0.8,
  /** Spring animation stiffness */
  SPRING_STIFFNESS: 400,
  /** Spring animation damping */
  SPRING_DAMPING: 17,
} as const;

/**
 * Cache control constants (in seconds)
 */
export const CACHE_DURATION = {
  /** Cache duration for static assets (1 year) */
  STATIC_ASSETS_S: 31536000,
  /** Cache duration for images (1 year) */
  IMAGES_S: 31536000,
  /** Cache duration for API responses */
  API_S: 300,
} as const;
