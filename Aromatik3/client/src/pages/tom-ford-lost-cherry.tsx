import { useState, useEffect, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { useScrollPosition } from '@/hooks/use-scroll-trigger';
import Navigation from '@/components/navigation';
import OptimizedImage from '@/components/optimized-image';
import SEOHead from '@/components/seo-head';
import { ProductSchema } from '@/components/seo-schema';
import logger from '@/utils/logger';

const Footer = lazy(() => import('@/components/footer'));

export default function TomFordLostCherry() {
  const [selectedSize, setSelectedSize] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollPosition = useScrollPosition();

  useEffect(() => {
    setIsScrolled(scrollPosition > 100);
  }, [scrollPosition]);

  const handlePurchase = () => {
    if (selectedSize) {
      logger.debug(`Comprar Tom Ford Lost Cherry ${selectedSize}`);
      // Aquí iría la lógica de compra
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0A0A0A' }}>
      <SEOHead
        title="Compra el Decant de Lost Cherry de Tom Ford | Aromatik BCN"
        description="Prueba Lost Cherry con un decant 100% auténtico de Aromatik. Formatos de 5, 10 y 20ml. Descubre la obra maestra de Tom Ford antes de comprar la botella."
        keywords="compra decant lost cherry, tom ford, muestra lost cherry, perfume tom ford, decant auténtico aromatik"
        canonicalUrl="https://aromatikbarcelona.com/tom-ford-lost-cherry"
        ogImage="https://aromatikbarcelona.com/images/tom-ford-lost-cherry-og.jpg"
        productSchema={{
          name: "Decant Tom Ford Lost Cherry",
          description: "Muestra auténtica de 5ml del exclusivo perfume Lost Cherry de Tom Ford",
          brand: "Tom Ford",
          category: "Perfume",
          price: "18.00",
          availability: "https://schema.org/InStock"
        }}
      />
      <ProductSchema
        name="Decant Tom Ford Lost Cherry"
        description="Muestra auténtica de 5ml del exclusivo perfume Lost Cherry de Tom Ford"
        brand="Tom Ford"
        category="Perfume"
        price="18.00"
        availability="https://schema.org/InStock"
        image="https://aromatikbarcelona.com/images/tom-ford-lost-cherry.jpg"
        sku="AR-TFLC-5ML"
        url="https://aromatikbarcelona.com/tom-ford-lost-cherry"
      />
      <Navigation isScrolled={isScrolled} />
      
      {/* Hero Section - Forbidden Fruit */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image - Dark Cherry */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://i.imgur.com/qmb5QrI.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.3)'
          }}
        />
        
        {/* Dark sensual overlay */}
        <div 
          className="absolute inset-0 z-10"
          style={{
            background: 'linear-gradient(45deg, rgba(10, 10, 10, 0.8) 0%, rgba(139, 0, 0, 0.2) 50%, rgba(10, 10, 10, 0.9) 100%)'
          }}
        />

        {/* Content */}
        <div className="relative z-20 text-center px-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="space-y-8"
          >
            <h1 
              className="font-serif"
              style={{ 
                color: '#F5F5F7',
                fontSize: 'clamp(48px, 8vw, 84px)',
                letterSpacing: '0.02em',
                lineHeight: '1.1',
                fontWeight: 400,
                fontFamily: 'Playfair Display, serif',
                textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)'
              }}
            >
              Tom Ford Lost Cherry
            </h1>

            <h2 
              className="font-sans"
              style={{ 
                color: '#F5F5F7',
                fontSize: 'clamp(24px, 4vw, 36px)',
                letterSpacing: '0.05em',
                fontWeight: 300,
                fontFamily: 'Inter, sans-serif',
                opacity: 0.9,
                textShadow: '1px 1px 4px rgba(0, 0, 0, 0.8)'
              }}
            >
              Un bocado prohibido
            </h2>

            {/* Scroll indicator */}
            <motion.div
              className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <div 
                className="w-6 h-10 border-2 rounded-full flex justify-center"
                style={{ borderColor: '#8B0000' }}
              >
                <motion.div
                  className="w-1 h-3 rounded-full mt-2"
                  style={{ backgroundColor: '#8B0000' }}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Propuesta de Valor - Seductive Pricing */}
      <section className="py-32 px-8" style={{ backgroundColor: '#0A0A0A' }}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            <h2 
              className="font-serif"
              style={{ 
                color: '#F5F5F7',
                fontSize: 'clamp(36px, 6vw, 54px)',
                letterSpacing: '0.02em',
                lineHeight: '1.2',
                fontWeight: 400,
                fontFamily: 'Playfair Display, serif'
              }}
            >
              El Decant Lost Cherry: el Descaro de Tom Ford, la Audacia de Aromatik
            </h2>

            <div className="space-y-12">
              {/* Precio tachado */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <p 
                  className="font-sans"
                  style={{ 
                    color: '#F5F5F7',
                    fontSize: '20px',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 400,
                    opacity: 0.8
                  }}
                >
                  Botella Completa (50ml):
                </p>
                <span 
                  className="font-serif line-through"
                  style={{ 
                    color: '#F5F5F7',
                    fontSize: '28px',
                    fontFamily: 'Playfair Display, serif',
                    fontWeight: 500,
                    opacity: 0.6
                  }}
                >
                  300€
                </span>
              </motion.div>
              
              {/* Precio del decant */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <p 
                  className="font-sans"
                  style={{ 
                    color: '#F5F5F7',
                    fontSize: '20px',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 500,
                    opacity: 0.9
                  }}
                >
                  Tu Muestra Lost Cherry Aromatik (desde):
                </p>
                <span 
                  className="font-serif"
                  style={{ 
                    color: '#8B0000',
                    fontSize: '36px',
                    fontFamily: 'Playfair Display, serif',
                    fontWeight: 600,
                    textShadow: '0 0 20px rgba(139, 0, 0, 0.4)'
                  }}
                >
                  29,90€
                </span>
              </motion.div>

              {/* Insight seductor */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="max-w-2xl mx-auto"
              >
                <p 
                  className="font-sans italic"
                  style={{ 
                    color: '#F5F5F7',
                    fontSize: '18px',
                    letterSpacing: '0.01em',
                    lineHeight: '1.6',
                    fontFamily: 'Inter, sans-serif',
                    opacity: 0.8
                  }}
                >
                  "No necesitas poseer completamente algo para ser poseído por ello. 
                  A veces, un bocado es más intenso que el banquete entero."
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bloque de Conversión - Dark Temptation */}
      <section className="py-32 px-8" style={{ backgroundColor: '#0F0F0F' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left - Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <img 
                src="https://i.imgur.com/bQZGiPf.png"
                alt="decant-de-5ml-tom-ford-lost-cherry-muestra-autentica-aromatik"
                className="aspect-square rounded-2xl shadow-2xl relative overflow-hidden max-w-md mx-auto w-full h-auto object-cover"
              />

              <p 
                className="font-sans text-center italic"
                style={{ 
                  color: '#F5F5F7',
                  fontSize: '16px',
                  letterSpacing: '0.01em',
                  lineHeight: '1.6',
                  fontFamily: 'Inter, sans-serif',
                  opacity: 0.7
                }}
              >
                "Cada gota contiene el secreto más dulce"
              </p>
            </motion.div>

            {/* Right - Conversion Block */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <h3 
                className="font-serif"
                style={{ 
                  color: '#8B0000',
                  fontSize: 'clamp(32px, 5vw, 48px)',
                  letterSpacing: '0.02em',
                  lineHeight: '1.2',
                  fontWeight: 400,
                  fontFamily: 'Playfair Display, serif',
                  textShadow: '0 0 20px rgba(139, 0, 0, 0.3)'
                }}
              >
                Cae en la Tentación
              </h3>

              {/* Size options */}
              <div className="space-y-4">
                {[
                  { size: '5ml', desc: 'El secreto para una noche', price: '29,90€' },
                  { size: '10ml', desc: 'Tu placer privado', price: '54,90€', popular: true },
                  { size: '20ml', desc: 'Reserva para tus vicios', price: '99,90€' }
                ].map((option, index) => (
                  <motion.button
                    key={option.size}
                    onClick={() => setSelectedSize(option.size)}
                    className={`w-full p-6 rounded-xl border-2 transition-all duration-300 relative overflow-hidden ${
                      selectedSize === option.size ? 'border-[#8B0000] bg-[#8B0000]/10' : 'border-gray-600 bg-gray-900/30'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {option.popular && (
                      <div 
                        className="absolute top-2 right-2 px-2 py-1 rounded text-xs font-medium"
                        style={{ backgroundColor: '#8B0000', color: '#F5F5F7' }}
                      >
                        MÁS DESEADO
                      </div>
                    )}
                    
                    <div className="flex justify-between items-center">
                      <div className="text-left">
                        <div 
                          className="font-serif"
                          style={{ 
                            color: '#F5F5F7',
                            fontSize: '20px',
                            fontFamily: 'Playfair Display, serif',
                            fontWeight: 500
                          }}
                        >
                          {option.size}
                        </div>
                        <div 
                          className="font-sans"
                          style={{ 
                            color: '#F5F5F7',
                            fontSize: '14px',
                            fontFamily: 'Inter, sans-serif',
                            opacity: 0.8
                          }}
                        >
                          {option.desc}
                        </div>
                      </div>
                      <span 
                        className="font-serif"
                        style={{ 
                          color: selectedSize === option.size ? '#8B0000' : '#F5F5F7',
                          fontSize: '24px',
                          fontFamily: 'Playfair Display, serif',
                          fontWeight: 600
                        }}
                      >
                        {option.price}
                      </span>
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* CTA Principal */}
              <motion.button
                onClick={handlePurchase}
                disabled={!selectedSize}
                className="w-full px-8 py-8 text-2xl font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-2xl relative overflow-hidden"
                style={{ 
                  backgroundColor: selectedSize ? '#8B0000' : 'rgba(139, 0, 0, 0.3)',
                  color: '#F5F5F7',
                  borderRadius: '12px',
                  fontFamily: 'Playfair Display, serif',
                  fontWeight: 500,
                  letterSpacing: '0.02em',
                  border: selectedSize ? '2px solid #8B0000' : '2px solid rgba(139, 0, 0, 0.3)',
                  boxShadow: selectedSize ? '0 0 30px rgba(139, 0, 0, 0.4)' : 'none'
                }}
                whileHover={selectedSize ? { scale: 1.02, y: -2 } : {}}
                whileTap={selectedSize ? { scale: 0.98 } : {}}
              >
                {/* Pulsing glow when active */}
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

              <p 
                className="font-sans text-center"
                style={{ 
                  color: '#F5F5F7',
                  fontSize: '14px',
                  fontFamily: 'Inter, sans-serif',
                  opacity: 0.6,
                  fontStyle: 'italic'
                }}
              >
                {!selectedSize ? "Elige tu nivel de tentación" : "Un paso más cerca del pecado dulce"}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Historia del Perfume - Seductive Narrative */}
      <section className="py-32 px-8" style={{ backgroundColor: '#0A0A0A' }}>
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
                color: '#8B0000',
                fontSize: 'clamp(36px, 6vw, 54px)',
                letterSpacing: '0.02em',
                lineHeight: '1.2',
                fontWeight: 400,
                fontFamily: 'Playfair Display, serif',
                textShadow: '0 0 20px rgba(139, 0, 0, 0.3)'
              }}
            >
              Un Juego Peligroso
            </h3>

            <div className="grid md:grid-cols-2 gap-16 items-center text-left">
              {/* Left content */}
              <div className="space-y-8">
                <p 
                  className="font-sans"
                  style={{ 
                    color: '#F5F5F7',
                    fontSize: '20px',
                    letterSpacing: '0.01em',
                    lineHeight: '1.7',
                    fontWeight: 300,
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  Lost Cherry es un viaje a lo prohibido. Una apertura explosiva de cereza negra y licor de almendra amarga se rinde ante un corazón floral de rosa turca y jazmín. Pero el verdadero secreto reside en su fondo: una mezcla inesperada de bálsamo del Perú, haba tonka tostada y vetiver. Es un perfume que juega con la dualidad: dulce y agrio, brillante y oscuro. Inocente en la superficie, profundamente carnal por dentro.
                </p>

                {/* Seductive insight */}
                <div 
                  className="p-6 rounded-xl"
                  style={{ backgroundColor: 'rgba(139, 0, 0, 0.1)', border: '1px solid rgba(139, 0, 0, 0.2)' }}
                >
                  <p 
                    className="font-sans italic"
                    style={{ 
                      color: '#8B0000',
                      fontSize: '16px',
                      letterSpacing: '0.01em',
                      lineHeight: '1.6',
                      fontFamily: 'Inter, sans-serif',
                      opacity: 0.9
                    }}
                  >
                    "La tentación nunca fue tan elegante. Un aroma que susurra secretos al oído y promete placeres que solo los valientes se atreven a descubrir."
                  </p>
                </div>
              </div>

              {/* Right image - Dark velvet texture */}
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
                    backgroundImage: `url('https://i.imgur.com/7QdRYhn.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  {/* Dark cherry velvet overlay */}
                  <div 
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(45deg, rgba(139, 0, 0, 0.4) 0%, rgba(10, 10, 10, 0.6) 100%)'
                    }}
                  />
                </div>
                
                {/* Floating dark elements for sensual luxury */}
                <motion.div
                  className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full opacity-20"
                  style={{ backgroundColor: '#8B0000' }}
                  animate={{ y: [0, -10, 0], opacity: [0.1, 0.3, 0.1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Prueba Social Específica */}
      <section className="py-32 px-8" style={{ backgroundColor: '#0F0F0F' }}>
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
                color: '#F5F5F7',
                fontSize: '42px',
                letterSpacing: '0.02em',
                lineHeight: '1.3',
                fontWeight: 400,
                fontFamily: 'Playfair Display, serif'
              }}
            >
              Confesiones de Nuestro Círculo
            </h3>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Testimonio 1 */}
              <div className="space-y-4">
                <div className="flex items-center space-x-1 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} style={{ color: '#8B0000', fontSize: '20px' }}>★</span>
                  ))}
                </div>
                <p 
                  className="font-sans italic"
                  style={{ 
                    color: '#F5F5F7',
                    fontSize: '16px',
                    letterSpacing: '0.01em',
                    lineHeight: '1.6',
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  "Es el perfume de cereza más realista y sexy que he olido. No es un aroma infantil, es pura seducción en una botella. Adictivo."
                </p>
                <p 
                  className="font-sans font-medium"
                  style={{ 
                    color: '#F5F5F7',
                    fontSize: '14px',
                    fontFamily: 'Inter, sans-serif',
                    opacity: 0.7
                  }}
                >
                  — Carla P. ★★★★★
                </p>
              </div>

              {/* Testimonio 2 */}
              <div className="space-y-4">
                <div className="flex items-center space-x-1 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} style={{ color: '#8B0000', fontSize: '20px' }}>★</span>
                  ))}
                </div>
                <p 
                  className="font-sans italic"
                  style={{ 
                    color: '#F5F5F7',
                    fontSize: '16px',
                    letterSpacing: '0.01em',
                    lineHeight: '1.6',
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  "Mi arma secreta para citas y noches especiales. Es increíblemente potente, así que el formato decant es perfecto para usarlo cuando de verdad importa."
                </p>
                <p 
                  className="font-sans font-medium"
                  style={{ 
                    color: '#F5F5F7',
                    fontSize: '14px',
                    fontFamily: 'Inter, sans-serif',
                    opacity: 0.7
                  }}
                >
                  — David G. ★★★★★
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Garantía y Cierre Final */}
      <section className="py-24 px-8" style={{ backgroundColor: '#0A0A0A' }}>
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
                color: '#8B0000',
                fontSize: '36px',
                letterSpacing: '0.02em',
                lineHeight: '1.3',
                fontWeight: 400,
                fontFamily: 'Playfair Display, serif',
                textShadow: '0 0 20px rgba(139, 0, 0, 0.3)'
              }}
            >
              Tu Último Momento de Resistencia
            </h3>

            <div className="max-w-md mx-auto space-y-6">
              <select 
                value={selectedSize} 
                onChange={(e) => setSelectedSize(e.target.value)}
                className="w-full h-14 text-lg font-medium px-4 rounded-lg"
                style={{ 
                  borderColor: '#8B0000',
                  borderWidth: '2px',
                  backgroundColor: '#1A1A1A',
                  color: '#F5F5F7',
                  fontFamily: 'Inter, sans-serif',
                  outline: 'none'
                }}
              >
                <option value="">Elige tu nivel de tentación</option>
                <option value="5ml">5ml - El secreto para una noche - 29,90€</option>
                <option value="10ml">10ml - Tu placer privado - 54,90€</option>
                <option value="20ml">20ml - Reserva para tus vicios - 99,90€</option>
              </select>

              <motion.button
                onClick={handlePurchase}
                disabled={!selectedSize}
                className="w-full px-8 py-6 text-xl font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ 
                  backgroundColor: selectedSize ? '#8B0000' : '#333',
                  color: '#F5F5F7',
                  borderRadius: '8px',
                  fontFamily: 'Playfair Display, serif',
                  fontWeight: 500,
                  letterSpacing: '0.02em',
                  border: 'none',
                  cursor: selectedSize ? 'pointer' : 'not-allowed',
                  boxShadow: selectedSize ? '0 0 20px rgba(139, 0, 0, 0.4)' : 'none'
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
                color: '#F5F5F7',
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
                color: '#F5F5F7',
                fontSize: '16px',
                letterSpacing: '0.01em',
                lineHeight: '1.6',
                fontFamily: 'Inter, sans-serif',
                opacity: 0.8
              }}
            >
              Cada decant proviene directamente de botellas auténticas de Tom Ford. 
              Garantizamos la pureza y calidad de cada gota que llega a tus manos.
            </p>
          </motion.div>

          {/* Disclaimer legal */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="pt-8 border-t border-gray-800"
          >
            <p 
              className="font-sans text-center"
              style={{ 
                color: '#F5F5F7',
                fontSize: '12px',
                letterSpacing: '0.01em',
                lineHeight: '1.5',
                fontFamily: 'Inter, sans-serif',
                opacity: 0.6
              }}
            >
              *Aromatik Barcelona no está afiliado con Tom Ford Beauty. 
              Todos los nombres de marcas y fragancias son propiedad de sus respectivos dueños. 
              Nuestros decants son creados para fines de muestra y experiencia personal.
            </p>
          </motion.div>
        </div>
      </section>

      <Suspense fallback={<div className="h-96 bg-gray-900 animate-pulse" />}>
        <Footer />
      </Suspense>
    </div>
  );
}