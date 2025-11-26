import { useEffect, useState } from 'react';
import { useScrollPosition } from '@/hooks/use-scroll-trigger';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import SEOHead from '@/components/seo-head';
import { ProductSchema } from '@/components/seo-schema';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function BaccaratRouge540() {
  const scrollY = useScrollPosition();
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedSize, setSelectedSize] = useState('');

  useEffect(() => {
    setIsScrolled(scrollY > 50);
  }, [scrollY]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#121212' }}>
      <SEOHead
        title="Compra el Decant de Baccarat Rouge 540 de Maison Francis Kurkdjian | Aromatik BCN"
        description="Prueba Baccarat Rouge 540 con un decant 100% auténtico de Aromatik. Formatos de 5, 10 y 20ml. Descubre la obra maestra de Maison Francis Kurkdjian antes de comprar la botella."
        keywords="compra decant baccarat rouge 540, maison francis kurkdjian, muestra br540, perfume kurkdjian, decant auténtico aromatik"
        canonicalUrl="https://aromatikbarcelona.com/baccarat-rouge-540"
        ogImage="https://aromatikbarcelona.com/images/baccarat-rouge-540-og.jpg"
        productSchema={{
          name: "Decant Baccarat Rouge 540",
          description: "Muestra auténtica de 5ml del icónico perfume Baccarat Rouge 540 de Maison Francis Kurkdjian",
          brand: "Maison Francis Kurkdjian",
          category: "Perfume",
          price: "15.00",
          availability: "https://schema.org/InStock"
        }}
      />
      <ProductSchema
        name="Decant Baccarat Rouge 540"
        description="Muestra auténtica de 5ml del icónico perfume Baccarat Rouge 540 de Maison Francis Kurkdjian"
        brand="Maison Francis Kurkdjian"
        category="Perfume"
        price="24.90"
        availability="https://schema.org/InStock"
        image="https://aromatikbarcelona.com/images/baccarat-rouge-540.jpg"
        sku="AR-BR540-5ML"
        url="https://aromatikbarcelona.com/baccarat-rouge-540"
      />
      <Navigation isScrolled={isScrolled} />
      
      {/* Hero Section - Encabezado de Página */}
      <section className="min-h-screen flex items-center justify-center relative pt-32 pb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto px-12 md:px-16">
          {/* Imagen Hero - Cristal ardiendo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 1.2,
              delay: 0.3,
              ease: "easeOut"
            }}
            className="order-2 lg:order-1"
          >
            <img 
              src="https://i.imgur.com/iclmLaj.jpeg"
              alt="decant-de-5ml-baccarat-rouge-540-sobre-mesa-cristal"
              className="aspect-square rounded-lg overflow-hidden w-full h-auto object-cover"
            />
          </motion.div>

          {/* Texto Hero */}
          <div className="text-center lg:text-left order-1 lg:order-2">
            {/* H1 - Titular Principal */}
            <motion.h1 
              className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 1.2,
                delay: 0.5,
                ease: "easeOut"
              }}
              style={{ 
                color: '#F5F5F7',
                letterSpacing: '0.03em',
                lineHeight: '1.1',
                fontWeight: 400,
                fontFamily: 'Playfair Display, serif'
              }}
            >
              Baccarat Rouge 540
            </motion.h1>
            
            {/* H2 - Subtítulo */}
            <motion.h2 
              className="font-serif text-2xl sm:text-3xl md:text-4xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 1,
                delay: 0.8,
                ease: "easeOut"
              }}
              style={{ 
                color: '#9F2B2B',
                letterSpacing: '0.02em',
                lineHeight: '1.3',
                fontWeight: 400,
                fontFamily: 'Playfair Display, serif'
              }}
            >
              Lo que sientes no se puede explicar. Solo se puede llevar.
            </motion.h2>
          </div>
        </div>
      </section>

      {/* La Propuesta de Valor - El Anclaje de Precio */}
      <section className="py-32" style={{ backgroundColor: '#0D0D0D' }}>
        <div className="text-center max-w-5xl mx-auto px-12 md:px-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            {/* Titular de la sección */}
            <h2 
              className="font-serif text-4xl md:text-5xl mb-16"
              style={{ 
                color: '#F5F5F7',
                letterSpacing: '0.03em',
                lineHeight: '1.2',
                fontWeight: 400,
                fontFamily: 'Playfair Display, serif'
              }}
            >
              El Decant Baccarat Rouge 540: la Alquimia de Maison Francis Kurkdjian, la Lógica de Aromatik.
            </h2>

            {/* Comparativa de Precios */}
            <div className="space-y-12">
              {/* Precio de referencia */}
              <div className="space-y-6">
                <p 
                  style={{
                    color: '#F5F5F7',
                    fontSize: '18px',
                    fontFamily: 'Inter, sans-serif',
                    opacity: 0.8
                  }}
                >
                  Botella Completa (70ml)
                </p>
                <div 
                  className="text-6xl font-light line-through"
                  style={{
                    color: '#F5F5F7',
                    fontFamily: 'Inter, sans-serif',
                    opacity: 0.5
                  }}
                >
                  235 €
                </div>
              </div>

              {/* Separador visual */}
              <div 
                className="w-32 h-px mx-auto"
                style={{ backgroundColor: 'rgba(159, 43, 43, 0.5)' }}
              />

              {/* Nuestra propuesta */}
              <div className="space-y-6">
                <p 
                  style={{
                    color: '#9F2B2B',
                    fontSize: '18px',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 500
                  }}
                >
                  Tu Muestra BR540 Aromatik (desde)
                </p>
                <div 
                  className="text-7xl font-light"
                  style={{
                    color: '#9F2B2B',
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  24,90€
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* La Oferta Irresistible - El Bloque de Conversión */}
      <section className="py-32" style={{ maxWidth: '900px', margin: '0 auto', padding: '128px 48px' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          {/* Titular */}
          <h2 
            className="font-serif text-4xl md:text-5xl text-center mb-12"
            style={{ 
              color: '#F5F5F7',
              letterSpacing: '0.03em',
              lineHeight: '1.2',
              fontWeight: 400,
              fontFamily: 'Playfair Display, serif'
            }}
          >
            Posee el Misterio.
          </h2>

          {/* Selector de Tamaño - Botones interactivos */}
          <div className="space-y-6">
            <div className="grid gap-4">
              {/* 5ml - Para ocasiones únicas */}
              <motion.button
                className={`p-6 rounded-lg border-2 text-left transition-all duration-300 ${
                  selectedSize === '5ml' 
                    ? 'border-red-600 bg-red-600 bg-opacity-10' 
                    : 'border-gray-600 hover:border-red-600'
                }`}
                onClick={() => setSelectedSize('5ml')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  backgroundColor: selectedSize === '5ml' ? 'rgba(159, 43, 43, 0.1)' : '#1A1A1A',
                  borderColor: selectedSize === '5ml' ? '#9F2B2B' : '#444444'
                }}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <div 
                      className="text-xl font-medium mb-1"
                      style={{ color: '#F5F5F7', fontFamily: 'Inter, sans-serif' }}
                    >
                      5 ml
                    </div>
                    <div 
                      className="text-sm opacity-80"
                      style={{ color: '#F5F5F7', fontFamily: 'Inter, sans-serif' }}
                    >
                      Para ocasiones únicas
                    </div>
                  </div>
                  <div 
                    className="text-2xl font-light"
                    style={{ color: '#9F2B2B', fontFamily: 'Inter, sans-serif' }}
                  >
                    24,90 €
                  </div>
                </div>
              </motion.button>

              {/* 10ml - Tu firma personal - MÁS POPULAR */}
              <motion.button
                className={`p-6 rounded-lg border-2 text-left transition-all duration-300 relative ${
                  selectedSize === '10ml' 
                    ? 'border-red-600 bg-red-600 bg-opacity-10' 
                    : 'border-gray-600 hover:border-red-600'
                }`}
                onClick={() => setSelectedSize('10ml')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  backgroundColor: selectedSize === '10ml' ? 'rgba(159, 43, 43, 0.1)' : '#1A1A1A',
                  borderColor: selectedSize === '10ml' ? '#9F2B2B' : '#444444'
                }}
              >
                <div 
                  className="absolute -top-3 left-4 px-3 py-1 rounded text-xs font-medium"
                  style={{ 
                    backgroundColor: '#9F2B2B', 
                    color: '#F5F5F7',
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  MÁS POPULAR
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <div 
                      className="text-xl font-medium mb-1"
                      style={{ color: '#F5F5F7', fontFamily: 'Inter, sans-serif' }}
                    >
                      10 ml
                    </div>
                    <div 
                      className="text-sm opacity-80"
                      style={{ color: '#F5F5F7', fontFamily: 'Inter, sans-serif' }}
                    >
                      Tu firma personal
                    </div>
                  </div>
                  <div 
                    className="text-2xl font-light"
                    style={{ color: '#9F2B2B', fontFamily: 'Inter, sans-serif' }}
                  >
                    44,90 €
                  </div>
                </div>
              </motion.button>

              {/* 20ml - Reserva privada - MEJOR VALOR */}
              <motion.button
                className={`p-6 rounded-lg border-2 text-left transition-all duration-300 relative ${
                  selectedSize === '20ml' 
                    ? 'border-red-600 bg-red-600 bg-opacity-10' 
                    : 'border-gray-600 hover:border-red-600'
                }`}
                onClick={() => setSelectedSize('20ml')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  backgroundColor: selectedSize === '20ml' ? 'rgba(159, 43, 43, 0.1)' : '#1A1A1A',
                  borderColor: selectedSize === '20ml' ? '#9F2B2B' : '#444444'
                }}
              >
                <div 
                  className="absolute -top-3 left-4 px-3 py-1 rounded text-xs font-medium"
                  style={{ 
                    backgroundColor: '#9F2B2B', 
                    color: '#F5F5F7',
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  MEJOR VALOR
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <div 
                      className="text-xl font-medium mb-1"
                      style={{ color: '#F5F5F7', fontFamily: 'Inter, sans-serif' }}
                    >
                      20 ml
                    </div>
                    <div 
                      className="text-sm opacity-80"
                      style={{ color: '#F5F5F7', fontFamily: 'Inter, sans-serif' }}
                    >
                      Reserva privada
                    </div>
                  </div>
                  <div 
                    className="text-2xl font-light"
                    style={{ color: '#9F2B2B', fontFamily: 'Inter, sans-serif' }}
                  >
                    79,90 €
                  </div>
                </div>
              </motion.button>
            </div>
          </div>

          {/* CTA Principal - Hacerlo Mío */}
          <motion.div 
            className="pt-8"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              disabled={!selectedSize}
              className="w-full text-lg py-6"
              style={{
                backgroundColor: selectedSize ? '#9F2B2B' : '#4A4A4A',
                color: '#F5F5F7',
                fontSize: '20px',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                fontWeight: '600',
                fontFamily: 'Inter, sans-serif',
                border: 'none',
                borderRadius: '8px',
                cursor: selectedSize ? 'pointer' : 'not-allowed'
              }}
            >
              {selectedSize ? 'Hacerlo Mío' : 'Selecciona un tamaño'}
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* La Historia del Perfume - Seducción Narrativa */}
      <section 
        className="py-32 relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url('https://i.imgur.com/6ZmqpHq.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Overlay oscuro para legibilidad */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(10, 10, 10, 0.85) 0%, rgba(26, 10, 10, 0.8) 50%, rgba(10, 10, 10, 0.85) 100%)'
          }}
        />
        
        <div className="relative max-w-4xl mx-auto px-12 md:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            {/* Titular */}
            <h2 
              className="font-serif text-4xl md:text-5xl mb-16"
              style={{ 
                color: '#F5F5F7',
                letterSpacing: '0.03em',
                lineHeight: '1.2',
                fontWeight: 400,
                fontFamily: 'Playfair Display, serif'
              }}
            >
              Poesía Mineral.
            </h2>

            {/* Párrafo poético y sensorial */}
            <div className="max-w-3xl mx-auto">
              <p 
                style={{
                  color: '#F5F5F7',
                  fontSize: '18px',
                  lineHeight: '1.8',
                  fontFamily: 'Inter, sans-serif',
                  textAlign: 'center'
                }}
              >
                Baccarat Rouge 540 no es una pirámide de notas, es una brisa. Una alquimia donde el azafrán y el jazmín aéreo acarician la piel, dando paso a un corazón mineral de ámbar gris y la calidez resonante de la madera de cedro. Es luminoso, denso y transparente a la vez. Un perfume que no se lleva, sino que te viste, dejando una estela inolvidable y absolutamente única en cada persona.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Prueba Social Específica */}
      <section className="py-32" style={{ maxWidth: '1100px', margin: '0 auto', padding: '128px 48px' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          <h2 
            className="font-serif text-4xl md:text-5xl text-center mb-16"
            style={{ 
              color: '#F5F5F7',
              letterSpacing: '0.03em',
              lineHeight: '1.2',
              fontWeight: 400,
              fontFamily: 'Playfair Display, serif'
            }}
          >
            La Reacción es Universal.
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Testimonio 1 - Elena V. */}
            <div 
              className="p-8 rounded-lg"
              style={{
                backgroundColor: '#1A1A1A',
                border: '1px solid rgba(159, 43, 43, 0.3)'
              }}
            >
              <div className="space-y-4">
                <div className="flex space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} style={{ color: '#9F2B2B', fontSize: '18px' }}>★</span>
                  ))}
                </div>
                <p 
                  style={{
                    color: '#F5F5F7',
                    fontSize: '16px',
                    lineHeight: '1.6',
                    fontFamily: 'Inter, sans-serif',
                    fontStyle: 'italic'
                  }}
                >
                  "Es el perfume que más cumplidos me ha generado en toda mi vida. La gente literalmente me para por la calle. El decant es perfecto y potente."
                </p>
                <p 
                  style={{
                    color: '#9F2B2B',
                    fontSize: '14px',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 500
                  }}
                >
                  — Elena V. ★★★★★
                </p>
              </div>
            </div>

            {/* Testimonio 2 - Javier M. */}
            <div 
              className="p-8 rounded-lg"
              style={{
                backgroundColor: '#1A1A1A',
                border: '1px solid rgba(159, 43, 43, 0.3)'
              }}
            >
              <div className="space-y-4">
                <div className="flex space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} style={{ color: '#9F2B2B', fontSize: '18px' }}>★</span>
                  ))}
                </div>
                <p 
                  style={{
                    color: '#F5F5F7',
                    fontSize: '16px',
                    lineHeight: '1.6',
                    fontFamily: 'Inter, sans-serif',
                    fontStyle: 'italic'
                  }}
                >
                  "Huele a puro lujo, a algo que no has olido antes. Adictivo es la palabra. Vale cada céntimo."
                </p>
                <p 
                  style={{
                    color: '#9F2B2B',
                    fontSize: '14px',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 500
                  }}
                >
                  — Javier M. ★★★★★
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Garantía y Cierre */}
      <section className="py-32" style={{ backgroundColor: '#080808' }}>
        <div className="text-center max-w-4xl mx-auto px-12 md:px-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            {/* Garantía de Autenticidad */}
            <div className="space-y-8">
              <h2 
                className="font-serif text-3xl md:text-4xl mb-8"
                style={{ 
                  color: '#F5F5F7',
                  letterSpacing: '0.03em',
                  lineHeight: '1.2',
                  fontWeight: 400,
                  fontFamily: 'Playfair Display, serif'
                }}
              >
                Garantía de Autenticidad
              </h2>
              
              <p 
                style={{
                  color: '#F5F5F7',
                  fontSize: '16px',
                  lineHeight: '1.6',
                  fontFamily: 'Inter, sans-serif',
                  opacity: 0.9
                }}
              >
                Cada decant proviene directamente de distribuidores oficiales de Maison Francis Kurkdjian. 
                Decantado profesionalmente en un entorno estéril. Tu experiencia olfativa será idéntica 
                a la del frasco original.
              </p>
            </div>

            {/* Selector de Tamaño Final - Repetición para maximizar conversión */}
            <div className="max-w-md mx-auto space-y-6">
              <h3 
                className="font-serif text-2xl mb-6"
                style={{ 
                  color: '#F5F5F7',
                  letterSpacing: '0.02em',
                  fontFamily: 'Playfair Display, serif'
                }}
              >
                Elige tu experiencia:
              </h3>
              
              <div className="grid gap-3">
                {/* Opciones compactas para el cierre */}
                <button
                  className="p-4 rounded border text-left hover:border-red-600 transition-colors"
                  style={{
                    backgroundColor: '#1A1A1A',
                    borderColor: '#444444',
                    color: '#F5F5F7'
                  }}
                  onClick={() => setSelectedSize('5ml')}
                >
                  <div className="flex justify-between items-center">
                    <span>5ml - Para ocasiones únicas</span>
                    <span style={{ color: '#9F2B2B' }}>24,90€</span>
                  </div>
                </button>
                
                <button
                  className="p-4 rounded border text-left hover:border-red-600 transition-colors relative"
                  style={{
                    backgroundColor: '#1A1A1A',
                    borderColor: '#9F2B2B',
                    color: '#F5F5F7'
                  }}
                  onClick={() => setSelectedSize('10ml')}
                >
                  <div 
                    className="absolute -top-2 left-3 px-2 py-1 rounded text-xs"
                    style={{ 
                      backgroundColor: '#9F2B2B', 
                      color: '#F5F5F7',
                      fontSize: '10px'
                    }}
                  >
                    POPULAR
                  </div>
                  <div className="flex justify-between items-center">
                    <span>10ml - Tu firma personal</span>
                    <span style={{ color: '#9F2B2B' }}>44,90€</span>
                  </div>
                </button>
                
                <button
                  className="p-4 rounded border text-left hover:border-red-600 transition-colors"
                  style={{
                    backgroundColor: '#1A1A1A',
                    borderColor: '#444444',
                    color: '#F5F5F7'
                  }}
                  onClick={() => setSelectedSize('20ml')}
                >
                  <div className="flex justify-between items-center">
                    <span>20ml - Reserva privada</span>
                    <span style={{ color: '#9F2B2B' }}>79,90€</span>
                  </div>
                </button>
              </div>
            </div>

            {/* CTA Final - Idéntico al bloque de conversión */}
            <motion.div 
              className="pt-8"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                disabled={!selectedSize}
                className="text-lg px-12 py-6"
                style={{
                  backgroundColor: selectedSize ? '#9F2B2B' : '#4A4A4A',
                  color: '#F5F5F7',
                  fontSize: '20px',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  fontWeight: '600',
                  fontFamily: 'Inter, sans-serif',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: selectedSize ? 'pointer' : 'not-allowed'
                }}
              >
                {selectedSize ? 'Hacerlo Mío' : 'Selecciona un tamaño'}
              </Button>
            </motion.div>

            {/* Disclaimer legal */}
            <p 
              style={{
                color: '#F5F5F7',
                fontSize: '12px',
                fontFamily: 'Inter, sans-serif',
                opacity: 0.6,
                marginTop: '32px',
                lineHeight: '1.5'
              }}
            >
              Aromatik Barcelona no está afiliado con Maison Francis Kurkdjian. 
              Ofrecemos decants de fragancias auténticas para exploración olfativa.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}