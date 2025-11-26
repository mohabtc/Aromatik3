import { motion } from 'framer-motion';
import { useScrollTrigger } from '@/hooks/use-scroll-trigger';

const processSteps = [
  {
    number: "01",
    title: "DESCUBRE",
    description: "Encuentra nuestras máquinas en los puntos más vibrantes de la ciudad. La curiosidad es el primer paso.",
    image: "https://i.imgur.com/jyGSvhe.jpeg"
  },
  {
    number: "02",
    title: "SIENTE",
    description: "Elige la fragancia que resuene contigo en ese instante. Una pulsación es todo lo que te separa de una nueva sensación.",
    image: "https://i.imgur.com/oYclc4v.jpeg"
  },
  {
    number: "03",
    title: "VIVE",
    description: "La experiencia no tiene por qué terminar. Hazla tuya para siempre.",
    image: "https://i.imgur.com/4kvJFgQ.jpeg"
  }
];

function ProcessStep({ step, index }: { step: typeof processSteps[0], index: number }) {
  const { isVisible, elementRef } = useScrollTrigger<HTMLDivElement>(0.5);

  return (
    <div 
      ref={elementRef}
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img 
          src={step.image}
          alt={`${step.title} process visualization`}
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-radial" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
        <motion.div 
          className="text-center max-w-3xl mx-auto space-y-8"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <motion.div 
            className="text-8xl md:text-9xl font-serif text-white text-opacity-30 mb-8"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 0.3 } : { opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            {step.number}
          </motion.div>
          
          <motion.h3 
            className="font-serif text-4xl md:text-5xl mb-6 text-white"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            {step.title}
          </motion.h3>
          
          <motion.p 
            className="text-xl md:text-2xl font-light leading-relaxed text-white max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            style={{ lineHeight: '1.6', letterSpacing: '0.01em' }}
          >
            {step.description}
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}

export default function ProcessSection() {
  return (
    <section id="process" className="aromatik-bg-black text-white">
      {processSteps.map((step, index) => (
        <ProcessStep key={step.number} step={step} index={index} />
      ))}
    </section>
  );
}
