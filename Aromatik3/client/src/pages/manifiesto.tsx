import { motion } from 'framer-motion';
import { Link } from 'wouter';
import SEOHead from '@/components/seo-head';

export default function Manifiesto() {
  // Array de las declaraciones del manifiesto - Copy Definitivo
  const manifestoBlocks = [
    {
      type: 'poem',
      lines: [
        'Hay memorias que solo se escriben con el aroma.',
        'La estela de un primer amor.',
        'La confianza antes de una reunión decisiva.',
        'La calma de una noche en casa.',
        'El perfume es el lenguaje invisible de nuestra historia.'
      ]
    },
    {
      type: 'betrayal',
      lines: [
        'Pero el gran perfume fue traicionado.',
        'Se convirtió en un objeto de colección.',
        'Un prisionero de cristal acumulando polvo en una estantería.',
        'Un lujo que se posee, pero no se vive.'
      ]
    },
    {
      type: 'rebellion',
      lines: [
        'Nosotros creemos en la rebelión contra la estantería.',
        'Creemos que el arte no fue hecho para ser guardado, sino para ser sentido.',
        'Para mezclarse con la piel y transformarse.',
        'Para vivir, para mancharse de recuerdos.'
      ]
    },
    {
      type: 'identity',
      lines: [
        'Creemos que tu identidad no es estática.',
        'Deberías tener la libertad de usar un aroma para la persona que eres hoy.',
        'Y otro completamente distinto para la que decidirás ser mañana.'
      ]
    },
    {
      type: 'philosophy',
      lines: [
        'Por eso no coleccionamos botellas.',
        'Coleccionamos momentos.',
        'No somos una tienda.',
        'Somos los curadores de tu biblioteca olfativa.'
      ]
    },
    {
      type: 'mission',
      lines: [
        'Aromatik Barcelona no vende perfumes.',
        'Te damos acceso al siguiente capítulo.',
        'A la siguiente memoria.',
        'A la siguiente versión de ti mismo.'
      ]
    },
    {
      type: 'seal',
      lines: []
    }
  ];

  return (
    <div 
      className="overflow-x-hidden"
      style={{ 
        backgroundColor: '#000000',
        minHeight: '100vh'
      }}
    >
      <SEOHead
        title="Manifiesto Perfumería Rebelde - ¿Por Qué No Coleccionar Perfumes? | AROMATIK BARCELONA"
        description="Manifiesto perfumería rebelde: ¿Por qué no coleccionar perfumes? Filosofía anti-coleccionismo perfumes. Perfumes para vivir, no guardar. Rebelión contra estantería perfumes. Filosofía uso diario perfumes nicho."
        keywords="manifiesto perfumería rebelde, filosofía anti-coleccionismo perfumes, perfumes para vivir no guardar, rebelión contra estantería perfumes, por qué no coleccionar perfumes, filosofía uso diario perfumes nicho"
        canonicalUrl="https://aromatikbarcelona.com/manifiesto"
        ogImage="https://aromatikbarcelona.com/images/manifiesto-og.jpg"
      />
      {/* Cada bloque ocupa viewport completo */}
      {manifestoBlocks.map((block, index) => (
        <section 
          key={index}
          className="relative flex items-center justify-center"
          style={{ 
            minHeight: '100vh',
            padding: '0 5vw'
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ 
              duration: 2,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            viewport={{ 
              amount: 0.6,
              margin: "-10% 0px -10% 0px"
            }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Contenido Regular del Manifiesto */}
            {block.type !== 'seal' && (
              <div className="space-y-8">
                {block.lines.map((line, lineIndex) => (
                  <motion.p
                    key={lineIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 1.5,
                      delay: lineIndex * 0.3,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    viewport={{ 
                      amount: 0.8,
                      once: true
                    }}
                    className="font-serif"
                    style={{ 
                      color: '#F5F5F7',
                      fontSize: block.type === 'poem' && lineIndex === 4 ? '38px' : 
                               block.type === 'betrayal' && lineIndex === 0 ? '36px' :
                               block.type === 'rebellion' && lineIndex === 0 ? '38px' :
                               block.type === 'identity' && lineIndex === 0 ? '34px' :
                               block.type === 'philosophy' && lineIndex === 2 ? '36px' :
                               block.type === 'mission' && lineIndex === 0 ? '36px' : '28px',
                      letterSpacing: '0.04em',
                      lineHeight: '1.5',
                      fontWeight: 400,
                      fontFamily: 'Playfair Display, serif',
                      fontStyle: block.type === 'poem' && lineIndex === 4 ? 'italic' : 'normal',
                      textAlign: 'center' as const
                    }}
                  >
                    {line}
                  </motion.p>
                ))}
              </div>
            )}

            {/* El Sello - Logo y Invitación */}
            {block.type === 'seal' && (
              <div className="flex flex-col items-center justify-center space-y-12">
                {/* Logo de Aromatik Barcelona */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 2.5,
                    delay: 2,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  viewport={{ 
                    amount: 0.6,
                    once: true
                  }}
                >
                  <h1 
                    className="font-serif"
                    style={{ 
                      color: '#F5F5F7',
                      fontSize: '48px',
                      letterSpacing: '0.12em',
                      lineHeight: '1.2',
                      fontWeight: 300,
                      fontFamily: 'Playfair Display, serif',
                      textTransform: 'uppercase',
                      textAlign: 'center'
                    }}
                  >
                    Aromatik
                    <br />
                    Barcelona
                  </h1>
                </motion.div>

                {/* Invitación Sutil */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 2,
                    delay: 4,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  viewport={{ 
                    amount: 0.8,
                    once: true
                  }}
                >
                  <Link 
                    href="/coleccion"
                    className="inline-block transition-opacity duration-500 hover:opacity-60"
                    style={{ 
                      color: '#F5F5F7',
                      fontSize: '18px',
                      letterSpacing: '0.02em',
                      lineHeight: '1.4',
                      fontWeight: 300,
                      fontFamily: 'Inter, sans-serif',
                      textDecoration: 'underline',
                      textDecorationColor: 'rgba(245, 245, 247, 0.3)',
                      textUnderlineOffset: '8px',
                      opacity: 0.8
                    }}
                  >
                    Comienza tu colección
                  </Link>
                </motion.div>
              </div>
            )}
          </motion.div>
        </section>
      ))}
    </div>
  );
}