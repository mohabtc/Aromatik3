import { Component, ErrorInfo, ReactNode } from 'react';
import logger from '@/utils/logger';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    logger.error('ErrorBoundary caught an error:', error, errorInfo);
    
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  render(): ReactNode {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="w-full min-h-[400px] flex items-center justify-center bg-gradient-to-b from-gray-900 to-black">
          <div className="text-center px-6 py-12 max-w-md">
            <h2 className="text-2xl font-serif text-white mb-4">
              Algo salió mal
            </h2>
            <p className="text-gray-300 mb-6">
              Lo sentimos, ha ocurrido un error al cargar esta sección. 
              Por favor, intenta recargar la página.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="aromatik-button"
              aria-label="Recargar la página"
            >
              Recargar Página
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
