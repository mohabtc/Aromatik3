import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import SEOHead from '@/components/seo-head';

export default function Liderazgo() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#121212' }}>
      <SEOHead
        title="Liderazgo & Visión - Mohamed Belgartit Sabba | AROMATIK BARCELONA"
        description="Mohamed Belgartit Sabba, fundador de AROMATIK BARCELONA. Empresario especializado en comercio internacional y disrupción de mercados tradicionales. HealthTech y retail automatizado de lujo."
        keywords="Mohamed Belgartit Sabba, fundador Aromatik Barcelona, empresario Barcelona, liderazgo empresarial, comercio internacional, HealthTech, retail automatizado lujo"
        canonicalUrl="https://aromatikbarcelona.com/liderazgo"
        ogImage="https://aromatikbarcelona.com/images/liderazgo-og.jpg"
      />
      <Navigation isScrolled={isScrolled} />
      
      <section className="min-h-screen flex items-center justify-center relative pt-32 pb-32">
        <div className="text-center max-w-5xl mx-auto px-12 md:px-16">
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
            Liderazgo & Visión
          </motion.h1>
          
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
            Mohamed Belgartit Sabba
          </motion.h2>
        </div>
      </section>

      <section className="py-32" style={{ maxWidth: '1100px', margin: '0 auto', padding: '128px 48px' }}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8 mb-24"
          >
            <p 
              className="text-lg leading-relaxed"
              style={{
                color: '#F5F5F7',
                fontSize: '18px',
                lineHeight: '1.8',
                fontFamily: 'Inter, sans-serif'
              }}
            >
              Mohamed Belgartit Sabba (Barcelona, 2007) es un empresario y especialista en comercio internacional enfocado en la disrupción de mercados tradicionales. A sus 18 años, ha consolidado un portafolio de proyectos que abarca desde la tecnología sanitaria (HealthTech) hasta el retail automatizado de lujo.
            </p>
            
            <p 
              className="text-lg leading-relaxed"
              style={{
                color: '#F5F5F7',
                fontSize: '18px',
                lineHeight: '1.8',
                fontFamily: 'Inter, sans-serif'
              }}
            >
              Formado en la prestigiosa ESERP Business School de Barcelona, Mohamed combina el rigor académico con una agresiva estrategia de ejecución comercial ("Market-First Strategy"). Su visión empresarial se basa en identificar ineficiencias en sectores estáticos y resolverlas mediante tecnología y logística avanzada.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-32 relative overflow-hidden" style={{ backgroundColor: '#000000' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 48px' }}>
          <motion.h3 
            className="font-serif text-4xl md:text-5xl mb-20 text-center"
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
            Trayectoria Empresarial
          </motion.h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div 
                className="inline-block px-4 py-2 mb-4"
                style={{
                  backgroundColor: 'rgba(212, 175, 55, 0.1)',
                  border: '1px solid rgba(212, 175, 55, 0.3)',
                  borderRadius: '4px'
                }}
              >
                <span 
                  style={{
                    color: '#D4AF37',
                    fontSize: '12px',
                    fontFamily: 'Inter, sans-serif',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    fontWeight: 500
                  }}
                >
                  Co-Fundador
                </span>
              </div>
              
              <h4 
                className="font-serif text-3xl md:text-4xl"
                style={{ 
                  color: '#F5F5F7',
                  letterSpacing: '0.03em',
                  lineHeight: '1.2',
                  fontWeight: 400,
                  fontFamily: 'Playfair Display, serif'
                }}
              >
                Euro Orthopedic
              </h4>
              
              <p 
                className="text-lg leading-relaxed"
                style={{
                  color: '#F5F5F7',
                  fontSize: '16px',
                  lineHeight: '1.7',
                  fontFamily: 'Inter, sans-serif',
                  opacity: 0.9
                }}
              >
                Mohamed lideró la entrada al mercado de la Ortho Carbon Pro, una silla de ruedas eléctrica de fibra de carbono que redefinió los estándares del sector. Bajo su gestión, la compañía logró democratizar el acceso a materiales de competición (fibra de carbono) aplicados a la movilidad reducida, rompiendo la barrera de precio/calidad que dominaba la industria ortopédica en España.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div 
                className="inline-block px-4 py-2 mb-4"
                style={{
                  backgroundColor: 'rgba(212, 175, 55, 0.1)',
                  border: '1px solid rgba(212, 175, 55, 0.3)',
                  borderRadius: '4px'
                }}
              >
                <span 
                  style={{
                    color: '#D4AF37',
                    fontSize: '12px',
                    fontFamily: 'Inter, sans-serif',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    fontWeight: 500
                  }}
                >
                  Fundador & CEO
                </span>
              </div>
              
              <h4 
                className="font-serif text-3xl md:text-4xl"
                style={{ 
                  color: '#F5F5F7',
                  letterSpacing: '0.03em',
                  lineHeight: '1.2',
                  fontWeight: 400,
                  fontFamily: 'Playfair Display, serif'
                }}
              >
                Aromatik Barcelona
              </h4>
              
              <p 
                className="text-lg leading-relaxed"
                style={{
                  color: '#F5F5F7',
                  fontSize: '16px',
                  lineHeight: '1.7',
                  fontFamily: 'Inter, sans-serif',
                  opacity: 0.9
                }}
              >
                Su aventura más reciente busca transformar el concepto de "Vending". Aromatik no distribuye productos, distribuye experiencias. A través de una red de máquinas expendedoras de perfumería nicho ubicadas en puntos estratégicos de alto tráfico, la empresa fusiona la inmediatez del canal automático con la exclusividad del sector belleza.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-32" style={{ maxWidth: '1100px', margin: '0 auto', padding: '128px 48px' }}>
        <div className="max-w-4xl mx-auto">
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
            Filantropía y Compromiso Cívico
          </motion.h3>
          
          <motion.p 
            className="text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            style={{
              color: '#F5F5F7',
              fontSize: '18px',
              lineHeight: '1.8',
              fontFamily: 'Inter, sans-serif'
            }}
          >
            Más allá del balance de resultados, Mohamed entiende la empresa como un motor de cambio social. Actualmente lidera la constitución de una Iniciativa de Regeneración Urbana (Asociación Sin Ánimo de Lucro), un proyecto diseñado para combatir el vandalismo gráfico en Barcelona mediante la aplicación de soluciones químicas especializadas, devolviendo la dignidad arquitectónica a los barrios de la ciudad.
          </motion.p>
        </div>
      </section>

      <section 
        className="py-32 relative"
        style={{ backgroundColor: '#0A0A0A' }}
      >
        <div className="text-center" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 48px' }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div 
              style={{
                color: '#D4AF37',
                fontSize: '14px',
                fontFamily: 'Inter, sans-serif',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                marginBottom: '24px'
              }}
            >
              Filosofía
            </div>
            
            <blockquote>
              <p 
                className="font-serif text-3xl md:text-4xl lg:text-5xl"
                style={{ 
                  color: '#F5F5F7',
                  letterSpacing: '0.02em',
                  lineHeight: '1.4',
                  fontWeight: 400,
                  fontFamily: 'Playfair Display, serif',
                  fontStyle: 'italic'
                }}
              >
                "El riesgo no es el enemigo; el estancamiento lo es. Innovar es simplemente tener el valor de ejecutar lo que otros solo imaginan."
              </p>
            </blockquote>
            
            <p 
              style={{
                color: '#F5F5F7',
                fontSize: '16px',
                fontFamily: 'Inter, sans-serif',
                opacity: 0.7,
                marginTop: '32px'
              }}
            >
              — Mohamed Belgartit Sabba
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
