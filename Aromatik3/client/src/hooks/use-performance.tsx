import { useEffect, useState } from 'react';

// Hook para monitorear el rendimiento
export function usePerformance() {
  const [metrics, setMetrics] = useState({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0
  });

  useEffect(() => {
    // Medir tiempo de carga
    if (typeof window !== 'undefined' && 'performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      if (navigation) {
        const loadTime = navigation.loadEventEnd - navigation.fetchStart;
        const renderTime = navigation.domContentLoadedEventEnd - navigation.fetchStart;
        
        setMetrics(prev => ({
          ...prev,
          loadTime: Math.round(loadTime),
          renderTime: Math.round(renderTime)
        }));
      }

      // Medir uso de memoria (si está disponible)
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        setMetrics(prev => ({
          ...prev,
          memoryUsage: Math.round(memory.usedJSHeapSize / 1024 / 1024) // MB
        }));
      }
    }
  }, []);

  return metrics;
}

// Hook para precargar recursos críticos
export function usePreloadCriticalResources() {
  useEffect(() => {
    // Precargar fuentes críticas
    const fonts = [
      'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600;700&display=swap',
      'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
    ];

    fonts.forEach(fontUrl => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'style';
      link.href = fontUrl;
      document.head.appendChild(link);
    });

    // Precargar imágenes críticas (hero images)
    const criticalImages = [
      'https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      'https://images.unsplash.com/photo-1574635925932-78f7b8d4b3cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'
    ];

    criticalImages.forEach(imageSrc => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = imageSrc;
      document.head.appendChild(link);
    });
  }, []);
}

// Hook para lazy loading de componentes
export function useLazyComponent<T>(
  importFunc: () => Promise<{ default: T }>,
  delay: number = 0
) {
  const [component, setComponent] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      importFunc()
        .then(module => {
          setComponent(module.default);
          setLoading(false);
        })
        .catch(err => {
          setError(err);
          setLoading(false);
        });
    }, delay);

    return () => clearTimeout(timer);
  }, [importFunc, delay]);

  return { component, loading, error };
}