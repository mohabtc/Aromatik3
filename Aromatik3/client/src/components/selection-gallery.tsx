import { motion } from 'framer-motion';
import { useScrollTrigger } from '@/hooks/use-scroll-trigger';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'wouter';

const perfumes = [
  {
    id: 'tom-ford-lost-cherry',
    brand: 'Tom Ford',
    name: 'Lost Cherry',
    route: '/tom-ford-lost-cherry',
    image: 'https://i.imgur.com/1e2bG7S.png'
  },
  {
    id: 'baccarat-rouge-540',
    brand: 'Maison Francis Kurkdjian',
    name: 'Baccarat Rouge 540',
    route: '/baccarat-rouge-540',
    image: 'https://i.imgur.com/ciqZSpO.png'
  },
  {
    id: 'creed-millesime-imperial',
    brand: 'Creed',
    name: 'Millésime Impérial',
    route: '/creed-millesime-imperial',
    image: 'https://i.imgur.com/o5N6z9a.png'
  },
  {
    id: 'xerjoff-naxos',
    brand: 'Xerjoff',
    name: 'Naxos',
    route: '/xerjoff-naxos',
    image: 'https://i.imgur.com/m6DxXa8.jpeg'
  },
  {
    id: 'angels-share',
    brand: 'Kilian',
    name: 'Angel\'s Share',
    route: '/angels-share',
    image: 'https://i.imgur.com/EUWhBey.jpeg'
  }
];

export default function SelectionGallery() {
  const { isVisible, elementRef } = useScrollTrigger(0.3);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(carouselRef.current?.scrollLeft || 0);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - (carouselRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleTouchStart = (e: TouchEvent) => {
      setStartX(e.touches[0].pageX - carousel.offsetLeft);
      setScrollLeft(carousel.scrollLeft);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!startX) return;
      const x = e.touches[0].pageX - carousel.offsetLeft;
      const walk = (x - startX) * 2;
      carousel.scrollLeft = scrollLeft - walk;
    };

    carousel.addEventListener('touchstart', handleTouchStart);
    carousel.addEventListener('touchmove', handleTouchMove);

    return () => {
      carousel.removeEventListener('touchstart', handleTouchStart);
      carousel.removeEventListener('touchmove', handleTouchMove);
    };
  }, [startX, scrollLeft]);

  return (
    <section 
      id="selection" 
      ref={elementRef}
      className="aromatik-bg-black text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
            Nuestra Selección.
          </h2>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed">
            No seguimos las modas. Elegimos iconos. Fragancias que han definido épocas y que siguen contando historias.
          </p>
        </motion.div>
        
        <motion.div 
          className="relative"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div 
            ref={carouselRef}
            className="scroll-container flex overflow-x-auto space-x-8 pb-8 cursor-grab active:cursor-grabbing"
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {perfumes.map((perfume, index) => (
              <motion.div
                key={perfume.id}
                className="scroll-item flex-none w-72 sm:w-80 h-80 sm:h-96 mobile-carousel-item relative perfume-card-hover rounded-2xl overflow-hidden cursor-pointer group"
                style={{ scrollSnapAlign: 'center' }}
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
              >
                <img 
                  src={perfume.image}
                  alt={`${perfume.brand} ${perfume.name} fragrance essence`}
                  className="w-full h-full object-cover"
                  draggable={false}
                />
                
                <motion.div 
                  className="absolute inset-0 aromatik-bg-black bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <div className="text-center">
                    <motion.h4 
                      className="font-serif text-2xl mb-2"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      {perfume.brand}
                    </motion.h4>
                    <motion.p 
                      className="text-lg mb-4"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      {perfume.name}
                    </motion.p>
                    <Link href={perfume.route}>
                      <motion.button 
                        className="aromatik-bg-gold aromatik-text-black px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-colors text-lg inline-block"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        whileTap={{ scale: 0.95 }}
                        style={{ letterSpacing: '0.02em' }}
                      >
                        Explorar
                      </motion.button>
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
