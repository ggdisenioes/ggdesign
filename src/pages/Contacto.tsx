import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, MessageCircle, Send, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hola@ggdiseno.com",
    href: "mailto:hola@ggdiseno.com",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+34 600 000 000",
    href: "https://wa.me/34600000000",
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Madrid, España",
    href: null,
  },
  {
    icon: Clock,
    label: "Respuesta",
    value: "En menos de 24h",
    href: null,
  },
];

export default function Contacto() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "¡Mensaje enviado!",
      description: "Te responderemos en menos de 24 horas.",
    });

    setFormData({ name: "", email: "", company: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative">
        <div className="absolute inset-0 bg-gradient-radial opacity-30" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block text-primary text-sm font-medium mb-4"
            >
              Contacto
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            >
              Hablemos de tu{" "}
              <span className="text-gradient">proyecto</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg"
            >
              Contanos qué necesitas y veamos cómo la tecnología 
              puede ayudarte a crecer. Sin compromiso.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="p-8 sm:p-10 rounded-2xl glass">
                <h2 className="font-display text-2xl font-bold mb-2">
                  Solicitar presupuesto
                </h2>
                <p className="text-muted-foreground mb-8">
                  Completa el formulario y te responderemos en menos de 24 horas.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Tu nombre"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-secondary/50 border-border focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="tu@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-secondary/50 border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Empresa</Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Nombre de tu empresa (opcional)"
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-secondary/50 border-border focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Contanos sobre tu proyecto, qué necesitas y cualquier detalle relevante..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="bg-secondary/50 border-border focus:border-primary resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full sm:w-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Enviando..."
                    ) : (
                      <>
                        Enviar mensaje
                        <Send size={16} className="ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-2"
            >
              <h2 className="font-display text-2xl font-bold mb-8">
                Otras formas de contacto
              </h2>

              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 p-4 rounded-xl glass"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon size={24} className="text-primary" />
                    </div>
                    <div>
                      <span className="text-muted-foreground text-sm">
                        {item.label}
                      </span>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="block font-medium text-foreground hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium text-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <div className="mt-8 p-6 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
                <h3 className="font-display font-semibold text-lg mb-3">
                  ¿Prefieres WhatsApp?
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Si es más cómodo para ti, podemos chatear directamente por WhatsApp.
                </p>
                <Button variant="outline" asChild className="w-full">
                  <a
                    href="https://wa.me/34600000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gap-2"
                  >
                    <MessageCircle size={20} />
                    Abrir WhatsApp
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-card" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-center mb-12">
              Preguntas frecuentes
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: "¿Cuánto cuesta un proyecto?",
                  a: "Cada proyecto es único, por eso preferimos conocer tus necesidades antes de dar un presupuesto. Trabajamos con diferentes rangos según la complejidad y alcance del proyecto.",
                },
                {
                  q: "¿Cuánto tiempo tarda un proyecto?",
                  a: "Depende del tipo de proyecto. Un sitio web puede estar listo en 2-4 semanas, mientras que una plataforma más compleja puede tomar 2-3 meses. Siempre acordamos plazos claros antes de empezar.",
                },
                {
                  q: "¿Trabajan con empresas fuera de España?",
                  a: "Sí, trabajamos con clientes en toda Europa. La comunicación se puede hacer en español o inglés, y usamos herramientas que facilitan la colaboración remota.",
                },
                {
                  q: "¿Qué pasa después de entregar el proyecto?",
                  a: "Ofrecemos mantenimiento y soporte continuo para que tu proyecto siga funcionando de forma óptima. También podemos implementar mejoras y nuevas funcionalidades según vayas necesitando.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl glass"
                >
                  <h3 className="font-display font-semibold text-foreground mb-3">
                    {faq.q}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
