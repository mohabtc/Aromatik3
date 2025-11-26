import { motion } from 'framer-motion';

export default function HeroSection() {
  const text = "El perfume es libertad.";

  const scrollToNext = () => {
    document.getElementById('revelation')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="manifesto" className="min-h-screen aromatik-bg-black flex items-center justify-center relative overflow-hidden">
      <div className="text-center max-w-5xl mx-auto px-6 md:px-8 relative z-20">
        <motion.h1 
          className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-normal text-white hero-mobile-text text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            duration: 2,
            ease: "easeOut"
          }}
          style={{ 
            letterSpacing: '0.03em',
            lineHeight: '1.1',
            marginBottom: '0'
          }}
        >
          {text}
        </motion.h1>
      </div>

      <motion.div 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1.5 }}
        onClick={scrollToNext}
      >
        <motion.div 
          className="w-5 h-9 border border-white border-opacity-60 rounded-full flex justify-center relative"
          animate={{ 
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <motion.div 
            className="w-0.5 h-2 bg-white bg-opacity-80 rounded-full mt-2"
            animate={{ 
              y: [0, 8, 0],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
