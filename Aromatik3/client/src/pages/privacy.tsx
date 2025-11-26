import { useEffect, useState } from 'react';
import { useScrollPosition } from '@/hooks/use-scroll-trigger';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { motion } from 'framer-motion';

export default function Privacy() {
  const scrollY = useScrollPosition();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsScrolled(scrollY > 50);
  }, [scrollY]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#121212' }}>
      <Navigation isScrolled={isScrolled} />
      
      <section className="min-h-screen pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <motion.h1 
            className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ 
              color: '#F5F5F7',
              letterSpacing: '0.03em',
              fontWeight: 400
            }}
          >
            Política de Privacidad
          </motion.h1>
          
          <motion.div 
            className="prose prose-lg max-w-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ color: '#F5F5F7' }}
          >
            <p className="text-xl mb-8 leading-relaxed">
              En AROMATIK BARCELONA valoramos tu privacidad y nos comprometemos a proteger tu información personal.
            </p>
            
            <h2 className="font-serif text-2xl md:text-3xl mt-12 mb-6" style={{ color: '#F5F5F7' }}>
              1. Información que Recopilamos
            </h2>
            <p className="mb-6 leading-relaxed">
              Recopilamos información que nos proporcionas directamente, como cuando te suscribes a nuestro newsletter, realizas una compra o nos contactas. Esto puede incluir tu nombre, dirección de correo electrónico, dirección postal y información de pago.
            </p>
            
            <h2 className="font-serif text-2xl md:text-3xl mt-12 mb-6" style={{ color: '#F5F5F7' }}>
              2. Cómo Utilizamos tu Información
            </h2>
            <p className="mb-6 leading-relaxed">
              Utilizamos tu información para procesar pedidos, enviar comunicaciones sobre productos y servicios, mejorar nuestro sitio web y proporcionar atención al cliente. También podemos utilizarla para enviarte información sobre nuevos productos y ofertas especiales.
            </p>
            
            <h2 className="font-serif text-2xl md:text-3xl mt-12 mb-6" style={{ color: '#F5F5F7' }}>
              3. Compartir Información
            </h2>
            <p className="mb-6 leading-relaxed">
              No vendemos, alquilamos ni compartimos tu información personal con terceros para fines de marketing sin tu consentimiento expreso. Podemos compartir información con proveedores de servicios que nos ayudan a operar nuestro negocio.
            </p>
            
            <h2 className="font-serif text-2xl md:text-3xl mt-12 mb-6" style={{ color: '#F5F5F7' }}>
              4. Cookies y Tecnologías Similares
            </h2>
            <p className="mb-6 leading-relaxed">
              Utilizamos cookies y tecnologías similares para mejorar tu experiencia en nuestro sitio web, analizar el tráfico y personalizar el contenido. Puedes configurar tu navegador para rechazar cookies, aunque esto puede afectar la funcionalidad del sitio.
            </p>
            
            <h2 className="font-serif text-2xl md:text-3xl mt-12 mb-6" style={{ color: '#F5F5F7' }}>
              5. Seguridad de Datos
            </h2>
            <p className="mb-6 leading-relaxed">
              Implementamos medidas de seguridad técnicas y organizativas adecuadas para proteger tu información personal contra el acceso no autorizado, la alteración, divulgación o destrucción.
            </p>
            
            <h2 className="font-serif text-2xl md:text-3xl mt-12 mb-6" style={{ color: '#F5F5F7' }}>
              6. Tus Derechos
            </h2>
            <p className="mb-6 leading-relaxed">
              Tienes derecho a acceder, rectificar, eliminar o limitar el procesamiento de tu información personal. Para ejercer estos derechos, contacta con nosotros utilizando la información proporcionada a continuación.
            </p>
            
            <h2 className="font-serif text-2xl md:text-3xl mt-12 mb-6" style={{ color: '#F5F5F7' }}>
              7. Cambios en esta Política
            </h2>
            <p className="mb-6 leading-relaxed">
              Podemos actualizar esta política de privacidad ocasionalmente. Te notificaremos sobre cambios significativos publicando la nueva política en nuestro sitio web.
            </p>
            
            <div className="mt-16 p-6 border border-gray-600 rounded-lg">
              <p className="text-sm text-gray-300">
                Última actualización: Enero 2025<br />
                Para consultas sobre privacidad, contacta con nosotros en privacidad@aromatibarcelona.com
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}