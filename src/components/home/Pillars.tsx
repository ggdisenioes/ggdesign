import { motion } from "framer-motion";
import { Cpu, Zap, Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const pillars = [
  {
    icon: Cpu,
    title: "Inteligencia Artificial",
    description: "Integración de IA en sitios web y plataformas. Chatbots inteligentes, automatización de respuestas y procesos orientados a conversión y eficiencia.",
    features: [
      "Chatbots para atención al cliente",
      "Automatización de respuestas",
      "IA aplicada a conversión",
    ],
    href: "/servicios#ia",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: Zap,
    title: "Automatizaciones",
    description: "Automatización de procesos digitales e integraciones entre plataformas. Reduce tareas manuales, errores y costos operativos.",
    features: [
      "Flujos automáticos de captación",
      "Integraciones entre sistemas",
      "Ahorro de tiempo y costos",
    ],
    href: "/servicios#automatizacion",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    icon: Shield,
    title: "Ciberseguridad",
    description: "Sitios web seguros desde el diseño. Protección de datos, prevención de vulnerabilidades y buenas prácticas de seguridad web.",
    features: [
      "Seguridad desde el diseño",
      "Protección de datos",
      "Prevención de vulnerabilidades",
    ],
    href: "/servicios#seguridad",
    gradient: "from-indigo-500 to-purple-500",
  },
];

export function Pillars() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-primary text-sm font-medium mb-4"
          >
            Nuestros pilares
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
          >
            Tecnología que transforma
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Tres pilares fundamentales que garantizan soluciones digitales 
            eficientes, seguras y preparadas para el futuro.
          </motion.p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="h-full p-8 rounded-2xl glass card-hover flex flex-col">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                  <pillar.icon size={28} className="text-white" />
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-semibold mb-4 text-foreground">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {pillar.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {pillar.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <Link
                  to={pillar.href}
                  className="inline-flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all"
                >
                  Saber más
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
