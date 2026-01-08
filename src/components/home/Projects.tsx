import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-commerce con IA",
    category: "Desarrollo Web + IA",
    description: "Plataforma de comercio electrónico con chatbot inteligente y recomendaciones personalizadas.",
    image: "/placeholder.svg",
    tags: ["React", "Node.js", "OpenAI"],
  },
  {
    title: "Sistema de automatización",
    category: "Automatizaciones",
    description: "Flujo automatizado de captación de leads con integración a CRM y email marketing.",
    image: "/placeholder.svg",
    tags: ["Zapier", "HubSpot", "Webhooks"],
  },
  {
    title: "Portal empresarial seguro",
    category: "Ciberseguridad",
    description: "Portal interno con autenticación multifactor y gestión segura de documentos.",
    image: "/placeholder.svg",
    tags: ["Next.js", "Auth0", "AWS"],
  },
];

export function Projects() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-16">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-primary text-sm font-medium mb-4"
            >
              Proyectos destacados
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold"
            >
              Trabajo que habla
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button variant="outline" asChild>
              <Link to="/proyectos" className="gap-2">
                Ver todos
                <ArrowRight size={16} />
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link to="/proyectos" className="block">
                {/* Image */}
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-6 glass">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <ExternalLink size={24} className="text-primary" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <span className="text-primary text-xs font-medium uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-foreground mt-2 mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
