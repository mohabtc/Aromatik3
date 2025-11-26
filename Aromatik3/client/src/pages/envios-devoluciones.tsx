import { useEffect, useState } from 'react';
import { useScrollPosition } from '@/hooks/use-scroll-trigger';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { motion } from 'framer-motion';
import { Link } from 'wouter';

export default function EnviosDevoluciones() {
  const scrollY = useScrollPosition();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsScrolled(scrollY > 50);
  }, [scrollY]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#121212' }}>
      <Navigation isScrolled={isScrolled} />
      
      {/* Hero Section - Encabezado de Página */}
      <section className="min-h-screen flex items-center justify-center relative pt-32 pb-32">
        <div className="text-center max-w-5xl mx-auto px-12 md:px-16">
          {/* H1 - Título claro y tranquilizador */}
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
            Envíos y Devoluciones
          </motion.h1>
          
          {/* Párrafo de introducción - Sans-Serif limpia */}
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
              color: '#F5F5F7',
              fontSize: '18px',
              letterSpacing: '0.01em',
              lineHeight: '1.6',
              fontFamily: 'Inter, sans-serif',
              textAlign: 'center'
            }}
          >
            Transparencia en cada paso del proceso. Aquí encontrarás todo lo que necesitas saber sobre cómo tu selección llega hasta ti.
          </motion.p>
        </div>
      </section>

      {/* Sección de Envíos */}
      <section className="py-32" style={{ maxWidth: '1100px', margin: '0 auto', padding: '128px 48px' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          {/* Subtítulo H2 - Información de Envío */}
          <h2 
            className="font-serif text-4xl md:text-5xl mb-12"
            style={{ 
              color: '#F5F5F7',
              letterSpacing: '0.03em',
              lineHeight: '1.2',
              fontWeight: 400,
              fontFamily: 'Playfair Display, serif'
            }}
          >
            Información de Envío
          </h2>

          {/* Sub-sección: Ámbito de Envío */}
          <div className="space-y-6">
            <h3 
              className="font-serif text-2xl md:text-3xl"
              style={{ 
                color: '#F5F5F7',
                letterSpacing: '0.03em',
                lineHeight: '1.2',
                fontWeight: 400,
                fontFamily: 'Playfair Display, serif'
              }}
            >
              Ámbito de Envío
            </h3>
            
            <p 
              className="text-lg leading-relaxed"
              style={{
                color: '#F5F5F7',
                fontSize: '16px',
                lineHeight: '1.6',
                fontFamily: 'Inter, sans-serif',
                maxWidth: '800px'
              }}
            >
              Actualmente, realizamos envíos a toda España (Península y Baleares). Estamos trabajando para llegar pronto a más destinos.
            </p>
          </div>

          {/* Sub-sección: Tiempos de Preparación */}
          <div className="space-y-6">
            <h3 
              className="font-serif text-2xl md:text-3xl"
              style={{ 
                color: '#F5F5F7',
                letterSpacing: '0.03em',
                lineHeight: '1.2',
                fontWeight: 400,
                fontFamily: 'Playfair Display, serif'
              }}
            >
              Tiempos de Preparación
            </h3>
            
            <p 
              className="text-lg leading-relaxed"
              style={{
                color: '#F5F5F7',
                fontSize: '16px',
                lineHeight: '1.6',
                fontFamily: 'Inter, sans-serif',
                maxWidth: '800px'
              }}
            >
              Cada decant se prepara bajo pedido para garantizar la máxima frescura. El tiempo de preparación de tu pedido es de 24-48 horas laborables.
            </p>
          </div>

          {/* Sub-sección: Tiempos y Costes de Envío */}
          <div className="space-y-6">
            <h3 
              className="font-serif text-2xl md:text-3xl"
              style={{ 
                color: '#F5F5F7',
                letterSpacing: '0.03em',
                lineHeight: '1.2',
                fontWeight: 400,
                fontFamily: 'Playfair Display, serif'
              }}
            >
              Tiempos y Costes de Envío
            </h3>
            
            {/* Lista estructurada para máxima claridad */}
            <div className="space-y-4">
              <div 
                className="flex justify-between items-center py-3 border-b border-white border-opacity-20"
                style={{
                  color: '#F5F5F7',
                  fontSize: '16px',
                  fontFamily: 'Inter, sans-serif'
                }}
              >
                <span>Envío Estándar (48/72h laborables)</span>
                <span className="font-medium">4,90 €</span>
              </div>
              
              <div 
                className="flex justify-between items-center py-3 border-b border-white border-opacity-20"
                style={{
                  color: '#F5F5F7',
                  fontSize: '16px',
                  fontFamily: 'Inter, sans-serif'
                }}
              >
                <span>Envío Express (24h laborables)</span>
                <span className="font-medium">6,90 €</span>
              </div>
              
              <div 
                className="flex justify-between items-center py-3"
                style={{
                  color: '#D4AF37',
                  fontSize: '16px',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: '500'
                }}
              >
                <span>Pedidos superiores a 50 €</span>
                <span>Envío Estándar gratuito</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Sección de Devoluciones */}
      <section className="py-32" style={{ maxWidth: '1100px', margin: '0 auto', padding: '128px 48px' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          {/* Subtítulo H2 - Política de Devoluciones */}
          <h2 
            className="font-serif text-4xl md:text-5xl mb-8"
            style={{ 
              color: '#F5F5F7',
              letterSpacing: '0.03em',
              lineHeight: '1.2',
              fontWeight: 400,
              fontFamily: 'Playfair Display, serif'
            }}
          >
            Política de Devoluciones
          </h2>

          {/* Párrafo introductorio */}
          <p 
            className="text-lg leading-relaxed mb-12"
            style={{
              color: '#F5F5F7',
              fontSize: '16px',
              lineHeight: '1.6',
              fontFamily: 'Inter, sans-serif',
              maxWidth: '800px'
            }}
          >
            La calidad de tu experiencia y la integridad de nuestros productos son nuestra máxima prioridad. Debido a la naturaleza personal e higiénica de los perfumes decantados, nuestra política de devoluciones es específica.
          </p>

          {/* Sub-sección: Condiciones para la Devolución */}
          <div className="space-y-6">
            <h3 
              className="font-serif text-2xl md:text-3xl"
              style={{ 
                color: '#F5F5F7',
                letterSpacing: '0.03em',
                lineHeight: '1.2',
                fontWeight: 400,
                fontFamily: 'Playfair Display, serif'
              }}
            >
              Condiciones para la Devolución
            </h3>
            
            <p 
              className="text-lg leading-relaxed"
              style={{
                color: '#F5F5F7',
                fontSize: '16px',
                lineHeight: '1.6',
                fontFamily: 'Inter, sans-serif',
                maxWidth: '800px'
              }}
            >
              Solo se aceptarán devoluciones de productos que hayan llegado en mal estado, rotos o si se ha recibido una fragancia incorrecta. Por motivos de higiene y al ser un producto personalizado bajo pedido, no podemos aceptar devoluciones de productos que hayan sido abiertos o utilizados si no presentan ningún defecto.
            </p>
          </div>

          {/* Sub-sección: Proceso para Iniciar una Devolución */}
          <div className="space-y-6">
            <h3 
              className="font-serif text-2xl md:text-3xl"
              style={{ 
                color: '#F5F5F7',
                letterSpacing: '0.03em',
                lineHeight: '1.2',
                fontWeight: 400,
                fontFamily: 'Playfair Display, serif'
              }}
            >
              Proceso para Iniciar una Devolución
            </h3>
            
            <p 
              className="text-lg leading-relaxed"
              style={{
                color: '#F5F5F7',
                fontSize: '16px',
                lineHeight: '1.6',
                fontFamily: 'Inter, sans-serif',
                maxWidth: '800px'
              }}
            >
              Si tu pedido cumple con las condiciones anteriores, por favor, contacta con nosotros en un plazo de 14 días desde la recepción a través de nuestro formulario de contacto. Es imprescindible adjuntar una fotografía que muestre el desperfecto o el error. Nuestro equipo te guiará en el proceso de reemplazo o reembolso sin coste alguno para ti.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Sección de Contacto para Incidencias */}
      <section className="py-32" style={{ backgroundColor: '#000000' }}>
        <div className="text-center" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 48px' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Titular H2 */}
            <h2 
              className="font-serif text-4xl md:text-5xl mb-8"
              style={{ 
                color: '#F5F5F7',
                letterSpacing: '0.03em',
                lineHeight: '1.2',
                fontWeight: 400,
                fontFamily: 'Playfair Display, serif'
              }}
            >
              ¿Alguna Duda o Incidencia?
            </h2>
            
            {/* Párrafo explicativo */}
            <p 
              className="text-lg leading-relaxed mb-8"
              style={{
                color: '#F5F5F7',
                fontSize: '16px',
                lineHeight: '1.6',
                fontFamily: 'Inter, sans-serif',
                maxWidth: '600px',
                margin: '0 auto 32px auto'
              }}
            >
              Nuestro equipo está a tu disposición para resolver cualquier problema con tu pedido.
            </p>
            
            {/* Botón CTA - Estilo secundario con borde blanco */}
            <Link href="/contacto">
              <motion.button
                className="aromatik-button text-lg px-10 py-4 inline-block"
                style={{
                  fontSize: '16px',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase'
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Contactar con Soporte
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}