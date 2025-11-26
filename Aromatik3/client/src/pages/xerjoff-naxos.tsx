import { useState, useEffect, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { useScrollPosition } from '@/hooks/use-scroll-trigger';
import Navigation from '@/components/navigation';
import SEOHead from '@/components/seo-head';
import { ProductSchema } from '@/components/seo-schema';
import OptimizedImage from '@/components/optimized-image';
import logger from '@/utils/logger';

const Footer = lazy(() => import('@/components/footer'));

export default function XerjoffNaxos() {
  const [selectedSize, setSelectedSize] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollPosition = useScrollPosition();

  useEffect(() => {
    setIsScrolled(scrollPosition > 100);
  }, [scrollPosition]);

  const handlePurchase = () => {
    if (selectedSize) {
      logger.debug(`Comprar Xerjoff Naxos ${selectedSize}`);
      // Aquí iría la lógica de compra
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F5F5F7' }}>
      <SEOHead
        title="Compra el Decant de Naxos de Xerjoff | Aromatik BCN"
        description="Prueba Naxos con un decant 100% auténtico de Aromatik. Formatos de 5, 10 y 20ml. Descubre la obra maestra de Xerjoff antes de comprar la botella."
        keywords="compra decant naxos, xerjoff, muestra naxos, perfume xerjoff, decant auténtico aromatik"
        canonicalUrl="https://aromatikbarcelona.com/xerjoff-naxos"
        ogImage="https://aromatikbarcelona.com/images/xerjoff-naxos-og.jpg"
        productSchema={{
          name: "Decant Xerjoff Naxos",
          description: "Muestra auténtica de 5ml del exclusivo perfume Naxos de Xerjoff con notas de tabaco y miel",
          brand: "Xerjoff",
          category: "Perfume",
          price: "22.00",
          availability: "https://schema.org/InStock"
        }}
      />
      <ProductSchema
        name="Decant Xerjoff Naxos"
        description="Muestra auténtica de 5ml del exclusivo perfume Naxos de Xerjoff con notas de tabaco y miel"
        brand="Xerjoff"
        category="Perfume"
        price="22.00"
        availability="https://schema.org/InStock"
        image="https://aromatikbarcelona.com/images/xerjoff-naxos.jpg"
        sku="AR-XNAX-5ML"
        url="https://aromatikbarcelona.com/xerjoff-naxos"
      />
      <Navigation isScrolled={isScrolled} />
      
      {/* Hero Section - Sicilian Opulence */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image - Sicilian Table Setup */}
        <div className="absolute inset-0 z-0">
          <OptimizedImage
            src="https://i.imgur.com/vdNgYHF.png"
            alt="decant-xerjoff-naxos-sobre-mesa-madera-siciliana"
            priority={true}
            className="w-full h-full"
            style={{ objectFit: 'cover', filter: 'brightness(0.7)' }}
          />
        </div>
        
        {/* Classical Mediterranean overlay */}
        <div 
          className="absolute inset-0 z-10"
          style={{
            background: 'linear-gradient(45deg, rgba(245, 245, 247, 0.9) 0%, rgba(234, 160, 0, 0.1) 50%, rgba(245, 245, 247, 0.8) 100%)'
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
                color: '#121212',
                fontSize: 'clamp(48px, 8vw, 84px)',
                letterSpacing: '0.02em',
                lineHeight: '1.1',
                fontWeight: 400,
                fontFamily: 'Playfair Display, serif',
                textShadow: '2px 2px 8px rgba(234, 160, 0, 0.3)'
              }}
            >
              Xerjoff Naxos
            </h1>

            <h2 
              className="font-sans"
              style={{ 
                color: '#121212',
                fontSize: 'clamp(24px, 4vw, 36px)',
                letterSpacing: '0.05em',
                fontWeight: 300,
                fontFamily: 'Inter, sans-serif',
                opacity: 0.9
              }}
            >
              La opulencia clásica, redefinida
            </h2>

            {/* Golden scroll indicator */}
            <motion.div
              className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <div 
                className="w-6 h-10 border-2 rounded-full flex justify-center"
                style={{ borderColor: '#EAA000' }}
              >
                <motion.div
                  className="w-1 h-3 rounded-full mt-2"
                  style={{ backgroundColor: '#EAA000' }}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Propuesta de Valor - Classical Heritage */}
      <section className="py-32 px-8" style={{ backgroundColor: '#F5F5F7' }}>
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
                color: '#121212',
                fontSize: 'clamp(36px, 6vw, 54px)',
                letterSpacing: '0.02em',
                lineHeight: '1.2',
                fontWeight: 400,
                fontFamily: 'Playfair Display, serif'
              }}
            >
              El Decant Naxos: la Maestría de Xerjoff, el Acceso de Aromatik
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
                    color: '#121212',
                    fontSize: '20px',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 400,
                    opacity: 0.8
                  }}
                >
                  Botella Completa (100ml):
                </p>
                <span 
                  className="font-serif line-through"
                  style={{ 
                    color: '#121212',
                    fontSize: '28px',
                    fontFamily: 'Playfair Display, serif',
                    fontWeight: 500,
                    opacity: 0.6
                  }}
                >
                  235€
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
                    color: '#121212',
                    fontSize: '20px',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 500,
                    opacity: 0.9
                  }}
                >
                  Tu Muestra Naxos Aromatik (desde):
                </p>
                <span 
                  className="font-serif"
                  style={{ 
                    color: '#EAA000',
                    fontSize: '36px',
                    fontFamily: 'Playfair Display, serif',
                    fontWeight: 600,
                    textShadow: '0 0 20px rgba(234, 160, 0, 0.4)'
                  }}
                >
                  26,90€
                </span>
              </motion.div>

              {/* Insight clásico */}
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
                    color: '#121212',
                    fontSize: '18px',
                    letterSpacing: '0.01em',
                    lineHeight: '1.6',
                    fontFamily: 'Inter, sans-serif',
                    opacity: 0.8
                  }}
                >
                  "La verdadera riqueza no está en poseer todo, sino en saber disfrutar 
                  cada gota de lo exquisito. Como el sol siciliano que acaricia sin prisa."
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bloque de Conversión - Golden Honey */}
      <section className="py-32 px-8" style={{ backgroundColor: '#FAFAFA' }}>
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
                src="https://i.imgur.com/UGztltH.png"
                alt="decant-de-5ml-xerjoff-naxos-muestra-autentica-aromatik"
                className="aspect-square rounded-2xl shadow-2xl relative overflow-hidden max-w-md mx-auto w-full h-auto object-cover"
              />

              <p 
                className="font-sans text-center italic"
                style={{ 
                  color: '#121212',
                  fontSize: '16px',
                  letterSpacing: '0.01em',
                  lineHeight: '1.6',
                  fontFamily: 'Inter, sans-serif',
                  opacity: 0.7
                }}
              >
                "Cada gota es un viaje a los campos de miel de Naxos"
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
                  color: '#EAA000',
                  fontSize: 'clamp(32px, 5vw, 48px)',
                  letterSpacing: '0.02em',
                  lineHeight: '1.2',
                  fontWeight: 400,
                  fontFamily: 'Playfair Display, serif',
                  textShadow: '0 0 20px rgba(234, 160, 0, 0.3)'
                }}
              >
                Descubre Sicilia
              </h3>

              {/* Size options */}
              <div className="space-y-4">
                {[
                  { size: '5ml', desc: 'Una dosis de sol mediterráneo', price: '26,90€' },
                  { size: '10ml', desc: 'El aroma de un verano italiano', price: '49,90€', popular: true },
                  { size: '20ml', desc: 'Tu reserva personal de la dolce vita', price: '89,90€' }
                ].map((option, index) => (
                  <motion.button
                    key={option.size}
                    onClick={() => setSelectedSize(option.size)}
                    className={`w-full p-6 rounded-xl border-2 transition-all duration-300 relative overflow-hidden ${
                      selectedSize === option.size ? 'border-[#EAA000] bg-[#EAA000]/10' : 'border-gray-300 bg-white/50'
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
                        style={{ backgroundColor: '#EAA000', color: '#F5F5F7' }}
                      >
                        MÁS DESEADO
                      </div>
                    )}
                    
                    <div className="flex justify-between items-center">
                      <div className="text-left">
                        <div 
                          className="font-serif"
                          style={{ 
                            color: '#121212',
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
                            color: '#121212',
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
                          color: selectedSize === option.size ? '#EAA000' : '#121212',
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
                  backgroundColor: selectedSize ? '#EAA000' : 'rgba(234, 160, 0, 0.3)',
                  color: '#121212',
                  borderRadius: '12px',
                  fontFamily: 'Playfair Display, serif',
                  fontWeight: 500,
                  letterSpacing: '0.02em',
                  border: selectedSize ? '2px solid #EAA000' : '2px solid rgba(234, 160, 0, 0.3)',
                  boxShadow: selectedSize ? '0 0 30px rgba(234, 160, 0, 0.4)' : 'none'
                }}
                whileHover={selectedSize ? { scale: 1.02, y: -2 } : {}}
                whileTap={selectedSize ? { scale: 0.98 } : {}}
              >
                {/* Golden glow when active */}
                {selectedSize && (
                  <motion.div
                    className="absolute inset-0 opacity-20"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
                    animate={{ opacity: [0.1, 0.3, 0.1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}
                Hacerlo Mío
              </motion.button>

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
                {!selectedSize ? "Elige tu dosis de sol mediterráneo" : "Un paso más cerca de la dolce vita"}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Historia del Perfume - Classical Narrative */}
      <section className="py-32 px-8" style={{ backgroundColor: '#FAFAFA' }}>
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
                color: '#EAA000',
                fontSize: 'clamp(36px, 6vw, 54px)',
                letterSpacing: '0.02em',
                lineHeight: '1.2',
                fontWeight: 400,
                fontFamily: 'Playfair Display, serif',
                textShadow: '0 0 20px rgba(234, 160, 0, 0.3)'
              }}
            >
              Un Tributo Clásico
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
                  Naxos es una celebración de la riqueza de Sicilia. Abre con la energía vibrante de la bergamota y el limón, suavizada por la calma aromática de la lavanda. El corazón es una sinfonía audaz donde la miel se encuentra con la canela y el jazmín, creando una dulzura dorada e inolvidable. El acto final es una base de carácter inmenso: hojas de tabaco, haba tonka y vainilla. Es un perfume que habla de historia, pasión y la tierra bañada por el sol.
                </p>

                {/* Classical insight */}
                <div 
                  className="p-6 rounded-xl"
                  style={{ backgroundColor: 'rgba(234, 160, 0, 0.1)', border: '1px solid rgba(234, 160, 0, 0.2)' }}
                >
                  <p 
                    className="font-sans italic"
                    style={{ 
                      color: '#EAA000',
                      fontSize: '16px',
                      letterSpacing: '0.01em',
                      lineHeight: '1.6',
                      fontFamily: 'Inter, sans-serif',
                      opacity: 0.9
                    }}
                  >
                    "La elegancia no grita, susurra. Como el viento que acaricia los campos de miel bajo el sol siciliano."
                  </p>
                </div>
              </div>

              {/* Right image - Sicilian villa texture */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-[4/5] rounded-2xl shadow-2xl relative overflow-hidden">
                  <OptimizedImage
                    src="https://i.imgur.com/Ch0CJV7.png"
                    alt="Sicilian villa texture background"
                    loading="lazy"
                    className="w-full h-full"
                  />
                  {/* Golden honey overlay */}
                  <div 
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(45deg, rgba(234, 160, 0, 0.3) 0%, rgba(245, 245, 247, 0.4) 100%)'
                    }}
                  />
                </div>
                
                {/* Floating golden elements for Mediterranean luxury */}
                <motion.div
                  className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full opacity-20"
                  style={{ backgroundColor: '#EAA000' }}
                  animate={{ y: [0, -10, 0], opacity: [0.1, 0.3, 0.1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Prueba Social Específica */}
      <section className="py-32 px-8" style={{ backgroundColor: '#F5F5F7' }}>
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
              La Voz de Nuestro Círculo
            </h3>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Testimonio 1 */}
              <div className="space-y-4">
                <div className="flex items-center space-x-1 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} style={{ color: '#EAA000', fontSize: '20px' }}>★</span>
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
                  "El perfume de miel y tabaco más elegante que he probado. No es empalagoso, es pura clase. Tiene un carácter increíble."
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
                  — Marco B. ★★★★★
                </p>
              </div>

              {/* Testimonio 2 */}
              <div className="space-y-4">
                <div className="flex items-center space-x-1 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} style={{ color: '#EAA000', fontSize: '20px' }}>★</span>
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
                  "Una obra maestra. Te transporta directamente a un verano en Italia. Perfecto para los que buscan algo más allá de lo comercial."
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
                  — Isabel G. ★★★★★
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Garantía y Cierre Final */}
      <section className="py-24 px-8" style={{ backgroundColor: '#FAFAFA' }}>
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
                color: '#EAA000',
                fontSize: '36px',
                letterSpacing: '0.02em',
                lineHeight: '1.3',
                fontWeight: 400,
                fontFamily: 'Playfair Display, serif',
                textShadow: '0 0 20px rgba(234, 160, 0, 0.3)'
              }}
            >
              Tu Momento Siciliano Te Espera
            </h3>

            <div className="max-w-md mx-auto space-y-6">
              <select 
                value={selectedSize} 
                onChange={(e) => setSelectedSize(e.target.value)}
                className="w-full h-14 text-lg font-medium px-4 rounded-lg"
                style={{ 
                  borderColor: '#EAA000',
                  borderWidth: '2px',
                  backgroundColor: '#F5F5F7',
                  color: '#121212',
                  fontFamily: 'Inter, sans-serif',
                  outline: 'none'
                }}
              >
                <option value="">Elige tu dosis de sol mediterráneo</option>
                <option value="5ml">5ml - Una dosis de sol mediterráneo - 26,90€</option>
                <option value="10ml">10ml - El aroma de un verano italiano - 49,90€</option>
                <option value="20ml">20ml - Tu reserva personal de la dolce vita - 89,90€</option>
              </select>

              <motion.button
                onClick={handlePurchase}
                disabled={!selectedSize}
                className="w-full px-8 py-6 text-xl font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ 
                  backgroundColor: selectedSize ? '#EAA000' : 'rgba(234, 160, 0, 0.3)',
                  color: '#121212',
                  borderRadius: '8px',
                  fontFamily: 'Playfair Display, serif',
                  fontWeight: 500,
                  letterSpacing: '0.02em',
                  border: 'none',
                  cursor: selectedSize ? 'pointer' : 'not-allowed',
                  boxShadow: selectedSize ? '0 0 20px rgba(234, 160, 0, 0.4)' : 'none'
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
                fontFamily: 'Inter, sans-serif',
                opacity: 0.8
              }}
            >
              Cada decant proviene directamente de botellas auténticas de Xerjoff. 
              Garantizamos la pureza y calidad siciliana de cada gota que llega a tus manos.
            </p>
          </motion.div>

          {/* Disclaimer legal */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="pt-8 border-t border-gray-300"
          >
            <p 
              className="font-sans text-center"
              style={{ 
                color: '#121212',
                fontSize: '12px',
                letterSpacing: '0.01em',
                lineHeight: '1.5',
                fontFamily: 'Inter, sans-serif',
                opacity: 0.6
              }}
            >
              *Aromatik Barcelona no está afiliado con Xerjoff. 
              Todos los nombres de marcas y fragancias son propiedad de sus respectivos dueños. 
              Nuestros decants son creados para fines de muestra y experiencia personal.
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