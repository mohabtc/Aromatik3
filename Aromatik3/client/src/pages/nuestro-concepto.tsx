import { useEffect, useState } from 'react';
import { useScrollPosition } from '@/hooks/use-scroll-trigger';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import SEOHead from '@/components/seo-head';
import { motion } from 'framer-motion';

export default function NuestroConcepto() {
  const scrollY = useScrollPosition();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsScrolled(scrollY > 50);
  }, [scrollY]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#121212' }}>
      <SEOHead
        title="Filosofía Perfumería Nicho - ¿Por Qué Decants vs Frasco Completo? | AROMATIK BARCELONA"
        description="Filosofía perfumería nicho AROMATIK BARCELONA. ¿Por qué los perfumes nicho son caros? Ventajas decants vs frasco completo. Cómo elegir perfume sin comprarlo completo. Democratización perfumes lujo."
        keywords="filosofía perfumería nicho, concepto decants perfumes, democratización perfumes lujo, acceso perfumes exclusivos, por qué los perfumes nicho son caros, ventajas de comprar decants vs frasco completo"
        canonicalUrl="https://aromatikbarcelona.com/nuestro-concepto"
        ogImage="https://aromatikbarcelona.com/images/concepto-og.jpg"
      />
      <Navigation isScrolled={isScrolled} />
      
      {/* Hero Section - Encabezado de Página */}
      <section className="min-h-screen flex items-center justify-center relative pt-32 pb-32">
        <div className="text-center max-w-5xl mx-auto px-12 md:px-16">
          {/* H1 - Declaración audaz y directa */}
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
              color: '#F5F5F7',
              letterSpacing: '0.03em',
              lineHeight: '1.1',
              fontWeight: 400,
              fontFamily: 'Playfair Display, serif',
              textAlign: 'center'
            }}
          >
            El Lujo No Debería Acumular Polvo.
          </motion.h1>
          
          {/* H2 - Subtítulo Sans-Serif limpia */}
          <motion.h2 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1,
              delay: 0.8,
              ease: "easeOut"
            }}
            style={{ 
              color: '#F5F5F7',
              fontSize: '24px',
              letterSpacing: '0.01em',
              lineHeight: '1.6',
              fontFamily: 'Inter, sans-serif',
              textAlign: 'center',
              fontWeight: 300
            }}
          >
            Liberamos las grandes fragancias de sus estanterías. Te explicamos cómo.
          </motion.h2>
        </div>
      </section>

      {/* Sección 1: El Dilema del Lujo */}
      <section className="py-32 relative overflow-hidden">
        {/* Imagen de fondo - estanterías de lujo */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url('https://i.imgur.com/ZTv9M7D.jpeg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(1px)'
          }}
        />
        
        {/* Contenido central */}
        <div className="relative z-10" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 48px' }}>
          <div className="max-w-4xl mx-auto text-center">
            {/* Titular H3 Serif */}
            <motion.h3 
              className="font-serif text-4xl md:text-5xl mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={{ 
                color: '#F5F5F7',
                letterSpacing: '0.03em',
                lineHeight: '1.2',
                fontWeight: 400,
                fontFamily: 'Playfair Display, serif'
              }}
            >
              El Compromiso de los 100ml.
            </motion.h3>
            
            {/* Párrafo Sans-Serif */}
            <motion.p 
              className="text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              style={{
                color: '#F5F5F7',
                fontSize: '18px',
                lineHeight: '1.7',
                fontFamily: 'Inter, sans-serif',
                maxWidth: '800px',
                margin: '0 auto'
              }}
            >
              Conoces la sensación. Te enamoras de una fragancia en la tienda. Inviertes una suma considerable en una botella grande. La usas durante dos semanas y, después, queda relegada en una estantería, esperando una 'ocasión especial' que rara vez llega. El alto coste y el gran formato nos obligan a un compromiso a largo plazo con un único aroma, limitando nuestra libertad para explorar, para cambiar, para adaptarnos a nuestro estado de ánimo.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Sección 2: La Solución Aromatik */}
      <section className="py-32" style={{ maxWidth: '1100px', margin: '0 auto', padding: '128px 48px' }}>
        {/* Layout responsivo: 2 columnas escritorio, vertical móvil */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          
          {/* Columna Izquierda - Fase 1: El Descubrimiento */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Imagen: Mapa Digital Nocturno de Barcelona */}
            <div 
              className="w-full mb-8"
              style={{
                backgroundImage: `url('https://i.imgur.com/CYPj52f.jpeg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                aspectRatio: '16/10',
                borderRadius: '8px'
              }}
            />
            
            
            {/* Titular H3 */}
            <h3 
              className="font-serif text-3xl md:text-4xl"
              style={{ 
                color: '#F5F5F7',
                letterSpacing: '0.03em',
                lineHeight: '1.2',
                fontWeight: 400,
                fontFamily: 'Playfair Display, serif'
              }}
            >
              Fase 1: El Descubrimiento.
            </h3>
            
            {/* Párrafo descriptivo */}
            <p 
              className="text-lg leading-relaxed"
              style={{
                color: '#F5F5F7',
                fontSize: '16px',
                lineHeight: '1.6',
                fontFamily: 'Inter, sans-serif'
              }}
            >
              Nuestra red de máquinas es tu laboratorio personal. Te permite probar composiciones maestras en el mundo real, por un coste simbólico. Es la libertad de experimentar sin el peso del compromiso. La curiosidad es tu única guía.
            </p>
          </motion.div>

          {/* Columna Derecha - Fase 2: La Posesión Inteligente */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Imagen: Colección de Tres Decants */}
            <div 
              className="w-full mb-8"
              style={{
                backgroundImage: `url('https://i.imgur.com/rTr3dMr.jpeg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                aspectRatio: '16/10',
                borderRadius: '8px'
              }}
            />
            
            {/* Titular H3 */}
            <h3 
              className="font-serif text-3xl md:text-4xl"
              style={{ 
                color: '#F5F5F7',
                letterSpacing: '0.03em',
                lineHeight: '1.2',
                fontWeight: 400,
                fontFamily: 'Playfair Display, serif'
              }}
            >
              Fase 2: La Posesión Inteligente.
            </h3>
            
            {/* Párrafo descriptivo */}
            <p 
              className="text-lg leading-relaxed"
              style={{
                color: '#F5F5F7',
                fontSize: '16px',
                lineHeight: '1.6',
                fontFamily: 'Inter, sans-serif'
              }}
            >
              Cuando una fragancia te elige, hazla tuya en el formato que necesitas. Nuestros decants te dan la libertad de poseer una selección curada de iconos olfativos, listos para cualquier momento y sin la obligación de una única botella.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sección 3: Garantía de Autenticidad (El Pilar de la Confianza) */}
      <section className="py-32" style={{ maxWidth: '1100px', margin: '0 auto', padding: '128px 48px' }}>
        {/* Titular de Sección H2 centrado */}
        <motion.h2 
          className="font-serif text-5xl md:text-6xl text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ 
            color: '#F5F5F7',
            letterSpacing: '0.03em',
            lineHeight: '1.2',
            fontWeight: 400,
            fontFamily: 'Playfair Display, serif'
          }}
        >
          Autenticidad. No es una promesa, es nuestro proceso.
        </motion.h2>

        {/* 3 Pasos del Proceso */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-20">
          
          {/* Paso 1: Compra Certificada */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            {/* Icono minimalista sello de cera */}
            <div 
              className="w-20 h-20 mx-auto mb-8 flex items-center justify-center"
              style={{
                backgroundColor: '#1a1a1a',
                borderRadius: '50%',
                border: '2px solid #F5F5F7'
              }}
            >
              <div 
                style={{
                  width: '12px',
                  height: '12px',
                  backgroundColor: '#F5F5F7',
                  borderRadius: '50%'
                }}
              />
            </div>
            
            <h3 
              className="font-serif text-2xl md:text-3xl mb-4"
              style={{ 
                color: '#F5F5F7',
                letterSpacing: '0.03em',
                lineHeight: '1.2',
                fontWeight: 400,
                fontFamily: 'Playfair Display, serif'
              }}
            >
              Compra Certificada.
            </h3>
            
            <p 
              className="text-lg leading-relaxed"
              style={{
                color: '#F5F5F7',
                fontSize: '16px',
                lineHeight: '1.6',
                fontFamily: 'Inter, sans-serif'
              }}
            >
              Solo adquirimos fragancias 100% auténticas a través de distribuidores oficiales y autorizados. Nunca de terceros.
            </p>
          </motion.div>

          {/* Paso 2: Decantado Profesional */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            {/* Imagen: El Arte de la Autenticidad (pipeta de cristal) */}
            <div 
              className="w-full mb-8"
              style={{
                backgroundImage: `url('https://i.imgur.com/5ZqHqJg.jpeg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                aspectRatio: '1/1',
                borderRadius: '8px'
              }}
            />
            
            <h3 
              className="font-serif text-2xl md:text-3xl mb-4"
              style={{ 
                color: '#F5F5F7',
                letterSpacing: '0.03em',
                lineHeight: '1.2',
                fontWeight: 400,
                fontFamily: 'Playfair Display, serif'
              }}
            >
              Decantado Profesional.
            </h3>
            
            <p 
              className="text-lg leading-relaxed"
              style={{
                color: '#F5F5F7',
                fontSize: '16px',
                lineHeight: '1.6',
                fontFamily: 'Inter, sans-serif'
              }}
            >
              Cada decant se extrae bajo pedido en un entorno estéril. Usamos herramientas de precisión para garantizar que la fragancia no se altera ni se contamina.
            </p>
          </motion.div>

          {/* Paso 3: Entrega Segura */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            {/* Icono minimalista caja de envío sellada */}
            <div 
              className="w-20 h-20 mx-auto mb-8 flex items-center justify-center"
              style={{
                backgroundColor: '#1a1a1a',
                borderRadius: '8px',
                border: '2px solid #F5F5F7'
              }}
            >
              <div 
                style={{
                  width: '8px',
                  height: '8px',
                  backgroundColor: '#F5F5F7',
                  borderRadius: '2px'
                }}
              />
            </div>
            
            <h3 
              className="font-serif text-2xl md:text-3xl mb-4"
              style={{ 
                color: '#F5F5F7',
                letterSpacing: '0.03em',
                lineHeight: '1.2',
                fontWeight: 400,
                fontFamily: 'Playfair Display, serif'
              }}
            >
              Entrega Segura.
            </h3>
            
            <p 
              className="text-lg leading-relaxed"
              style={{
                color: '#F5F5F7',
                fontSize: '16px',
                lineHeight: '1.6',
                fontFamily: 'Inter, sans-serif'
              }}
            >
              Tu selección se sella en nuestros frascos de alta calidad y se empaqueta de forma segura para preservar su integridad hasta que llegue a tus manos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sección 4: El Llamado a la Acción (El Puente de Vuelta) */}
      <section className="py-32" style={{ backgroundColor: '#000000' }}>
        <div className="text-center" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 48px' }}>
          <motion.h2 
            className="font-serif text-5xl md:text-6xl mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ 
              color: '#F5F5F7',
              letterSpacing: '0.03em',
              lineHeight: '1.2',
              fontWeight: 400,
              fontFamily: 'Playfair Display, serif'
            }}
          >
            Listo para empezar tu colección.
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="/coleccion"
              className="inline-block text-black font-medium py-4 px-12 text-lg uppercase tracking-wider transition-all duration-300"
              style={{
                backgroundColor: '#D4AF37',
                borderRadius: '4px',
                fontFamily: 'Inter, sans-serif',
                letterSpacing: '0.05em',
                textDecoration: 'none'
              }}
              whileHover={{ 
                scale: 1.02,
                backgroundColor: '#C19B26'
              }}
              whileTap={{ scale: 0.98 }}
            >
              Explorar la Biblioteca Olfativa
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}