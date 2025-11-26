import { motion } from 'framer-motion';
import { useScrollTrigger } from '@/hooks/use-scroll-trigger';

export default function LegalDisclaimer() {
  const { isVisible, elementRef } = useScrollTrigger(0.8);

  return (
    <section 
      id="disclaimer" 
      ref={elementRef}
      className="aromatik-bg-off-white aromatik-text-black py-16 border-t border-black border-opacity-10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h3 className="font-serif text-2xl md:text-3xl mb-8 leading-tight text-black">
            Aviso Legal
          </h3>
          
          <div className="text-sm md:text-base leading-relaxed space-y-4" style={{ color: '#000000' }}>
            <p style={{ color: '#000000' }}>
              AROMATIK BARCELONA opera bajo estrictos estándares de calidad y legalidad. 
              Todos nuestros productos son auténticos y provienen directamente de distribuidores 
              autorizados de las marcas representadas.
            </p>
            
            <p style={{ color: '#000000' }}>
              Las fragancias ofrecidas en nuestros puntos de experiencia y tienda online 
              son extractos genuinos presentados en formato decant para uso personal. 
              No somos distribuidores oficiales de las marcas mencionadas.
            </p>
            
            <p style={{ color: '#000000' }}>
              El uso de nombres de marcas y productos es únicamente con fines informativos 
              y de identificación. Todas las marcas comerciales pertenecen a sus respectivos propietarios.
            </p>
            
            <p className="font-medium text-black">
              Al utilizar nuestros servicios, aceptas nuestros términos y condiciones. 
              Para más información, consulta nuestra política de privacidad y términos legales.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}