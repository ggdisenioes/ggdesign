import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Code, Cpu, Shield, Zap } from "lucide-react";

const projects = [
  {
    title: "Sistema de gestión empresarial",
    client: "Empresa de logística",
    category: "Desarrollo Web + Automatizaciones",
    description: "Plataforma integral de gestión con dashboard en tiempo real, automatización de reportes y seguimiento de entregas.",
    challenge: "Gestión manual de pedidos y falta de visibilidad en operaciones.",
    solution: "Dashboard centralizado con actualizaciones en tiempo real y alertas automáticas.",
    results: ["40% reducción en tiempos de gestión", "Visibilidad completa de operaciones", "Reportes automáticos diarios"],
    technologies: ["React", "Node.js", "PostgreSQL", "Webhooks"],
    icon: Zap,
  },
  {
    title: "E-commerce con IA",
    client: "Tienda de moda online",
    category: "E-commerce + Inteligencia Artificial",
    description: "Plataforma de comercio electrónico con chatbot inteligente para atención al cliente y recomendaciones personalizadas.",
    challenge: "Alto volumen de consultas repetitivas y baja tasa de conversión.",
    solution: "Chatbot 24/7 que resuelve dudas y sugiere productos basados en preferencias.",
    results: ["60% consultas resueltas por IA", "+25% en conversión", "Atención 24/7 sin costo adicional"],
    technologies: ["Next.js", "OpenAI", "Stripe", "Vercel"],
    icon: Cpu,
  },
  {
    title: "Portal seguro de documentos",
    client: "Despacho de abogados",
    category: "Desarrollo Web + Ciberseguridad",
    description: "Portal privado para compartir documentos sensibles con clientes, con autenticación robusta y trazabilidad.",
    challenge: "Envío de documentos por email sin garantías de seguridad ni control de acceso.",
    solution: "Portal con autenticación multifactor, encriptación y registro de accesos.",
    results: ["Cumplimiento RGPD garantizado", "Trazabilidad completa", "Confianza del cliente"],
    technologies: ["Next.js", "Auth0", "AWS S3", "PostgreSQL"],
    icon: Shield,
  },
  {
    title: "Landing page de alto impacto",
    client: "Startup tecnológica",
    category: "Desarrollo Web",
    description: "Sitio web corporativo con diseño premium, optimizado para SEO y conversión de leads.",
    challenge: "Presencia digital que no reflejaba la innovación de la empresa.",
    solution: "Diseño moderno con animaciones fluidas y optimización de performance.",
    results: ["+200% tráfico orgánico", "Tiempo de carga < 1s", "Mejor posicionamiento SEO"],
    technologies: ["React", "Framer Motion", "Tailwind CSS", "Vercel"],
    icon: Code,
  },
];

export default function Proyectos() {
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
              Nuestro trabajo
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            >
              Proyectos que{" "}
              <span className="text-gradient">hablan</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg"
            >
              Casos reales con resultados medibles. Cada proyecto representa 
              un desafío superado y un cliente satisfecho.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid lg:grid-cols-5 gap-8 p-8 rounded-2xl glass card-hover"
              >
                {/* Left Column - Main Info */}
                <div className="lg:col-span-3">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                      <project.icon size={24} className="text-primary-foreground" />
                    </div>
                    <div>
                      <span className="text-primary text-sm font-medium">
                        {project.category}
                      </span>
                      <h2 className="font-display text-xl sm:text-2xl font-bold">
                        {project.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-lg mb-6">
                    {project.description}
                  </p>

                  {/* Challenge & Solution */}
                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    <div className="p-4 rounded-lg bg-secondary/50">
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        Desafío
                      </span>
                      <p className="text-foreground text-sm mt-2">{project.challenge}</p>
                    </div>
                    <div className="p-4 rounded-lg bg-primary/10">
                      <span className="text-xs font-medium text-primary uppercase tracking-wider">
                        Solución
                      </span>
                      <p className="text-foreground text-sm mt-2">{project.solution}</p>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Column - Results */}
                <div className="lg:col-span-2">
                  <div className="h-full p-6 rounded-xl bg-card border border-border">
                    <h3 className="font-display font-semibold text-lg mb-4">
                      Resultados
                    </h3>
                    <ul className="space-y-4">
                      {project.results.map((result, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-primary text-xs font-bold">{i + 1}</span>
                          </div>
                          <span className="text-foreground text-sm">{result}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-6 pt-6 border-t border-border">
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">
                        Cliente
                      </span>
                      <p className="text-foreground font-medium mt-1">{project.client}</p>
                    </div>
                  </div>
                </div>
              </motion.article>
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
              Tu proyecto puede ser el próximo
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Contanos qué desafío enfrentas y trabajemos juntos 
              para encontrar la mejor solución.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contacto" className="gap-2">
                Empezar un proyecto
                <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
