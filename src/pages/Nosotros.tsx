import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { ArrowRight, Award, Users, Target, Lightbulb, MapPin, Clock, Shield } from "lucide-react";

const valueIcons = {
  results: Target,
  direct: Users,
  innovation: Lightbulb,
  security: Shield,
};

export default function Nosotros() {
  const { t } = useLanguage();
  const a = t.aboutPage;

  const values = [
    { id: "results" as const, data: a.values.results },
    { id: "direct" as const, data: a.values.direct },
    { id: "innovation" as const, data: a.values.innovation },
    { id: "security" as const, data: a.values.security },
  ];

  const timeline = [
    { year: "2014", data: a.timeline.t2014 },
    { year: "2017", data: a.timeline.t2017 },
    { year: "2020", data: a.timeline.t2020 },
    { year: "2023", data: a.timeline.t2023 },
    { year: "2026", data: a.timeline.t2026 },
  ];

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
              {a.sectionLabel}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            >
              {a.title}{" "}
              <span className="text-gradient">{a.titleHighlight}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg"
            >
              {a.subtitle}
            </motion.p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <span className="text-primary text-sm font-medium">{a.aboutLabel}</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-2 mb-6">
              {a.companyName}
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>{a.description1}</p>
              <p>{a.description2}</p>
              <p>{a.description3}</p>
            </div>

            <div className="flex items-center gap-6 mt-8">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin size={16} className="text-primary" />
                <span className="text-sm">{a.location}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock size={16} className="text-primary" />
                <span className="text-sm">{a.availability}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Award size={16} className="text-primary" />
                <span className="text-sm">{a.experience}</span>
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
              {a.howWeWork}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              {a.howWeWorkSubtitle}
            </motion.p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = valueIcons[value.id];
              return (
                <motion.div
                  key={value.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl glass card-hover text-center"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon size={28} className="text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-3">
                    {value.data.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.data.description}
                  </p>
                </motion.div>
              );
            })}
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
              {a.evolution}
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
                      {item.data.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {item.data.description}
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
              {a.ctaTitle}
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              {a.ctaSubtitle}
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contacto" className="gap-2">
                {a.ctaButton}
                <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
