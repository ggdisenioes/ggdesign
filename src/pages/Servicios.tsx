import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Globe, 
  ShoppingCart, 
  Cpu, 
  Zap, 
  Shield, 
  Wrench,
  ArrowRight,
  Check
} from "lucide-react";

const services = [
  {
    id: "web",
    icon: Globe,
    title: "Desarrollo Web Profesional",
    subtitle: "Sitios web que convierten",
    description: "Creamos sitios web modernos, rápidos y optimizados que representan tu marca y generan resultados.",
    problem: "Tu sitio web actual no refleja la calidad de tu negocio o no genera leads.",
    benefit: "Una presencia digital profesional que inspira confianza y atrae clientes.",
    result: "Más visitas, más conversiones, mejor imagen de marca.",
    features: [
      "Diseño responsive y mobile-first",
      "Optimización SEO on-page",
      "Alta velocidad de carga",
      "Integración con analytics",
      "CMS fácil de gestionar",
    ],
  },
  {
    id: "ecommerce",
    icon: ShoppingCart,
    title: "Ecommerce y Plataformas",
    subtitle: "Vende online sin límites",
    description: "Tiendas online y plataformas digitales robustas, seguras y preparadas para escalar.",
    problem: "Necesitas vender online pero las soluciones genéricas no se adaptan a tu negocio.",
    benefit: "Una plataforma a medida que facilita la compra y maximiza ventas.",
    result: "Aumento de ventas y mejor experiencia de compra para tus clientes.",
    features: [
      "Checkout optimizado",
      "Gestión de inventario",
      "Pasarelas de pago seguras",
      "Integración con logística",
      "Panel de administración completo",
    ],
  },
  {
    id: "ia",
    icon: Cpu,
    title: "Inteligencia Artificial",
    subtitle: "IA que trabaja para ti",
    description: "Integración de inteligencia artificial en tus procesos para automatizar, optimizar y escalar.",
    problem: "Tareas repetitivas consumen tiempo y recursos de tu equipo.",
    benefit: "IA aplicada de forma práctica y orientada a resultados de negocio.",
    result: "Más eficiencia, mejor atención al cliente, decisiones basadas en datos.",
    features: [
      "Chatbots inteligentes 24/7",
      "Automatización de respuestas",
      "Análisis de datos con IA",
      "Recomendaciones personalizadas",
      "Integración con plataformas existentes",
    ],
  },
  {
    id: "automatizacion",
    icon: Zap,
    title: "Automatizaciones",
    subtitle: "Procesos que funcionan solos",
    description: "Automatización de flujos de trabajo y conexión entre herramientas para eliminar tareas manuales.",
    problem: "Tu equipo pierde tiempo en tareas repetitivas que podrían automatizarse.",
    benefit: "Flujos automáticos que funcionan sin intervención humana.",
    result: "Menos errores, más tiempo para lo importante, costos reducidos.",
    features: [
      "Captación automática de leads",
      "Workflows de email marketing",
      "Sincronización entre plataformas",
      "Notificaciones automáticas",
      "Reportes programados",
    ],
  },
  {
    id: "seguridad",
    icon: Shield,
    title: "Ciberseguridad Web",
    subtitle: "Seguridad desde el diseño",
    description: "Implementación de buenas prácticas de seguridad web para proteger tu negocio y tus clientes.",
    problem: "Tu sitio web puede tener vulnerabilidades que ponen en riesgo datos sensibles.",
    benefit: "Tranquilidad de saber que tu plataforma está protegida.",
    result: "Datos seguros, cumplimiento normativo, confianza del cliente.",
    features: [
      "Auditoría de seguridad",
      "Certificados SSL/TLS",
      "Protección contra ataques",
      "Backups automáticos",
      "Cumplimiento RGPD",
    ],
  },
  {
    id: "mantenimiento",
    icon: Wrench,
    title: "Mantenimiento y Soporte",
    subtitle: "Tu web siempre al día",
    description: "Servicio continuo de mantenimiento, actualizaciones y mejoras para mantener tu web en óptimas condiciones.",
    problem: "Tu sitio necesita actualizaciones constantes que no tienes tiempo de gestionar.",
    benefit: "Un equipo técnico que cuida tu web como si fuera suya.",
    result: "Web siempre funcionando, segura y actualizada.",
    features: [
      "Actualizaciones de seguridad",
      "Monitorización 24/7",
      "Backups periódicos",
      "Soporte técnico prioritario",
      "Mejoras continuas",
    ],
  },
];

export default function Servicios() {
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
              Nuestros servicios
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            >
              Soluciones que{" "}
              <span className="text-gradient">transforman</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg"
            >
              Cada servicio está diseñado para resolver problemas reales 
              y generar resultados medibles en tu negocio.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center">
                      <service.icon size={28} className="text-primary-foreground" />
                    </div>
                    <div>
                      <span className="text-primary text-sm font-medium">
                        {service.subtitle}
                      </span>
                      <h2 className="font-display text-2xl sm:text-3xl font-bold">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-lg mb-8">
                    {service.description}
                  </p>

                  {/* Problem → Benefit → Result */}
                  <div className="space-y-4 mb-8">
                    <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
                      <span className="text-xs font-medium text-destructive uppercase tracking-wider">Problema</span>
                      <p className="text-foreground text-sm mt-1">{service.problem}</p>
                    </div>
                    <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                      <span className="text-xs font-medium text-primary uppercase tracking-wider">Beneficio</span>
                      <p className="text-foreground text-sm mt-1">{service.benefit}</p>
                    </div>
                    <div className="p-4 rounded-lg bg-accent/20 border border-accent/30">
                      <span className="text-xs font-medium text-accent uppercase tracking-wider">Resultado</span>
                      <p className="text-foreground text-sm mt-1">{service.result}</p>
                    </div>
                  </div>

                  <Button variant="hero" asChild>
                    <Link to="/contacto" className="gap-2">
                      Solicitar información
                      <ArrowRight size={16} />
                    </Link>
                  </Button>
                </div>

                {/* Features Card */}
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="p-8 rounded-2xl glass">
                    <h3 className="font-display font-semibold text-lg mb-6">
                      ¿Qué incluye?
                    </h3>
                    <ul className="space-y-4">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check size={12} className="text-primary" />
                          </div>
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-card" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
              ¿No encuentras lo que buscas?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Cada proyecto es único. Contanos qué necesitas y diseñamos 
              una solución a medida para tu negocio.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contacto" className="gap-2">
                Hablemos de tu proyecto
                <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
