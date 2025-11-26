import { useEffect, useState } from 'react';
import { useScrollPosition } from '@/hooks/use-scroll-trigger';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import FragranceGallery from '@/components/fragrance-gallery';
import SEOHead from '@/components/seo-head';
import { motion } from 'framer-motion';

export default function Coleccion() {
  const scrollY = useScrollPosition();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsScrolled(scrollY > 50);
  }, [scrollY]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#121212' }}>
      <SEOHead
        title="Nuestra Biblioteca de Perfumes | Compra Decants de Lujo"
        description="Explora la colección completa de decants de Aromatik Barcelona. Muestras de Creed, Tom Ford, Xerjoff y más. Encuentra tu próxima fragancia icónica."
        keywords="biblioteca perfumes, compra decants lujo, colección aromatik barcelona, muestras creed tom ford xerjoff, fragancia icónica"
        canonicalUrl="https://aromatikbarcelona.com/coleccion"
        ogImage="https://aromatikbarcelona.com/images/coleccion-og.jpg"
      />
      <Navigation isScrolled={isScrolled} />
      
      {/* Hero Section - Encabezado Perfectamente Centrado */}
      <section className="min-h-screen flex items-center justify-center relative pt-32 pb-32">
        <div className="text-center max-w-5xl mx-auto px-12 md:px-16">
          {/* H1 - Tipografía, color y espaciado exactos */}
          <motion.h1 
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1.2,
              delay: 0.3,
              ease: "easeOut"
            }}
            style={{ 
              color: '#F5F5F7', /* Blanco roto exacto */
              letterSpacing: '0.03em', /* Tracking expandido */
              lineHeight: '1.1',
              fontWeight: 400, /* Regular weight */
              fontFamily: 'Playfair Display, serif',
              textAlign: 'center'
            }}
          >
            La Biblioteca Olfativa
          </motion.h1>
          
          {/* Párrafo de introducción - Sans-serif, 16px base */}
          <motion.p 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1,
              delay: 0.8,
              ease: "easeOut"
            }}
            style={{ 
              color: '#F5F5F7', /* Blanco roto exacto */
              fontSize: '16px', /* Tamaño base desktop */
              letterSpacing: '0.01em',
              lineHeight: '1.6', /* Interlineado generoso */
              fontFamily: 'Inter, sans-serif',
              textAlign: 'center'
            }}
          >
            Una curación de iconos. Fragancias que no siguen el tiempo, sino que lo definen. Explore la colección.
          </motion.p>
        </div>
      </section>

      {/* Galería de Fragancias */}
      <FragranceGallery />

      <Footer />
    </div>
  );
}