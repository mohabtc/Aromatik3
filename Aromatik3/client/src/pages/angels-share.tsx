import { useState, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { useScrollTrigger } from '@/hooks/use-scroll-trigger';
import { ShoppingCart, Heart, Star, Clock, Shield } from 'lucide-react';
import { useMutation } from '@tanstack/react-query';
import { useToast } from '@/hooks/use-toast';
import OptimizedImage from '@/components/optimized-image';
import SEOHead from '@/components/seo-head';
import { ProductSchema } from '@/components/seo-schema';
import logger from '@/utils/logger';

const Navigation = lazy(() => import('@/components/navigation'));
const Footer = lazy(() => import('@/components/footer'));

const productSizes = [
  { 
    id: 'small', 
    name: '5 ml', 
    price: 19.90, 
    description: 'Para tus momentos clave',
    highlight: false,
    label: ''
  },
  { 
    id: 'medium', 
    name: '10 ml', 
    price: 34.90, 
    description: 'Tu compañero de viaje ideal',
    highlight: true,
    label: 'MÁS POPULAR'
  },
  { 
    id: 'large', 
    name: '20 ml', 
    price: 59.90, 
    description: 'Para que nunca te falte',
    highlight: false,
    label: 'MEJOR VALOR'
  }
];

export default function AngelsShareLanding() {
  const [selectedSize, setSelectedSize] = useState(productSizes[1]);
  const [quantity, setQuantity] = useState(1);
  const { isVisible, elementRef } = useScrollTrigger(0.3);
  const { toast } = useToast();

  const addToCart = useMutation({
    mutationFn: async (orderData: any) => {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      logger.debug('Order placed:', orderData);
      return orderData;
    },
    onSuccess: () => {
      toast({
        title: "¡Perfecto!",
        description: "Angel's Share está ahora en tu carrito. El deseo se convierte en realidad.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Algo ha fallado. Inténtalo de nuevo.",
        variant: "destructive",
      });
    },
  });

  const handleAddToCart = () => {
    addToCart.mutate({
      product: "Angel's Share",
      size: selectedSize.name,
      price: selectedSize.price,
      quantity
    });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <SEOHead
        title="Compra el Decant de Angels Share de Kilian | Aromatik BCN"
        description="Prueba Angels Share con un decant 100% auténtico de Aromatik. Formatos de 5, 10 y 20ml. Descubre la obra maestra de Kilian antes de comprar la botella."
        keywords="compra decant angels share, kilian, muestra angels share, perfume kilian, decant auténtico aromatik"
        canonicalUrl="https://aromatikbarcelona.com/angels-share"
        ogImage="https://aromatikbarcelona.com/images/angels-share-og.jpg"
        productSchema={{
          name: "Decant Angel's Share by Kilian",
          description: "Muestra auténtica de 5ml del exclusivo perfume Angel's Share by Kilian con notas de cognac y especias",
          brand: "Kilian",
          category: "Perfume",
          price: "19.90",
          availability: "https://schema.org/InStock"
        }}
      />
      <ProductSchema
        name="Decant Angels Share"
        description="Muestra auténtica de 5ml del exclusivo perfume Angels Share de Kilian Paris con notas de cognac y especias"
        brand="Kilian Paris"
        category="Perfume"
        price="19.90"
        availability="https://schema.org/InStock"
        image="https://aromatikbarcelona.com/images/angels-share.jpg"
        sku="AR-AS-5ML"
        url="https://aromatikbarcelona.com/angels-share"
      />
      {/* Hero Section - El Gancho Emocional */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover opacity-60"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-liquid-cognac-swirling-in-a-crystal-glass-4477-large.mp4" type="video/mp4" />
            {/* Fallback to image if video fails */}
            <img 
              src="https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
              alt="decant-angels-share-kilian-sobre-mesa-roble-oscuro"
              className="w-full h-full object-cover opacity-40"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            <div className="mb-12">
              <img 
                src="https://i.imgur.com/tZVCOOd.png" 
                alt="Aromatik Barcelona"
                className="h-12 mx-auto mb-16 opacity-80"
              />
            </div>
            
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight text-white">
              Angels Share by Kilian
            </h1>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl mb-16 text-white/90 font-light leading-relaxed">
              No es casualidad. Es una elección.
            </h2>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="text-lg md:text-xl text-white/70 font-light italic"
            >
              Angel's Share by Kilian
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition - El Anclaje de Precio */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl md:text-5xl mb-8 text-white leading-tight">
              El Lujo de una Obra Maestra.<br />
              La Inteligencia de una Decisión.
            </h2>
            
            <p className="text-xl md:text-2xl mb-16 text-white/80 leading-relaxed max-w-3xl mx-auto">
              Poseer una obra de arte como Angel's Share es una inversión. 
              Disfrutarla cuando quieras, es una decisión inteligente. 
              Te damos acceso directo a la experiencia, no al frasco entero.
            </p>
            
            {/* Price Comparison */}
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div className="text-center p-8 border border-white/20 rounded-2xl bg-white/5">
                <h3 className="text-xl mb-4 text-white/90">Botella Completa (50ml)</h3>
                <p className="text-3xl text-white/50 line-through mb-2">220 €</p>
                <p className="text-sm text-white/60">Inversión completa</p>
              </div>
              
              <div className="text-center p-8 border-2 rounded-2xl relative overflow-hidden"
                   style={{ borderColor: '#B5651D', backgroundColor: 'rgba(181,101,29,0.1)' }}>
                <div className="absolute top-0 left-0 w-full py-2 text-black text-sm font-bold"
                     style={{ backgroundColor: '#B5651D' }}>
                  ACCESO INTELIGENTE
                </div>
                <div className="pt-6">
                  <h3 className="text-xl mb-4 text-white">Tu Decant Aromatik</h3>
                  <p className="text-4xl font-bold mb-2" style={{ color: '#C7691F' }}>desde 19,90 €</p>
                  <p className="text-sm text-white/80">Experiencia completa</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Selection */}
      <section ref={elementRef} className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            {/* Product Image */}
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-3xl p-8 backdrop-blur-sm border"
                style={{ 
                  background: 'linear-gradient(to bottom right, rgba(120,53,15,0.2), rgba(0,0,0,0.4))',
                  borderColor: 'rgba(120,53,15,0.2)'
                }}
              >
                <img 
                  src="https://i.imgur.com/vJZlkBQ.jpeg"
                  alt="decant-de-5ml-angels-share-kilian-muestra-autentica-aromatik"
                  className="w-full h-96 object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-3xl" />
              </motion.div>
            </div>

            {/* Purchase Options */}
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-4xl md:text-5xl mb-8 text-white">
                  Hazlo Tuyo.
                </h2>

              </div>

              {/* Size Options */}
              <div className="space-y-4">
                {productSizes.map((size) => (
                  <motion.div
                    key={size.id}
                    onClick={() => setSelectedSize(size)}
                    className={`relative p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                      selectedSize.id === size.id
                        ? 'bg-white/5 hover:border-white/40'
                        : 'border-white/20 bg-white/5 hover:border-white/40'
                    }`}
                    style={{
                      borderColor: selectedSize.id === size.id ? '#B5651D' : 'rgba(255,255,255,0.2)',
                      backgroundColor: selectedSize.id === size.id ? 'rgba(181,101,29,0.1)' : 'rgba(255,255,255,0.05)'
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {size.label && (
                      <div className="absolute -top-3 left-6 text-black px-3 py-1 rounded-full text-sm font-medium" style={{ backgroundColor: '#B5651D' }}>
                        {size.label}
                      </div>
                    )}
                    <div className="flex justify-between items-center">
                      <div className="flex-1">
                        <h4 className="text-2xl font-medium mb-1">{size.name}</h4>
                        <p className="text-white/70 text-base">{size.description}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-3xl font-bold" style={{ color: '#C7691F' }}>{size.price} €</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quantity & Add to Cart */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <span className="text-lg">Cantidad:</span>
                  <div className="flex items-center border border-white/20 rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-2 hover:bg-white/10 transition-colors"
                    >
                      -
                    </button>
                    <span className="px-6 py-2 border-x border-white/20">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-2 hover:bg-white/10 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                <motion.button
                  onClick={handleAddToCart}
                  disabled={addToCart.isPending}
                  className="w-full text-black font-bold py-4 px-8 rounded-2xl text-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3"
                  style={{ 
                    backgroundColor: '#B5651D',
                    letterSpacing: '0.02em'
                  }}
                  onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#A0571A'}
                  onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = '#B5651D'}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ShoppingCart className="w-6 h-6" />
                  <span>
                    {addToCart.isPending 
                      ? 'Añadiendo...' 
                      : 'Hacerlo Mío'
                    }
                  </span>
                </motion.button>

                <div className="flex items-center justify-center space-x-6 text-sm text-white/60">
                  <div className="flex items-center">
                    <Heart className="w-4 h-4 mr-1" />
                    <span>Envío en 24h</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="w-4 h-4 mr-1" />
                    <span>Garantía 100%</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* La Historia del Perfume - Seducción Narrativa */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
            alt="Oak barrel texture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-serif text-4xl md:text-5xl mb-12 text-white leading-tight">
              Memoria de un Licor Celestial.
            </h2>
            
            <div className="max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light">
                Creado por Kilian Hennessy como su obra más personal, Angel's Share es una oda a su herencia, 
                a las bodegas de coñac de su familia. La esencia del licor impregna la madera de roble, 
                creando una apertura cálida e inolvidable. Un corazón adictivo de canela y haba tonka 
                añade un dulzor especiado, antes de reposar en un fondo eterno de sándalo y praliné.
              </p>
              
              <p className="text-2xl md:text-3xl font-medium mt-12 text-white italic">
                No es un perfume. Es una confidencia que se lleva en la piel.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Prueba Social Específica */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl mb-12 text-white">
              No solo te ha gustado a ti.
            </h2>
            
            {/* Testimonials Carousel */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Testimonio 1 */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl border border-white/20 bg-white/5"
              >
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 mx-1" style={{ fill: '#B5651D', color: '#B5651D' }} />
                  ))}
                </div>
                <p className="text-lg text-white/90 mb-6 leading-relaxed italic">
                  "Es el perfume de otoño/invierno definitivo. Cálido, embriagador, adictivo. 
                  El decant de Aromatik es 100% fiel. Un 10."
                </p>
                <p className="text-white/70 font-medium">- Miguel R.</p>
              </motion.div>

              {/* Testimonio 2 */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl border border-white/20 bg-white/5"
              >
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 mx-1" style={{ fill: '#B5651D', color: '#B5651D' }} />
                  ))}
                </div>
                <p className="text-lg text-white/90 mb-6 leading-relaxed italic">
                  "Cada vez que lo llevo, alguien me pregunta qué perfume es. 
                  Gracias a Aromatik puedo usar esta maravilla sin arruinarme."
                </p>
                <p className="text-white/70 font-medium">- Sofía L.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Garantía y Cierre */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          {/* Garantía de Autenticidad */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl mb-8 text-white">
              Garantía de Autenticidad
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <Shield className="w-12 h-12 mx-auto mb-4 text-white/80" />
                <h3 className="text-lg font-medium mb-2 text-white">100% Auténtico</h3>
                <p className="text-white/70 text-sm">Directo de distribuidores oficiales</p>
              </div>
              
              <div className="text-center">
                <Heart className="w-12 h-12 mx-auto mb-4 text-white/80" />
                <h3 className="text-lg font-medium mb-2 text-white">Satisfacción Garantizada</h3>
                <p className="text-white/70 text-sm">30 días para devolución sin preguntas</p>
              </div>
              
              <div className="text-center">
                <Clock className="w-12 h-12 mx-auto mb-4 text-white/80" />
                <h3 className="text-lg font-medium mb-2 text-white">Envío Rápido</h3>
                <p className="text-white/70 text-sm">Recíbelo en 24-48h en Barcelona</p>
              </div>
            </div>
          </motion.div>

          {/* Repetición del CTA Principal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-serif text-4xl md:text-5xl mb-8 text-white">
              Hazlo Tuyo.
            </h2>
            
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              El momento es ahora. La fragancia está esperando. Tu piel recuerda la sensación.
            </p>
            
            <motion.button
              onClick={handleAddToCart}
              disabled={addToCart.isPending}
              className="text-black font-bold py-6 px-12 rounded-2xl text-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ 
                backgroundColor: '#B5651D',
                letterSpacing: '0.02em'
              }}
              onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#A0571A'}
              onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = '#B5651D'}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {addToCart.isPending ? 'Añadiendo...' : 'Hacerlo Mío'}
            </motion.button>
            
            <p className="text-white/60 mt-6 text-lg">
              {selectedSize.name} - {selectedSize.price} € • Envío incluido
            </p>
          </motion.div>
        </div>
      </section>

      {/* Disclaimer Legal */}
      <section className="py-12 bg-black border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-white/40 text-sm leading-relaxed max-w-4xl mx-auto">
              Aromatik Barcelona es un distribuidor independiente especializado en fragancias de alta gama. 
              No estamos afiliados directamente con las marcas mencionadas. Todos los productos son auténticos 
              y adquiridos a través de canales oficiales de distribución. Angel's Share es una marca registrada 
              de By Kilian. Para consultas sobre garantías o devoluciones, contacta con nuestro equipo de atención al cliente.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <button className="border border-white/20 hover:border-white/40 text-white/70 hover:text-white px-6 py-2 rounded-lg transition-colors text-sm">
                WhatsApp: +34 600 000 000
              </button>
              <button className="border border-white/20 hover:border-white/40 text-white/70 hover:text-white px-6 py-2 rounded-lg transition-colors text-sm">
                Email: info@aromatikbcn.com
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}