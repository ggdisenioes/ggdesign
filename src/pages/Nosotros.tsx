import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Users, Target, Lightbulb, MapPin, Clock, Shield } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Orientación a resultados",
    description: "No hacemos tecnología por hacer. Cada solución está diseñada para generar impacto real en tu negocio.",
  },
  {
    icon: Users,
    title: "Trato directo",
    description: "Sin intermediarios ni grandes estructuras. Hablas directamente con quien diseña y desarrolla tu proyecto.",
  },
  {
    icon: Lightbulb,
    title: "Innovación práctica",
    description: "Aplicamos las últimas tecnologías cuando realmente aportan valor, no por moda o tendencia.",
  },
  {
    icon: Shield,
    title: "Seguridad integrada",
    description: "La seguridad no es un añadido, es parte fundamental de cada línea de código que escribimos.",
  },
];

const timeline = [
  {
    year: "2014",
    title: "Primeros pasos",
    description: "Inicio en desarrollo web y diseño digital trabajando con clientes locales.",
  },
  {
    year: "2017",
    title: "Especialización",
    description: "Enfoque en desarrollo frontend avanzado y experiencias de usuario.",
  },
  {
    year: "2020",
    title: "Automatización e IA",
    description: "Incorporación de automatizaciones y primeras integraciones con inteligencia artificial.",
  },
  {
    year: "2023",
    title: "GG Diseño",
    description: "Consolidación como agencia boutique tecnológica con foco en IA, automatización y seguridad.",
  },
];

export default function Nosotros() {
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
              Sobre nosotros
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            >
              Tecnología con{" "}
              <span className="text-gradient">propósito</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg"
            >
              Somos una agencia boutique que combina experiencia técnica 
              con visión estratégica para crear soluciones que realmente funcionan.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl glass overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-primary flex items-center justify-center font-display font-bold text-primary-foreground text-4xl">
                    GG
                  </div>
                </div>
              </div>
              {/* Floating badges */}
              <div className="absolute -bottom-4 -right-4 px-6 py-3 rounded-xl glass">
                <div className="flex items-center gap-3">
                  <Award className="text-primary" size={20} />
                  <span className="font-display font-semibold">+10 años</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="text-primary text-sm font-medium">Fundador</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mt-2 mb-6">
                Gustavo Giannini
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Con más de una década de experiencia en desarrollo web y tecnología digital, 
                  fundé GG Diseño con una visión clara: crear soluciones tecnológicas que 
                  realmente funcionen para los negocios.
                </p>
                <p>
                  A lo largo de mi carrera he trabajado con empresas de todos los tamaños, 
                  desde startups hasta corporaciones, aprendiendo que lo más importante 
                  no es la tecnología en sí, sino cómo esta puede resolver problemas 
                  reales y generar valor.
                </p>
                <p>
                  Hoy, GG Diseño combina esa experiencia con las últimas innovaciones 
                  en inteligencia artificial, automatización y seguridad web para 
                  ofrecer soluciones completas y de alto impacto.
                </p>
              </div>

              <div className="flex items-center gap-6 mt-8">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin size={16} className="text-primary" />
                  <span className="text-sm">Madrid, España</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock size={16} className="text-primary" />
                  <span className="text-sm">Disponibilidad flexible</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-card" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl sm:text-4xl font-bold mb-6"
            >
              Cómo trabajamos
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              Principios que guían cada proyecto y cada decisión.
            </motion.p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl glass card-hover text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon size={28} className="text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl sm:text-4xl font-bold mb-6"
            >
              Nuestra evolución
            </motion.h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-border" />
              
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-20 pb-12 last:pb-0"
                >
                  {/* Year badge */}
                  <div className="absolute left-0 w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center font-display font-bold text-primary-foreground text-sm">
                    {item.year}
                  </div>
                  
                  <div className="pt-4">
                    <h3 className="font-display font-semibold text-xl text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-card" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
              ¿Trabajamos juntos?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Si buscas un socio tecnológico que entienda tu negocio 
              y te ayude a crecer, hablemos.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contacto" className="gap-2">
                Empezar conversación
                <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
