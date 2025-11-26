// Performance optimization utilities
import { logger } from '@/utils/logger';

// Image optimization settings
export const imageOptimizationSettings = {
  quality: 85, // Balance between quality and file size
  formats: ['webp', 'jpg'], // Preferred formats in order
  sizes: {
    thumbnail: 400,
    medium: 800,
    large: 1200,
    hero: 2000
  }
};

// Cache settings
export const cacheSettings = {
  maxAge: {
    images: 31536000, // 1 year for images
    assets: 31536000, // 1 year for static assets
    api: 300, // 5 minutes for API responses
  }
};

// Critical resource hints
export const criticalResources = [
  // Fonts
  'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600;700&display=swap',
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
  
  // Hero images for each page
  'https://images.unsplash.com/photo-1541643600914-78b084683601', // Hero background
  'https://images.unsplash.com/photo-1544551763-46a013bb70d5', // Creed background
  'https://images.unsplash.com/photo-1574635925932-78f7b8d4b3cc', // Xerjoff background
];

// Lazy loading intersection observer options
export const lazyLoadOptions = {
  root: null,
  rootMargin: '50px', // Start loading 50px before element is visible
  threshold: 0.1
};

// Performance monitoring
export function measurePerformance() {
  if (typeof window === 'undefined') return null;

  try {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const paintEntries = performance.getEntriesByType('paint');
    
    const metrics = {
      // Core Web Vitals
      domContentLoaded: Math.round(navigation.domContentLoadedEventEnd - navigation.fetchStart),
      loadComplete: Math.round(navigation.loadEventEnd - navigation.fetchStart),
      
      // Paint metrics
      firstPaint: paintEntries.find(entry => entry.name === 'first-paint')?.startTime || 0,
      firstContentfulPaint: paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
      
      // Memory usage (if available)
      memoryUsage: (performance as any).memory ? {
        used: Math.round((performance as any).memory.usedJSHeapSize / 1024 / 1024),
        total: Math.round((performance as any).memory.totalJSHeapSize / 1024 / 1024),
        limit: Math.round((performance as any).memory.jsHeapSizeLimit / 1024 / 1024)
      } : null
    };

    return metrics;
  } catch (error) {
    logger.warn('Performance measurement failed:', error);
    return null;
  }
}

// Preload critical resources
export function preloadCriticalResources() {
  if (typeof window === 'undefined') return;

  criticalResources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    
    if (resource.includes('fonts.googleapis.com')) {
      link.as = 'style';
      link.href = resource;
    } else if (resource.includes('images.unsplash.com')) {
      link.as = 'image';
      link.href = `${resource}?auto=format&fit=crop&w=1200&q=85`;
    }
    
    document.head.appendChild(link);
  });
}

// Bundle analysis helper
export function analyzeBundleSize() {
  if (typeof window === 'undefined') return null;

  const scripts = Array.from(document.querySelectorAll('script[src]'));
  const stylesheets = Array.from(document.querySelectorAll('link[rel="stylesheet"]'));
  
  return {
    scripts: scripts.length,
    stylesheets: stylesheets.length,
    totalRequests: scripts.length + stylesheets.length
  };
}