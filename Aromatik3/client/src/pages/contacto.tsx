import { useEffect, useState } from 'react';
import { useScrollPosition } from '@/hooks/use-scroll-trigger';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import SEOHead from '@/components/seo-head';
import { FAQSchema } from '@/components/seo-schema';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useToast } from '@/hooks/use-toast';

const contactSchema = z.object({
  nombre: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Por favor ingresa un email válido'),
  asunto: z.string().min(1, 'Por favor selecciona un asunto'),
  mensaje: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contacto() {
  const scrollY = useScrollPosition();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const selectedAsunto = watch('asunto');

  useEffect(() => {
    setIsScrolled(scrollY > 50);
  }, [scrollY]);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Mensaje enviado",
        description: "Te responderemos en un plazo máximo de 24 horas laborables.",
      });
      
      reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#121212' }}>
      <SEOHead
        title="Contacto Perfumería Nicho Barcelona - Dónde Probar Perfumes | AROMATIK BARCELONA"
        description="Contacto perfumería nicho Barcelona AROMATIK. ¿Dónde probar perfumes nicho en Barcelona? Perfumería especializada Barcelona. Tienda perfumes Sant Pere Barcelona. Asesoramiento perfumes Barcelona."
        keywords="perfumería nicho barcelona contacto, aromatik barcelona dirección, dónde probar perfumes nicho barcelona, tienda perfumes sant pere barcelona, perfumería especializada barcelona, asesoramiento perfumes barcelona"
        canonicalUrl="https://aromatikbarcelona.com/contacto"
        ogImage="https://aromatikbarcelona.com/images/contacto-og.jpg"
      />
      <FAQSchema faqs={[
        {
          question: "¿Qué es un decant de perfume?",
          answer: "Un decant es una muestra auténtica extraída directamente del frasco original del perfume. En AROMATIK BARCELONA ofrecemos decants de 5ml, 10ml y 20ml de perfumes nicho y exclusivos como Baccarat Rouge 540, Tom Ford Lost Cherry, Creed y Xerjoff."
        },
        {
          question: "¿Los decants son auténticos?",
          answer: "Sí, todos nuestros decants son 100% auténticos. Extraemos las fragancias directamente de los frascos originales de las marcas, garantizando la misma calidad y concentración que el perfume completo."
        },
        {
          question: "¿Hacen envíos a toda España?",
          answer: "Sí, enviamos a toda España en 24-48 horas. Ofrecemos envío gratuito en pedidos superiores a 50€. Nuestros decants están perfectamente empaquetados para garantizar que lleguen en perfectas condiciones."
        },
        {
          question: "¿Cuánto dura un decant de 5ml?",
          answer: "Un decant de 5ml proporciona aproximadamente 60-80 aplicaciones, dependiendo de la cantidad que uses en cada aplicación. Es perfecto para probar una fragancia durante 2-3 meses o para llevar de viaje."
        },
        {
          question: "¿Dónde están ubicados en Barcelona?",
          answer: "AROMATIK BARCELONA opera desde el distrito de Sant Pere en Barcelona. Somos una perfumería especializada online que sirve a toda España, ofreciendo acceso a perfumes nicho exclusivos a través de nuestros decants auténticos."
        }
      ]} />
      <Navigation isScrolled={isScrolled} />
      
      {/* Hero Section - Encabezado de Página */}
      <section className="min-h-screen flex items-center justify-center relative pt-32 pb-32">
        <div className="text-center max-w-5xl mx-auto px-12 md:px-16">
          {/* H1 - Título profesional y receptivo */}
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
            Contacto
          </motion.h1>
          
          {/* Párrafo de introducción - Receptivo y profesional */}
          <motion.p 
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
              fontSize: '18px',
              letterSpacing: '0.01em',
              lineHeight: '1.6',
              fontFamily: 'Inter, sans-serif',
              textAlign: 'center'
            }}
          >
            Estamos aquí para ayudarte. Si tienes cualquier duda sobre un pedido, una consulta sobre nuestras fragancias o simplemente quieres iniciar una conversación, este es tu canal directo con nosotros.
          </motion.p>
        </div>
      </section>

      {/* Cuerpo Principal - Layout a Dos Columnas */}
      <section className="py-32" style={{ maxWidth: '1100px', margin: '0 auto', padding: '128px 48px' }}>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Columna Izquierda - El Mensaje */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Titular H3 */}
            <h3 
              className="font-serif text-3xl md:text-4xl"
              style={{ 
                color: '#F5F5F7',
                letterSpacing: '0.03em',
                lineHeight: '1.2',
                fontWeight: 400,
                fontFamily: 'Playfair Display, serif'
              }}
            >
              Una Conversación.
            </h3>
            
            {/* Párrafo de comunicación clara */}
            <p 
              className="text-lg leading-relaxed"
              style={{
                color: '#F5F5F7',
                fontSize: '16px',
                lineHeight: '1.6',
                fontFamily: 'Inter, sans-serif',
                maxWidth: '500px'
              }}
            >
              Creemos en la comunicación clara y personal. Rellena el formulario y un miembro de nuestro equipo se pondrá en contacto contigo en un plazo máximo de 24 horas laborables.
            </p>
            
            {/* Párrafo de FAQ */}
            <p 
              className="text-lg leading-relaxed"
              style={{
                color: '#F5F5F7',
                fontSize: '16px',
                lineHeight: '1.6',
                fontFamily: 'Inter, sans-serif',
                maxWidth: '500px'
              }}
            >
              Para consultas más rápidas, puedes consultar nuestras Preguntas Frecuentes.
            </p>
          </motion.div>

          {/* Columna Derecha - El Formulario */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Campo Nombre */}
              <div className="space-y-2">
                <Label 
                  htmlFor="nombre"
                  style={{
                    color: '#F5F5F7',
                    fontSize: '14px',
                    fontFamily: 'Inter, sans-serif',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}
                >
                  Nombre
                </Label>
                <Input
                  id="nombre"
                  {...register('nombre')}
                  className="contact-input"
                  style={{
                    backgroundColor: '#1E1E1E',
                    border: '1px solid transparent',
                    color: '#F5F5F7',
                    fontSize: '16px',
                    fontFamily: 'Inter, sans-serif',
                    padding: '12px 16px',
                    borderRadius: '4px'
                  }}
                />
                {errors.nombre && (
                  <p className="text-red-400 text-sm" role="alert">{errors.nombre.message}</p>
                )}
              </div>

              {/* Campo Email */}
              <div className="space-y-2">
                <Label 
                  htmlFor="email"
                  style={{
                    color: '#F5F5F7',
                    fontSize: '14px',
                    fontFamily: 'Inter, sans-serif',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}
                >
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  {...register('email')}
                  className="contact-input"
                  style={{
                    backgroundColor: '#1E1E1E',
                    border: '1px solid transparent',
                    color: '#F5F5F7',
                    fontSize: '16px',
                    fontFamily: 'Inter, sans-serif',
                    padding: '12px 16px',
                    borderRadius: '4px'
                  }}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="text-red-400 text-sm" role="alert">{errors.email.message}</p>
                )}
              </div>

              {/* Campo Asunto - Selector */}
              <div className="space-y-2">
                <Label 
                  htmlFor="asunto"
                  style={{
                    color: '#F5F5F7',
                    fontSize: '14px',
                    fontFamily: 'Inter, sans-serif',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}
                >
                  Asunto
                </Label>
                <Select onValueChange={(value) => setValue('asunto', value)} value={selectedAsunto}>
                  <SelectTrigger 
                    id="asunto"
                    className="contact-select"
                    style={{
                      backgroundColor: '#1E1E1E',
                      border: '1px solid transparent',
                      color: '#F5F5F7',
                      fontSize: '16px',
                      fontFamily: 'Inter, sans-serif',
                      padding: '12px 16px',
                      borderRadius: '4px'
                    }}
                    aria-label="Seleccionar asunto del mensaje"
                  >
                    <SelectValue placeholder="Selecciona un asunto" />
                  </SelectTrigger>
                  <SelectContent 
                    style={{
                      backgroundColor: '#1E1E1E',
                      border: '1px solid #333',
                      color: '#F5F5F7'
                    }}
                  >
                    <SelectItem value="consulta-pedido">Consulta sobre mi pedido</SelectItem>
                    <SelectItem value="duda-fragancia">Duda sobre una fragancia</SelectItem>
                    <SelectItem value="sugerencias">Sugerencias</SelectItem>
                    <SelectItem value="otro">Otro</SelectItem>
                  </SelectContent>
                </Select>
                {errors.asunto && (
                  <p className="text-red-400 text-sm" role="alert">{errors.asunto.message}</p>
                )}
              </div>

              {/* Campo Mensaje */}
              <div className="space-y-2">
                <Label 
                  htmlFor="mensaje"
                  style={{
                    color: '#F5F5F7',
                    fontSize: '14px',
                    fontFamily: 'Inter, sans-serif',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}
                >
                  Mensaje
                </Label>
                <Textarea
                  id="mensaje"
                  rows={6}
                  {...register('mensaje')}
                  className="contact-textarea"
                  style={{
                    backgroundColor: '#1E1E1E',
                    border: '1px solid transparent',
                    color: '#F5F5F7',
                    fontSize: '16px',
                    fontFamily: 'Inter, sans-serif',
                    padding: '12px 16px',
                    borderRadius: '4px',
                    resize: 'vertical'
                  }}
                  aria-describedby={errors.mensaje ? "mensaje-error" : undefined}
                />
                {errors.mensaje && (
                  <p id="mensaje-error" className="text-red-400 text-sm" role="alert">{errors.mensaje.message}</p>
                )}
              </div>

              {/* Botón CTA */}
              <motion.div 
                className="pt-4"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="contact-submit-button text-lg px-10 py-4"
                  style={{
                    backgroundColor: '#D4AF37',
                    color: '#000000',
                    fontSize: '16px',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    fontWeight: '500',
                    fontFamily: 'Inter, sans-serif',
                    border: 'none',
                    borderRadius: '4px',
                    width: '100%'
                  }}
                  aria-label={isSubmitting ? "Enviando mensaje, por favor espera" : "Enviar mensaje de contacto"}
                  aria-disabled={isSubmitting}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Sección de Preguntas Frecuentes */}
      <section className="py-32" style={{ backgroundColor: '#000000' }}>
        <div className="text-center" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 48px' }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            {/* Titular de Sección H2 - Centrado */}
            <h2 
              className="font-serif text-4xl md:text-5xl text-center mb-16"
              style={{ 
                color: '#F5F5F7',
                letterSpacing: '0.03em',
                lineHeight: '1.2',
                fontWeight: 400,
                fontFamily: 'Playfair Display, serif'
              }}
            >
              Preguntas Frecuentes
            </h2>

            {/* Componente Acordeón */}
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {/* Pregunta 1: Autenticidad */}
                <AccordionItem 
                  value="item-1" 
                  className="faq-item"
                  style={{
                    borderBottom: '1px solid rgba(245, 245, 247, 0.2)',
                    paddingBottom: '24px'
                  }}
                >
                  <AccordionTrigger 
                    className="faq-trigger text-left"
                    style={{
                      color: '#F5F5F7',
                      fontSize: '18px',
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: '500',
                      letterSpacing: '0.01em',
                      textAlign: 'left',
                      paddingBottom: '16px'
                    }}
                  >
                    ¿Los perfumes son 100% auténticos?
                  </AccordionTrigger>
                  <AccordionContent 
                    className="faq-content"
                    style={{
                      color: '#F5F5F7',
                      fontSize: '16px',
                      fontFamily: 'Inter, sans-serif',
                      lineHeight: '1.6',
                      opacity: '0.9',
                      textAlign: 'left',
                      paddingTop: '8px'
                    }}
                  >
                    Sí. En nuestra página "Nuestro Concepto" detallamos nuestro compromiso y proceso de autenticidad. Solo adquirimos fragancias de distribuidores oficiales.
                  </AccordionContent>
                </AccordionItem>

                {/* Pregunta 2: Pulverizaciones */}
                <AccordionItem 
                  value="item-2" 
                  className="faq-item"
                  style={{
                    borderBottom: '1px solid rgba(245, 245, 247, 0.2)',
                    paddingBottom: '24px'
                  }}
                >
                  <AccordionTrigger 
                    className="faq-trigger text-left"
                    style={{
                      color: '#F5F5F7',
                      fontSize: '18px',
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: '500',
                      letterSpacing: '0.01em',
                      textAlign: 'left',
                      paddingBottom: '16px'
                    }}
                  >
                    ¿Cuántas pulverizaciones obtengo de un decant?
                  </AccordionTrigger>
                  <AccordionContent 
                    className="faq-content"
                    style={{
                      color: '#F5F5F7',
                      fontSize: '16px',
                      fontFamily: 'Inter, sans-serif',
                      lineHeight: '1.6',
                      opacity: '0.9',
                      textAlign: 'left',
                      paddingTop: '8px'
                    }}
                  >
                    Un decant de 5ml ofrece aproximadamente 75 pulverizaciones. Uno de 10ml, unas 150. Es la cantidad perfecta para explorar una fragancia a fondo.
                  </AccordionContent>
                </AccordionItem>

                {/* Pregunta 3: Tiempos de envío */}
                <AccordionItem 
                  value="item-3" 
                  className="faq-item"
                  style={{
                    borderBottom: '1px solid rgba(245, 245, 247, 0.2)',
                    paddingBottom: '24px'
                  }}
                >
                  <AccordionTrigger 
                    className="faq-trigger text-left"
                    style={{
                      color: '#F5F5F7',
                      fontSize: '18px',
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: '500',
                      letterSpacing: '0.01em',
                      textAlign: 'left',
                      paddingBottom: '16px'
                    }}
                  >
                    ¿Cuándo recibiré mi pedido?
                  </AccordionTrigger>
                  <AccordionContent 
                    className="faq-content"
                    style={{
                      color: '#F5F5F7',
                      fontSize: '16px',
                      fontFamily: 'Inter, sans-serif',
                      lineHeight: '1.6',
                      opacity: '0.9',
                      textAlign: 'left',
                      paddingTop: '8px'
                    }}
                  >
                    Los pedidos se preparan en 24-48h laborables. El tiempo de envío depende de la opción que elijas (Estándar o Express). Puedes consultar todos los detalles en nuestra página de "Envíos y Devoluciones".
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}