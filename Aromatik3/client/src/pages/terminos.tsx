import { useEffect, useState } from 'react';
import { useScrollPosition } from '@/hooks/use-scroll-trigger';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { motion } from 'framer-motion';

export default function Terminos() {
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
            Términos y Condiciones
          </motion.h1>
          
          <motion.div 
            className="prose prose-lg max-w-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ color: '#F5F5F7' }}
          >
            <p className="text-xl mb-8 leading-relaxed">
              Al acceder y utilizar el sitio web de AROMATIK BARCELONA, aceptas estar sujeto a estos términos y condiciones.
            </p>
            
            <h2 className="font-serif text-2xl md:text-3xl mt-12 mb-6" style={{ color: '#F5F5F7' }}>
              1. Uso del Sitio Web
            </h2>
            <p className="mb-6 leading-relaxed">
              Este sitio web está destinado únicamente para uso personal y no comercial. No puedes reproducir, distribuir, modificar o crear trabajos derivados del contenido sin nuestro consentimiento expreso por escrito.
            </p>
            
            <h2 className="font-serif text-2xl md:text-3xl mt-12 mb-6" style={{ color: '#F5F5F7' }}>
              2. Productos y Servicios
            </h2>
            <p className="mb-6 leading-relaxed">
              Todos los productos ofrecidos son decants auténticos de fragancias de lujo. Los precios están sujetos a cambios sin previo aviso. Las imágenes mostradas tienen fines ilustrativos.
            </p>
            
            <h2 className="font-serif text-2xl md:text-3xl mt-12 mb-6" style={{ color: '#F5F5F7' }}>
              3. Política de Privacidad
            </h2>
            <p className="mb-6 leading-relaxed">
              Respetamos tu privacidad y nos comprometemos a proteger tu información personal. Consulta nuestra Política de Privacidad para obtener detalles sobre cómo recopilamos y utilizamos tu información.
            </p>
            
            <h2 className="font-serif text-2xl md:text-3xl mt-12 mb-6" style={{ color: '#F5F5F7' }}>
              4. Limitación de Responsabilidad
            </h2>
            <p className="mb-6 leading-relaxed">
              AROMATIK BARCELONA no será responsable de ningún daño directo, indirecto, incidental o consecuente que surja del uso de este sitio web o de nuestros productos.
            </p>
            
            <h2 className="font-serif text-2xl md:text-3xl mt-12 mb-6" style={{ color: '#F5F5F7' }}>
              5. Modificaciones
            </h2>
            <p className="mb-6 leading-relaxed">
              Nos reservamos el derecho de modificar estos términos en cualquier momento. Las modificaciones entrarán en vigor inmediatamente después de su publicación en el sitio web.
            </p>
            
            <div className="mt-16 p-6 border border-gray-600 rounded-lg">
              <p className="text-sm text-gray-300">
                Última actualización: Enero 2025<br />
                Para consultas sobre estos términos, contacta con nosotros en contacto@aromatibarcelona.com
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}