import { useEffect } from 'react';
import logger from '@/utils/logger';

interface ImagePreloaderProps {
  images: string[];
  priority?: boolean;
}

export default function ImagePreloader({ images, priority = false }: ImagePreloaderProps) {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    images.forEach((imageSrc, index) => {
      const img = new Image();
      img.loading = priority ? 'eager' : 'lazy';
      
      // Optimize image URL
      const optimizedSrc = imageSrc.includes('unsplash.com') 
        ? `${imageSrc}?auto=format&fit=crop&w=1200&q=85&fm=webp`
        : imageSrc;
      
      img.src = optimizedSrc;
      
      // Optional: Add to document head as preload link
      if (priority) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = optimizedSrc;
        document.head.appendChild(link);
      }
    });
  }, [images, priority]);

  return null; // This component doesn't render anything
}

// Hook version for easier usage
export function useImagePreloader(images: string[], priority = false) {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const preloadPromises = images.map((imageSrc) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = reject;
        
        const optimizedSrc = imageSrc.includes('unsplash.com') 
          ? `${imageSrc}?auto=format&fit=crop&w=1200&q=85&fm=webp`
          : imageSrc;
        
        img.src = optimizedSrc;
      });
    });

    Promise.allSettled(preloadPromises).then((results) => {
      const failed = results.filter(result => result.status === 'rejected').length;
      if (failed > 0) {
        logger.warn(`Failed to preload ${failed} images out of ${images.length}`);
      }
    });
  }, [images, priority]);
}