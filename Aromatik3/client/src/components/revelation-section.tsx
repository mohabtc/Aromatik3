import { motion } from 'framer-motion';
import { useScrollTrigger } from '@/hooks/use-scroll-trigger';
import { useEffect, useState } from 'react';

export default function RevelationSection() {
  const { isVisible, elementRef } = useScrollTrigger<HTMLElement>(0.3);
  const [scrollY, setScrollY] = useState(0);

  // Efecto parallax sutil
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.4,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      id="revelation" 
      ref={elementRef}
      className="min-h-screen relative overflow-hidden"
      style={{ backgroundColor: '#121212' }}
    >
      {/* Contenedor placeholder para imagen de fondo con parallax */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundColor: '#0F0F0F',
          transform: `translateY(${scrollY * 0.1}px)`, // Efecto parallax sutil
          transition: 'transform 0.1s ease-out'
        }}
      />

      {/* Contenedor central */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="max-w-4xl mx-auto px-6 md:px-8 py-16 md:py-24 text-center">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="space-y-8"
          >
            {/* Titular H2 - Serif */}
            <motion.h2 
              className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight text-white"
              variants={itemVariants}
              style={{ 
                letterSpacing: '0.03em',
                lineHeight: '1.2',
                fontWeight: 400
              }}
            >
              El perfume de lujo fue hecho para ser usado, no para adornar una estantería.
            </motion.h2>
            
            {/* Párrafo - Sans-Serif */}
            <motion.p 
              className="text-lg md:text-xl lg:text-2xl leading-relaxed font-light text-white max-w-3xl mx-auto"
              variants={itemVariants}
              style={{ 
                lineHeight: '1.6', 
                letterSpacing: '0.01em',
                fontFamily: 'Inter, sans-serif'
              }}
            >
              Hemos llevado las fragancias más icónicas del mundo a las calles de Barcelona. Una red de puntos de experiencia donde puedes descubrir, probar y disfrutar de un momento de lujo instantáneo. Sin compromisos. Sin ataduras. Solo tú y el arte del perfume.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
