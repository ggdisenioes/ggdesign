import { motion } from "framer-motion";
import { TrendingUp, ShieldCheck, Clock, BarChart } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Más eficiencia",
    description: "Procesos optimizados que reducen tiempo y recursos en cada operación de tu negocio.",
  },
  {
    icon: ShieldCheck,
    title: "Más seguridad",
    description: "Protección integral de datos y sistemas desde el primer día de desarrollo.",
  },
  {
    icon: Clock,
    title: "Menos tareas manuales",
    description: "Automatizaciones que liberan a tu equipo para enfocarse en lo importante.",
  },
  {
    icon: BarChart,
    title: "Mejor conversión",
    description: "Soluciones diseñadas para maximizar resultados y retorno de inversión.",
  },
];

export function Benefits() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-card" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-primary text-sm font-medium mb-4"
            >
              Beneficios concretos
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
            >
              Resultados que{" "}
              <span className="text-gradient">importan</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg mb-8"
            >
              Cada solución que desarrollamos está orientada a generar impacto 
              real en tu negocio. No hacemos tecnología por hacer, 
              hacemos tecnología que funciona.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 gap-8"
            >
              <div>
                <div className="font-display text-4xl font-bold text-gradient mb-2">+10</div>
                <div className="text-muted-foreground text-sm">Años de experiencia</div>
              </div>
              <div>
                <div className="font-display text-4xl font-bold text-gradient mb-2">100%</div>
                <div className="text-muted-foreground text-sm">Proyectos entregados</div>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Benefits Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl glass card-hover"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <benefit.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
