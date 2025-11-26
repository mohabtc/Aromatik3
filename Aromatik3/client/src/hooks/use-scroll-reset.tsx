import { useEffect } from 'react';
import { useLocation } from 'wouter';

/**
 * Hook que resetea el scroll a la posición superior (Y: 0) 
 * cada vez que cambia la ruta de navegación
 */
export function useScrollReset() {
  const [location] = useLocation();
  
  useEffect(() => {
    // Resetear scroll a la parte superior cuando cambia la ruta
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Cambio inmediato, sin animación
    });
  }, [location]);
}