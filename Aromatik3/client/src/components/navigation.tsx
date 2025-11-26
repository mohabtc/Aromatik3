import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'wouter';

interface NavigationProps {
  isScrolled: boolean;
}

export default function Navigation({ isScrolled }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'aromatik-bg-black bg-opacity-90 backdrop-blur-sm' : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Navegación principal"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" aria-label="Ir a la página de inicio">
            <motion.div 
              className="cursor-pointer mobile-touch-friendly flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <img 
                src="https://i.imgur.com/tZVCOOd.png" 
                alt="AROMATIK BARCELONA - Logotipo"
                className="h-10 sm:h-12 w-auto opacity-90"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 font-light text-white" role="menubar">
            <Link href="/">
              <motion.button
                className="hover:text-gray-300 transition-colors"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0 }}
                whileHover={{ scale: 1.05 }}
                aria-label="Ir a la página de inicio"
              >
                Inicio
              </motion.button>
            </Link>
            <Link href="/coleccion">
              <motion.button
                className="hover:text-gray-300 transition-colors"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                whileHover={{ scale: 1.05 }}
                aria-label="Ver colección de perfumes"
              >
                Colección
              </motion.button>
            </Link>
            <Link href="/nuestro-concepto">
              <motion.button
                className="hover:text-gray-300 transition-colors"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                aria-label="Conocer nuestro proceso"
              >
                Proceso
              </motion.button>
            </Link>
            <Link href="/contacto">
              <motion.button
                className="hover:text-gray-300 transition-colors"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
                aria-label="Ir a la página de contacto"
              >
                Contacto
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white z-50 relative mobile-touch-friendly flex items-center justify-center p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 aromatik-bg-black bg-opacity-95 backdrop-blur-sm z-40 md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Menú de navegación móvil"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8 text-white" role="menu">
              <Link href="/">
                <motion.button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-light hover:text-white hover:text-opacity-70 transition-colors mobile-touch-friendly py-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0 }}
                  aria-label="Ir a la página de inicio"
                >
                  Inicio
                </motion.button>
              </Link>
              <Link href="/coleccion">
                <motion.button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-light hover:text-white hover:text-opacity-70 transition-colors mobile-touch-friendly py-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  aria-label="Ver colección de perfumes"
                >
                  Colección
                </motion.button>
              </Link>
              <Link href="/nuestro-concepto">
                <motion.button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-light hover:text-white hover:text-opacity-70 transition-colors mobile-touch-friendly py-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  aria-label="Conocer nuestro proceso"
                >
                  Proceso
                </motion.button>
              </Link>
              <Link href="/contacto">
                <motion.button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-light hover:text-white hover:text-opacity-70 transition-colors mobile-touch-friendly py-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  aria-label="Ir a la página de contacto"
                >
                  Contacto
                </motion.button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
