import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'wouter';

interface NavigationProps {
  isScrolled: boolean;
}

export default function Navigation({ isScrolled }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  useEffect(() => {
    closeMobileMenu();
  }, [location, closeMobileMenu]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.height = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.height = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.height = '';
    };
  }, [isMobileMenuOpen]);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = [
    { href: '/', label: 'Inicio', ariaLabel: 'Ir a la página de inicio' },
    { href: '/coleccion', label: 'Colección', ariaLabel: 'Ver colección de perfumes' },
    { href: '/nuestro-concepto', label: 'Proceso', ariaLabel: 'Conocer nuestro proceso' },
    { href: '/contacto', label: 'Contacto', ariaLabel: 'Ir a la página de contacto' },
  ];

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'aromatik-bg-black bg-opacity-90 backdrop-blur-sm' : 'bg-transparent'
        }`}
        role="navigation"
        aria-label="Navegación principal"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" aria-label="Ir a la página de inicio">
              <motion.div 
                className="cursor-pointer flex items-center"
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

            <div className="hidden md:flex space-x-8 font-light text-white" role="menubar">
              {menuItems.map((item, index) => (
                <Link key={item.href} href={item.href}>
                  <motion.button
                    className="hover:text-gray-300 transition-colors"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    aria-label={item.ariaLabel}
                  >
                    {item.label}
                  </motion.button>
                </Link>
              ))}
            </div>

            <button
              className="md:hidden text-white p-3 -mr-3 relative z-[60]"
              onClick={toggleMenu}
              aria-label={isMobileMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              style={{ 
                minWidth: '48px', 
                minHeight: '48px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={28} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={28} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[55] md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Menú de navegación móvil"
          >
            <motion.div 
              className="absolute inset-0 aromatik-bg-black"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.98 }}
              exit={{ opacity: 0 }}
              onClick={closeMobileMenu}
            />
            
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-6">
              <nav className="flex flex-col items-center space-y-6" role="menu">
                {menuItems.map((item, index) => (
                  <Link key={item.href} href={item.href}>
                    <motion.button
                      onClick={closeMobileMenu}
                      className="text-white text-3xl sm:text-4xl font-light tracking-wide py-3 px-6 active:bg-white active:bg-opacity-10 rounded-lg transition-colors"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      role="menuitem"
                      aria-label={item.ariaLabel}
                      style={{ 
                        minHeight: '56px',
                        touchAction: 'manipulation'
                      }}
                    >
                      {item.label}
                    </motion.button>
                  </Link>
                ))}
              </nav>
              
              <motion.div 
                className="absolute bottom-12 left-0 right-0 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <p className="text-white text-opacity-40 text-sm">
                  Toca fuera del menú para cerrar
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
