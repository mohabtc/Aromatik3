import { useState, useEffect, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { useScrollPosition } from '@/hooks/use-scroll-trigger';
import Navigation from '@/components/navigation';
import SEOHead from '@/components/seo-head';
import { ProductSchema } from '@/components/seo-schema';
import OptimizedImage from '@/components/optimized-image';
import logger from '@/utils/logger';

const Footer = lazy(() => import('@/components/footer'));

export default function CreedMillesimeImperial() {
  const [selectedSize, setSelectedSize] = useState<string>('');
  const scrollY = useScrollPosition();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsScrolled(scrollY > 50);
  }, [scrollY]);

  const handlePurchase = () => {
    if (selectedSize) {
      logger.debug('✅ Purchase initiated for Creed Millésime Impérial:', selectedSize);
      // En producción esto navegaría al checkout
      alert(`Has seleccionado Creed Millésime Impérial ${selectedSize}. ¡Pronto te llevaremos al checkout!`);
    }
  };

  return (
    <div 
      className="min-h-screen"
      style={{ backgroundColor: '#F5F5F7' }}
    >
      <SEOHead
        title="Compra el Decant de Millésime Imperial de Creed | Aromatik BCN"
        description="Prueba Millésime Imperial con un decant 100% auténtico de Aromatik. Formatos de 5, 10 y 20ml. Descubre la obra maestra de Creed antes de comprar la botella."
        keywords="compra decant millésime imperial, creed, muestra millésime imperial, perfume creed, decant auténtico aromatik"
        canonicalUrl="https://aromatikbarcelona.com/creed-millesime-imperial"
        ogImage="https://aromatikbarcelona.com/images/creed-millesime-imperial-og.jpg"
        productSchema={{
          name: "Decant Creed Millésime Imperial",
          description: "Muestra auténtica de 5ml del exclusivo perfume Millésime Imperial de la Casa Creed",
          brand: "Creed",
          category: "Perfume",
          price: "20.00",
          availability: "https://schema.org/InStock"
        }}
      />
      <ProductSchema
        name="Decant Creed Millésime Imperial"
        description="Muestra auténtica de 5ml del exclusivo perfume Millésime Imperial de la Casa Creed"
        brand="Creed"
        category="Perfume"
        price="20.00"
        availability="https://schema.org/InStock"
        image="https://aromatikbarcelona.com/images/creed-millesime-imperial.jpg"
        sku="AR-CMI-5ML"
        url="https://aromatikbarcelona.com/creed-millesime-imperial"
      />
      <Navigation isScrolled={isScrolled} />
      {/* Hero Section - El Oro del Mediterráneo */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Optimized background image */}
        <div className="absolute inset-0 z-0">
          <OptimizedImage
            src="https://i.imgur.com/HS7DQl8.jpeg"
            alt="decant-creed-millesime-imperial-sobre-mesa-marmol-blanco"
            priority={true}
            className="w-full h-full"
            style={{ objectFit: 'cover' }}
          />
          <div 
            className="absolute inset-0"
            style={{ background: 'linear-gradient(rgba(18, 18, 18, 0.15), rgba(18, 18, 18, 0.25))' }}
          />
        </div>
        {/* Abstract watermelon slice overlay for Mediterranean luxury */}
        <div className="absolute top-1/3 right-1/4 w-32 h-32 opacity-30 blur-sm rounded-full overflow-hidden z-5">
          <OptimizedImage
            src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
            alt="Mediterranean luxury accent"
            loading="lazy"
            className="w-full h-full"
          />
        </div>

        <div className="text-center px-8 max-w-5xl mx-auto relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="font-serif mb-8"
            style={{ 
              color: '#121212',
              fontSize: 'clamp(48px, 8vw, 88px)',
              letterSpacing: '0.03em',
              lineHeight: '1.05',
              fontWeight: 400,
              fontFamily: 'Playfair Display, serif',
              textShadow: '0 4px 12px rgba(255, 255, 255, 0.8)'
            }}
          >
            Creed Millésime Imperial
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            className="font-sans mb-16"
            style={{ 
              color: '#121212',
              fontSize: 'clamp(24px, 4vw, 36px)',
              letterSpacing: '0.02em',
              lineHeight: '1.3',
              fontWeight: 300,
              fontFamily: 'Inter, sans-serif',
              textShadow: '0 2px 8px rgba(255, 255, 255, 0.9)'
            }}
          >
            Un lujo que no pesa. Refresca.
          </motion.h2>

          {/* Subtle call to discover */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-center"
          >
            <p 
              className="font-sans"
              style={{ 
                color: '#121212',
                fontSize: '18px',
                letterSpacing: '0.01em',
                fontFamily: 'Inter, sans-serif',
                opacity: 0.8,
                textShadow: '0 1px 4px rgba(255, 255, 255, 0.7)'
              }}
            >
              La esencia del verano eterno en la costa de Amalfi
            </p>
          </motion.div>
        </div>

        {/* Elegant scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="absolute bottom-16 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={() => document.getElementById('price-anchor')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <div 
            className="w-6 h-10 border-2 rounded-full flex justify-center"
            style={{ borderColor: '#121212' }}
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 rounded-full mt-2"
              style={{ backgroundColor: '#121212' }}
            />
          </div>
        </motion.div>
      </section>

      {/* La Propuesta de Valor - Anclaje de Precio */}
      <section id="price-anchor" className="py-32 px-8">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            <h3 
              className="font-serif"
              style={{ 
                color: '#121212',
                fontSize: 'clamp(36px, 6vw, 56px)',
                letterSpacing: '0.02em',
                lineHeight: '1.2',
                fontWeight: 400,
                fontFamily: 'Playfair Display, serif'
              }}
            >
              La Opulencia de Creed, la Agilidad de Aromatik.
            </h3>

            <div className="space-y-12 max-w-3xl mx-auto">
              <p 
                className="font-sans"
                style={{ 
                  color: '#121212',
                  fontSize: '20px',
                  letterSpacing: '0.01em',
                  lineHeight: '1.6',
                  fontWeight: 300,
                  fontFamily: 'Inter, sans-serif',
                  opacity: 0.85
                }}
              >
                La forma inteligente de llevar un perfume de verano de ultra lujo sin comprometer una botella completa para unos pocos meses de calor.
              </p>

              {/* Comparativa de Precios con estética mediterránea */}
              <div className="space-y-8">
                <motion.div 
                  className="flex items-center justify-between p-8 rounded-xl"
                  style={{ backgroundColor: 'rgba(18, 18, 18, 0.05)' }}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <span className="font-sans" style={{ color: '#121212', fontSize: '20px', fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
                    Botella Completa (100ml):
                  </span>
                  <span className="font-serif line-through" style={{ color: '#121212', fontSize: '28px', fontFamily: 'Playfair Display, serif', fontWeight: 500, opacity: 0.6 }}>
                    250€
                  </span>
                </motion.div>
                
                <motion.div 
                  className="flex items-center justify-between p-10 rounded-xl relative overflow-hidden"
                  style={{ backgroundColor: '#E1C16E' }}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  {/* Subtle golden sparkle effect */}
                  <div className="absolute top-2 right-2 w-3 h-3 rounded-full opacity-30" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }} />
                  <div className="absolute bottom-3 left-3 w-2 h-2 rounded-full opacity-20" style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)' }} />
                  
                  <span className="font-sans" style={{ color: '#121212', fontSize: '20px', fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
                    Tu Decant Aromatik (desde):
                  </span>
                  <span className="font-serif" style={{ color: '#121212', fontSize: '36px', fontFamily: 'Playfair Display, serif', fontWeight: 600 }}>
                    22,90€
                  </span>
                </motion.div>
              </div>

              {/* Mediterranean summer insight */}
              <motion.p 
                className="font-sans italic"
                style={{ 
                  color: '#121212',
                  fontSize: '16px',
                  letterSpacing: '0.01em',
                  lineHeight: '1.6',
                  fontFamily: 'Inter, sans-serif',
                  opacity: 0.7
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.7 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                "Perfecto para toda la temporada de verano. Desde las noches de San Juan hasta los últimos atardeceres de septiembre."
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* La Oferta Irresistible - Bloque de Conversión */}
      <section className="py-32 px-8" style={{ backgroundColor: 'rgba(225, 193, 110, 0.08)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Imagen del producto decant */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://i.imgur.com/4fgxuL2.png"
                alt="decant-de-5ml-creed-millesime-imperial-muestra-autentica-aromatik"
                className="aspect-square rounded-lg shadow-2xl w-full h-auto object-cover"
              />
            </motion.div>

            {/* Contenido de conversión */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <h3 
                className="font-serif"
                style={{ 
                  color: '#121212',
                  fontSize: 'clamp(42px, 7vw, 64px)',
                  letterSpacing: '0.02em',
                  lineHeight: '1.1',
                  fontWeight: 400,
                  fontFamily: 'Playfair Display, serif'
                }}
              >
                Captura el Sol.
              </h3>

              <p 
                className="font-sans"
                style={{ 
                  color: '#121212',
                  fontSize: '18px',
                  letterSpacing: '0.01em',
                  lineHeight: '1.6',
                  fontWeight: 300,
                  fontFamily: 'Inter, sans-serif',
                  opacity: 0.8
                }}
              >
                Elige tu formato perfecto para llevar la brisa mediterránea contigo.
              </p>

              {/* Selector de Tamaño - Botones interactivos */}
              <div className="space-y-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedSize('5ml')}
                  className={`w-full p-6 rounded-lg border-2 transition-all duration-300 ${
                    selectedSize === '5ml' ? 'border-opacity-100' : 'border-opacity-30'
                  }`}
                  style={{ 
                    borderColor: '#E1C16E',
                    backgroundColor: selectedSize === '5ml' ? '#E1C16E' : '#F5F5F7'
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="text-left">
                      <span className="font-serif block" style={{ color: '#121212', fontSize: '20px', fontFamily: 'Playfair Display, serif', fontWeight: 500 }}>
                        5 ml
                      </span>
                      <span className="font-sans" style={{ color: '#121212', fontSize: '14px', fontFamily: 'Inter, sans-serif', opacity: 0.8 }}>
                        Para una escapada de fin de semana
                      </span>
                    </div>
                    <span className="font-serif" style={{ color: '#121212', fontSize: '24px', fontFamily: 'Playfair Display, serif', fontWeight: 600 }}>
                      22,90€
                    </span>
                  </div>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedSize('10ml')}
                  className={`w-full p-6 rounded-lg border-2 transition-all duration-300 relative ${
                    selectedSize === '10ml' ? 'border-opacity-100' : 'border-opacity-30'
                  }`}
                  style={{ 
                    borderColor: '#E1C16E',
                    backgroundColor: selectedSize === '10ml' ? '#E1C16E' : '#F5F5F7'
                  }}
                >
                  {/* Etiqueta "MÁS POPULAR" */}
                  <div 
                    className="absolute -top-3 left-4 px-3 py-1 rounded-full"
                    style={{ backgroundColor: '#E1C16E' }}
                  >
                    <span className="font-sans" style={{ color: '#121212', fontSize: '12px', fontFamily: 'Inter, sans-serif', fontWeight: 600, letterSpacing: '0.05em' }}>
                      MÁS POPULAR
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-left">
                      <span className="font-serif block" style={{ color: '#121212', fontSize: '20px', fontFamily: 'Playfair Display, serif', fontWeight: 500 }}>
                        10 ml
                      </span>
                      <span className="font-sans" style={{ color: '#121212', fontSize: '14px', fontFamily: 'Inter, sans-serif', opacity: 0.8 }}>
                        Tu perfume de todo el verano
                      </span>
                    </div>
                    <span className="font-serif" style={{ color: '#121212', fontSize: '24px', fontFamily: 'Playfair Display, serif', fontWeight: 600 }}>
                      39,90€
                    </span>
                  </div>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedSize('20ml')}
                  className={`w-full p-6 rounded-lg border-2 transition-all duration-300 ${
                    selectedSize === '20ml' ? 'border-opacity-100' : 'border-opacity-30'
                  }`}
                  style={{ 
                    borderColor: '#E1C16E',
                    backgroundColor: selectedSize === '20ml' ? '#E1C16E' : '#F5F5F7'
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="text-left">
                      <span className="font-serif block" style={{ color: '#121212', fontSize: '20px', fontFamily: 'Playfair Display, serif', fontWeight: 500 }}>
                        20 ml
                      </span>
                      <span className="font-sans" style={{ color: '#121212', fontSize: '14px', fontFamily: 'Inter, sans-serif', opacity: 0.8 }}>
                        Reserva privada para tus viajes
                      </span>
                    </div>
                    <span className="font-serif" style={{ color: '#121212', fontSize: '24px', fontFamily: 'Playfair Display, serif', fontWeight: 600 }}>
                      69,90€
                    </span>
                  </div>
                </motion.button>
              </div>

              {/* CTA Principal - Mediterranean Theme */}
              <motion.button
                onClick={handlePurchase}
                disabled={!selectedSize}
                className="w-full px-8 py-8 text-2xl font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-2xl relative overflow-hidden"
                style={{ 
                  backgroundColor: selectedSize ? '#E1C16E' : 'rgba(225, 193, 110, 0.3)',
                  color: '#121212',
                  borderRadius: '12px',
                  fontFamily: 'Playfair Display, serif',
                  fontWeight: 500,
                  letterSpacing: '0.02em',
                  border: selectedSize ? '2px solid #E1C16E' : '2px solid rgba(225, 193, 110, 0.3)'
                }}
                whileHover={selectedSize ? { scale: 1.02, y: -2 } : {}}
                whileTap={selectedSize ? { scale: 0.98 } : {}}
              >
                {/* Golden sparkle animation when active */}
                {selectedSize && (
                  <motion.div
                    className="absolute inset-0 opacity-20"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                    animate={{ opacity: [0.1, 0.3, 0.1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}
                Hacerlo Mío
              </motion.button>

              {/* Subtle call to action hint */}
              <p 
                className="font-sans text-center"
                style={{ 
                  color: '#121212',
                  fontSize: '14px',
                  fontFamily: 'Inter, sans-serif',
                  opacity: 0.6,
                  fontStyle: 'italic'
                }}
              >
                {!selectedSize ? "Selecciona tu tamaño favorito para continuar" : "Un paso más cerca del verano eterno"}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Seducción Narrativa - Mediterranean Luxury Heritage */}
      <section className="py-32 px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-16"
          >
            <h3 
              className="font-serif"
              style={{ 
                color: '#121212',
                fontSize: 'clamp(36px, 6vw, 54px)',
                letterSpacing: '0.02em',
                lineHeight: '1.2',
                fontWeight: 400,
                fontFamily: 'Playfair Display, serif'
              }}
            >
              Un Retrato de la Riviera
            </h3>

            <div className="grid md:grid-cols-2 gap-16 items-center text-left">
              {/* Left content */}
              <div className="space-y-8">
                <p 
                  className="font-sans"
                  style={{ 
                    color: '#121212',
                    fontSize: '20px',
                    letterSpacing: '0.01em',
                    lineHeight: '1.7',
                    fontWeight: 300,
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  Creado para capturar el lujo dorado de la costa siciliana. Millésime Impérial abre con una explosión de cítricos y sal marina. Un corazón floral de iris florentino añade un toque de elegancia empolvada, antes de reposar en una base cálida de sándalo y almizcle que evoca una piel calentada por el sol. Es versátil, carismático y absolutamente inolvidable. Es el aroma del éxito en verano.
                </p>

                {/* Luxury insight */}
                <div 
                  className="p-6 rounded-xl"
                  style={{ backgroundColor: 'rgba(225, 193, 110, 0.1)' }}
                >
                  <p 
                    className="font-sans italic"
                    style={{ 
                      color: '#121212',
                      fontSize: '16px',
                      letterSpacing: '0.01em',
                      lineHeight: '1.6',
                      fontFamily: 'Inter, sans-serif',
                      opacity: 0.8
                    }}
                  >
                    "Un perfume que no compite con el calor del verano, sino que lo acompaña. La elegancia de quien sabe que el verdadero lujo es sentirse libre."
                  </p>
                </div>
              </div>

              {/* Right image - Mediterranean yacht scene */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div 
                  className="aspect-[4/5] rounded-2xl shadow-2xl relative overflow-hidden"
                  style={{
                    backgroundImage: `url('https://i.imgur.com/OFiHFn8.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  {/* Golden hour overlay */}
                  <div 
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(45deg, rgba(225, 193, 110, 0.1) 0%, rgba(255, 215, 0, 0.05) 100%)'
                    }}
                  />
                </div>
                
                {/* Floating elements for Mediterranean luxury */}
                <motion.div
                  className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full opacity-20"
                  style={{ backgroundColor: '#E1C16E' }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Prueba Social - Mediterranean Testimonials */}
      <section className="py-32 px-8" style={{ backgroundColor: 'rgba(225, 193, 110, 0.05)' }}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-16"
          >
            <h3 
              className="font-serif"
              style={{ 
                color: '#121212',
                fontSize: '42px',
                letterSpacing: '0.02em',
                lineHeight: '1.3',
                fontWeight: 400,
                fontFamily: 'Playfair Display, serif'
              }}
            >
              La Opinión de Nuestro Círculo
            </h3>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Testimonio 1 */}
              <div className="space-y-4">
                <div className="flex items-center space-x-1 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} style={{ color: '#E1C16E', fontSize: '20px' }}>★</span>
                  ))}
                </div>
                <p 
                  className="font-sans italic"
                  style={{ 
                    color: '#121212',
                    fontSize: '16px',
                    letterSpacing: '0.01em',
                    lineHeight: '1.6',
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  "Mi perfume de verano definitivo. No hay nada que se le parezca. Fresco, elegante y perfecto tanto para el día como para la noche. Un 10."
                </p>
                <p 
                  className="font-sans font-medium"
                  style={{ 
                    color: '#121212',
                    fontSize: '14px',
                    fontFamily: 'Inter, sans-serif',
                    opacity: 0.7
                  }}
                >
                  — Alejandro F. ★★★★★
                </p>
              </div>

              {/* Testimonio 2 */}
              <div className="space-y-4">
                <div className="flex items-center space-x-1 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} style={{ color: '#E1C16E', fontSize: '20px' }}>★</span>
                  ))}
                </div>
                <p 
                  className="font-sans italic"
                  style={{ 
                    color: '#121212',
                    fontSize: '16px',
                    letterSpacing: '0.01em',
                    lineHeight: '1.6',
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  "Huele literalmente a vacaciones de lujo en una botella. El servicio de Aromatik es impecable, me permite disfrutarlo sin el coste prohibitivo de la botella entera."
                </p>
                <p 
                  className="font-sans font-medium"
                  style={{ 
                    color: '#121212',
                    fontSize: '14px',
                    fontFamily: 'Inter, sans-serif',
                    opacity: 0.7
                  }}
                >
                  — Lucía S. ★★★★★
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Garantía y Cierre */}
      <section className="py-24 px-8">
        <div className="max-w-4xl mx-auto text-center space-y-16">
          {/* Selector final */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 
              className="font-serif"
              style={{ 
                color: '#121212',
                fontSize: '36px',
                letterSpacing: '0.02em',
                lineHeight: '1.3',
                fontWeight: 400,
                fontFamily: 'Playfair Display, serif'
              }}
            >
              Tu Escape Mediterráneo Te Espera
            </h3>

            <div className="max-w-md mx-auto space-y-6">
              <select 
                value={selectedSize} 
                onChange={(e) => setSelectedSize(e.target.value)}
                className="w-full h-14 text-lg font-medium px-4 rounded-lg"
                style={{ 
                  borderColor: '#E1C16E',
                  borderWidth: '2px',
                  backgroundColor: '#F5F5F7',
                  color: '#121212',
                  fontFamily: 'Inter, sans-serif',
                  outline: 'none'
                }}
              >
                <option value="">Elige tu experiencia mediterránea</option>
                <option value="5ml">Decant 5ml - 22,90€</option>
                <option value="10ml">Decant 10ml - 39,90€</option>
                <option value="20ml">Decant 20ml - 69,90€</option>
              </select>

              <motion.button
                onClick={handlePurchase}
                disabled={!selectedSize}
                className="w-full px-8 py-6 text-xl font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ 
                  backgroundColor: selectedSize ? '#E1C16E' : '#ccc',
                  color: '#121212',
                  borderRadius: '8px',
                  fontFamily: 'Playfair Display, serif',
                  fontWeight: 500,
                  letterSpacing: '0.02em',
                  border: 'none',
                  cursor: selectedSize ? 'pointer' : 'not-allowed'
                }}
                whileHover={selectedSize ? { scale: 1.02 } : {}}
                whileTap={selectedSize ? { scale: 0.98 } : {}}
              >
                Hacerlo Mío
              </motion.button>
            </div>
          </motion.div>

          {/* Garantía */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 
              className="font-serif"
              style={{ 
                color: '#121212',
                fontSize: '24px',
                letterSpacing: '0.02em',
                fontWeight: 400,
                fontFamily: 'Playfair Display, serif'
              }}
            >
              Garantía de Autenticidad
            </h4>
            <p 
              className="font-sans max-w-2xl mx-auto"
              style={{ 
                color: '#121212',
                fontSize: '16px',
                letterSpacing: '0.01em',
                lineHeight: '1.6',
                fontWeight: 300,
                fontFamily: 'Inter, sans-serif',
                opacity: 0.8
              }}
            >
              Cada decant proviene directamente del frasco original de Creed. Garantizamos autenticidad al 100% y frescura máxima. Si no quedas completamente satisfecho, te devolvemos tu dinero.
            </p>
          </motion.div>

          {/* Disclaimer legal */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p 
              className="font-sans text-center"
              style={{ 
                color: '#121212',
                fontSize: '12px',
                fontFamily: 'Inter, sans-serif',
                opacity: 0.5,
                lineHeight: '1.5'
              }}
            >
              * Aromatik Barcelona no está afiliado con Creed. Todos los productos son auténticos y adquiridos de distribuidores autorizados.
            </p>
          </motion.div>
        </div>
      </section>

      <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse" />}>
        <Footer />
      </Suspense>
    </div>
  );
}