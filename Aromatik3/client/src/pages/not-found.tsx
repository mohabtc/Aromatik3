import { useEffect, useState } from 'react';
import { useScrollPosition } from '@/hooks/use-scroll-trigger';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { motion } from 'framer-motion';

export default function NotFound() {
  const scrollY = useScrollPosition();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsScrolled(scrollY > 50);
  }, [scrollY]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#121212' }}>
      <Navigation isScrolled={isScrolled} />
      
      <section className="min-h-screen flex items-center justify-center relative pt-32 pb-32">
        <div className="text-center max-w-4xl mx-auto px-6 md:px-8">
          <motion.h1 
            className="font-serif text-5xl sm:text-6xl md:text-7xl mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ 
              color: '#F5F5F7',
              letterSpacing: '0.03em',
              fontWeight: 400
            }}
          >
            Esta Esencia No Existe.
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ 
              color: '#F5F5F7',
              fontFamily: 'Inter, sans-serif',
              lineHeight: '1.6'
            }}
          >
            La página que buscas se ha evaporado. Te guiamos de vuelta a la colección.
          </motion.p>
          
          <motion.a 
            href="/"
            className="aromatik-button text-lg px-10 py-4 inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ letterSpacing: '0.02em' }}
          >
            Volver al Inicio
          </motion.a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
