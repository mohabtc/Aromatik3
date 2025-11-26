import { useState, useRef, useEffect } from 'react';
import { logger } from '@/utils/logger';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  style?: React.CSSProperties;
  priority?: boolean; // For above-the-fold images
  quality?: number;
  loading?: 'lazy' | 'eager';
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  style = {},
  priority = false,
  quality = 80,
  loading = 'lazy'
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Generate optimized image URL (using Unsplash parameters for now)
  const getOptimizedSrc = (originalSrc: string) => {
    if (originalSrc.includes('unsplash.com')) {
      const baseUrl = originalSrc.split('?')[0];
      const params = new URLSearchParams();
      
      if (width) params.set('w', width.toString());
      if (height) params.set('h', height.toString());
      params.set('q', quality.toString());
      params.set('auto', 'format');
      params.set('fit', 'crop');
      
      return `${baseUrl}?${params.toString()}`;
    }
    return originalSrc;
  };

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || loading === 'eager') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && imgRef.current) {
            imgRef.current.src = getOptimizedSrc(src);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '50px' // Start loading 50px before image is visible
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [src, priority, loading, quality, width, height]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    logger.warn(`Failed to load image: ${src}`);
  };

  return (
    <div className={`relative overflow-hidden ${className}`} style={style}>
      {/* Placeholder while loading */}
      {!isLoaded && !hasError && (
        <div 
          className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse"
          style={{
            width: width || '100%',
            height: height || '100%'
          }}
        />
      )}

      {/* Main image */}
      <img
        ref={imgRef}
        src={priority || loading === 'eager' ? getOptimizedSrc(src) : undefined}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={handleLoad}
        onError={handleError}
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${hasError ? 'hidden' : ''}`}
        style={{
          width: width || '100%',
          height: height || '100%',
          objectFit: 'cover'
        }}
      />

      {/* Error fallback */}
      {hasError && (
        <div 
          className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-500 text-sm"
          style={{
            width: width || '100%',
            height: height || '100%'
          }}
        >
          <span>Image unavailable</span>
        </div>
      )}
    </div>
  );
}