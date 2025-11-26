import { motion } from 'framer-motion';
import { useScrollTrigger } from '@/hooks/use-scroll-trigger';
import { Link } from 'wouter';

// Datos de fragancias con imágenes artísticas y descriptores poéticos
const fragrances = [
  {
    id: 'angels-share',
    name: "Angel's Share",
    brand: "Kilian",
    descriptor: "Una confidencia licorosa y amaderada, embotellada.",
    image: "https://i.imgur.com/vJZlkBQ.jpeg",
    route: "/angels-share"
  },
  {
    id: 'baccarat-rouge-540',
    name: "Baccarat Rouge 540",
    brand: "Maison Francis Kurkdjian",
    descriptor: "Un soplo mineral y ambarino, imposible de olvidar.",
    image: "https://i.imgur.com/6ZmqpHq.jpeg",
    route: "/baccarat-rouge-540"
  },
  {
    id: 'creed-millesime-imperial',
    name: "Millésime Impérial",
    brand: "Creed",
    descriptor: "Elegancia náutica y refinamiento atemporal.",
    image: "https://i.imgur.com/4fgxuL2.png",
    route: "/creed-millesime-imperial"
  },
  {
    id: 'lost-cherry',
    name: "Lost Cherry",
    brand: "Tom Ford",
    descriptor: "Un juego prohibido entre la inocencia y la indulgencia.",
    image: "https://i.imgur.com/qmb5QrI.png",
    route: "/tom-ford-lost-cherry"
  },
  {
    id: 'xerjoff-naxos',
    name: "Naxos",
    brand: "Xerjoff",
    descriptor: "La opulencia de Sicilia: cítricos, tabaco y miel.",
    image: "https://i.imgur.com/vdNgYHF.png",
    route: "/xerjoff-naxos"
  }
];

interface FragranceCardProps {
  fragrance: typeof fragrances[0];
  index: number;
}

function FragranceCard({ fragrance, index }: FragranceCardProps) {
  const { isVisible, elementRef } = useScrollTrigger(0.2);

  return (
    <motion.div
      ref={elementRef as any}
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ 
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut"
      }}
      className="group"
    >
      {/* Contenedor completo como enlace clicable */}
      <Link href={fragrance.route}>
        <div className="cursor-pointer bg-transparent border-0 p-0 w-full"
             style={{ 
               backgroundColor: 'transparent',
               border: 'none',
               display: 'block'
             }}>
          {/* Imagen del Perfume - Relación 3:4 (vertical) */}
          <div 
            className="relative overflow-hidden mb-0"
            style={{
              aspectRatio: '3/4',
              width: '100%'
            }}
          >
            <img
              src={fragrance.image}
              alt={fragrance.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Área de Texto - Padding 24px todos los lados */}
          <div style={{ padding: '24px' }}>
            {/* Nombre de la Fragancia - H3 alineado izquierda */}
            <h3 
              className="font-serif text-2xl md:text-3xl mb-4"
              style={{ 
                color: '#F5F5F7',
                letterSpacing: '0.03em',
                fontWeight: 400,
                lineHeight: '1.2',
                textAlign: 'left'
              }}
            >
              {fragrance.name}
            </h3>

            {/* Descriptor - Párrafo alineado izquierda */}
            <p 
              className="mb-6"
              style={{
                color: '#F5F5F7',
                fontSize: '16px',
                lineHeight: '1.6',
                fontFamily: 'Inter, sans-serif',
                textAlign: 'left'
              }}
            >
              {fragrance.descriptor}
            </p>

            {/* Botón CTA - Alineado izquierda, estilo definitivo */}
            <div
              className="aromatik-button"
              style={{
                display: 'inline-block',
                textAlign: 'left',
                cursor: 'pointer'
              }}
            >
              Explorar Composición
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function FragranceGallery() {
  return (
    <section className="py-32 px-12 md:px-16" style={{ maxWidth: '1100px', margin: '0 auto' }}>
      {/* Grid responsivo: 1 columna en móvil, 2 en escritorio con espaciado generoso */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-24">
        {fragrances.map((fragrance, index) => (
          <FragranceCard 
            key={fragrance.id} 
            fragrance={fragrance} 
            index={index}
          />
        ))}
      </div>
    </section>
  );
}