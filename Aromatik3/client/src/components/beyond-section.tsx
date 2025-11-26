import { motion } from 'framer-motion';
import { useScrollTrigger } from '@/hooks/use-scroll-trigger';
import { Link } from 'wouter';
import logger from '@/utils/logger';

export default function BeyondSection() {
  const { isVisible, elementRef } = useScrollTrigger(0.3);

  const scrollToSelection = () => {
    logger.debug('✅ Button "Ver todos los perfumes" clicked - scrolling to selection');
    document.getElementById('selection')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="beyond" 
      ref={elementRef}
      className="aromatik-bg-off-white aromatik-text-black py-24"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div 
            className="space-y-12"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="font-serif text-3xl md:text-5xl leading-tight text-black">
              ¿Te has enamorado? No lo dejes escapar.
            </h2>
            
            <p className="text-xl md:text-2xl leading-relaxed font-light text-black" style={{ lineHeight: '1.7', letterSpacing: '0.01em' }}>
              Un momento puede convertirse en tu seña de identidad. Por eso, cada fragancia de nuestra selección está disponible en formatos de viaje, extraída directamente de su botella original. Para que puedas hacerla tuya, llevarla contigo y decidir cuándo y cómo empieza tu ritual.
            </p>
            
            <Link href="/coleccion">
              <motion.button 
                className="aromatik-bg-gold aromatik-text-black px-10 py-5 rounded-full text-lg font-semibold hover:opacity-90 transition-all duration-300 mobile-touch-friendly"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ letterSpacing: '0.02em' }}
              >
                Ver todos los perfumes
              </motion.button>
            </Link>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img 
              src="https://i.imgur.com/W0uwG5k.jpeg" 
              alt="Elegant collection of luxury perfume decant bottles" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
