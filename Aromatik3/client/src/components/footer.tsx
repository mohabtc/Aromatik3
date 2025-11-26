import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useMutation } from '@tanstack/react-query';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';
import { Instagram, Twitter, Facebook } from 'lucide-react';
import logger from '@/utils/logger';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [csrfToken, setCsrfToken] = useState<string | null>(null);
  const { toast } = useToast();

  // Fetch CSRF token on component mount
  useEffect(() => {
    const fetchCsrfToken = async () => {
      try {
        const response = await fetch('/api/csrf-token', {
          credentials: 'include',
        });
        if (response.ok) {
          const data = await response.json();
          setCsrfToken(data.csrfToken);
        }
      } catch (error) {
        logger.error('Failed to fetch CSRF token:', error);
      }
    };

    fetchCsrfToken();
  }, []);

  const subscribeNewsletter = useMutation({
    mutationFn: async (email: string) => {
      // Fetch fresh CSRF token if not available
      let token = csrfToken;
      if (!token) {
        const tokenResponse = await fetch('/api/csrf-token', {
          credentials: 'include',
        });
        if (tokenResponse.ok) {
          const tokenData = await tokenResponse.json();
          token = tokenData.csrfToken;
          setCsrfToken(token);
        }
      }

      // Make request with CSRF token
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': token || '',
        },
        body: JSON.stringify({ email }),
        credentials: 'include',
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Subscription failed');
      }

      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "¡Suscripción exitosa!",
        description: data.message,
      });
      setEmail('');
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "No se pudo completar la suscripción",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      subscribeNewsletter.mutate(email.trim());
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="footer" className="aromatik-bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <img 
                src="https://i.imgur.com/tZVCOOd.png" 
                alt="AROMATIK BARCELONA" 
                className="h-12 opacity-90"
              />
            </div>
            <p className="text-white text-opacity-60 font-light leading-relaxed">
              Revolucionando la experiencia del perfume de lujo en Barcelona.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-medium text-lg mb-6">Navegación</h4>
            <ul className="space-y-3 text-white text-opacity-60">
              <li>
                <a 
                  href="/coleccion"
                  className="hover:text-white transition-colors text-left mobile-touch-friendly py-2 block"
                >
                  Nuestra Selección
                </a>
              </li>
              <li>
                <a 
                  href="/nuestro-concepto"
                  className="hover:text-white transition-colors text-left mobile-touch-friendly py-2 block"
                >
                  Proceso
                </a>
              </li>
              <li>
                <a 
                  href="/manifiesto"
                  className="hover:text-white transition-colors text-left mobile-touch-friendly py-2 block"
                >
                  Sobre Nosotros
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-medium text-lg mb-6">Legal</h4>
            <ul className="space-y-3 text-white text-opacity-60">
              <li>
                <a href="/terminos" className="hover:text-white transition-colors mobile-touch-friendly py-2 block">
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-white transition-colors mobile-touch-friendly py-2 block">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="/contacto" className="hover:text-white transition-colors mobile-touch-friendly py-2 block">
                  Contacto
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-medium text-lg mb-6">Newsletter</h4>
            <p className="text-white text-opacity-60 text-sm mb-4 leading-relaxed">
              Únete a la revolución. Recibe antes que nadie nuestras nuevas selecciones.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input 
                type="email" 
                placeholder="Tu email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full aromatik-bg-black border border-white border-opacity-20 rounded-lg px-4 py-3 text-white placeholder-white placeholder-opacity-40 focus:outline-none focus:border-white transition-colors"
                required
              />
              <button 
                type="submit" 
                disabled={subscribeNewsletter.isPending}
                className="w-full aromatik-bg-gold aromatik-text-black py-4 rounded-lg font-semibold hover:opacity-90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed mobile-touch-friendly text-lg"
                style={{ letterSpacing: '0.02em' }}
              >
                {subscribeNewsletter.isPending ? 'Suscribiendo...' : 'Suscribirse'}
              </button>
            </form>
          </motion.div>
        </div>

        {/* Social Media */}
        <motion.div 
          className="border-t border-white border-opacity-20 mt-12 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white text-opacity-60 text-sm">
              © 2025 Aromatik Barcelona. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6">
              <motion.a 
                href="https://www.instagram.com/aromatikbarcelona"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram page"
                className="text-white text-opacity-60 hover:text-white transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a 
                href="https://twitter.com/aromatikbcn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Twitter"
                className="text-white text-opacity-60 hover:text-white transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter size={20} />
              </motion.a>
              <motion.a 
                href="https://www.facebook.com/aromatikbarcelona"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Like us on Facebook"
                className="text-white text-opacity-60 hover:text-white transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook size={20} />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
