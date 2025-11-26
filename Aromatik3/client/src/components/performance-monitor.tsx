import { useEffect, useState } from 'react';
import { measurePerformance } from '../utils/performance';

interface PerformanceMetrics {
  domContentLoaded: number;
  loadComplete: number;
  firstPaint: number;
  firstContentfulPaint: number;
  memoryUsage: {
    used: number;
    total: number;
    limit: number;
  } | null;
}

export default function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [showDebug, setShowDebug] = useState(false);

  useEffect(() => {
    // Only show in development mode
    if (process.env.NODE_ENV !== 'development') return;

    const timer = setTimeout(() => {
      const performanceData = measurePerformance();
      if (performanceData) {
        setMetrics(performanceData);
      }
    }, 2000); // Wait 2 seconds after component mount

    return () => clearTimeout(timer);
  }, []);

  // Show debug info only in development
  if (process.env.NODE_ENV !== 'development' || !metrics) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setShowDebug(!showDebug)}
        className="bg-gray-800 text-white px-3 py-2 rounded-lg text-sm font-mono opacity-75 hover:opacity-100 transition-opacity"
      >
        ⚡ PERF
      </button>

      {showDebug && (
        <div className="absolute bottom-12 right-0 bg-gray-900 text-white p-4 rounded-lg text-xs font-mono w-64 shadow-xl">
          <h3 className="text-green-400 font-bold mb-2">Performance Metrics</h3>
          
          <div className="space-y-1">
            <div className="flex justify-between">
              <span>DOM Loaded:</span>
              <span className={metrics.domContentLoaded < 1000 ? 'text-green-400' : 'text-yellow-400'}>
                {metrics.domContentLoaded}ms
              </span>
            </div>
            
            <div className="flex justify-between">
              <span>Full Load:</span>
              <span className={metrics.loadComplete < 2000 ? 'text-green-400' : 'text-yellow-400'}>
                {metrics.loadComplete}ms
              </span>
            </div>
            
            <div className="flex justify-between">
              <span>First Paint:</span>
              <span className={metrics.firstPaint < 1000 ? 'text-green-400' : 'text-yellow-400'}>
                {Math.round(metrics.firstPaint)}ms
              </span>
            </div>
            
            <div className="flex justify-between">
              <span>FCP:</span>
              <span className={metrics.firstContentfulPaint < 1500 ? 'text-green-400' : 'text-yellow-400'}>
                {Math.round(metrics.firstContentfulPaint)}ms
              </span>
            </div>

            {metrics.memoryUsage && (
              <div className="flex justify-between">
                <span>Memory:</span>
                <span className={metrics.memoryUsage.used < 50 ? 'text-green-400' : 'text-yellow-400'}>
                  {metrics.memoryUsage.used}MB
                </span>
              </div>
            )}
          </div>

          <div className="mt-3 pt-2 border-t border-gray-700 text-gray-400">
            <div className="text-xs">
              Green: Excellent | Yellow: Good | Red: Needs improvement
            </div>
          </div>
        </div>
      )}
    </div>
  );
}