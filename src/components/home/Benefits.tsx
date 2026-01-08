import { motion } from "framer-motion";
import { TrendingUp, ShieldCheck, Clock, BarChart } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export function Benefits() {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: TrendingUp,
      title: t.benefits.benefit1Title,
      description: t.benefits.benefit1Desc,
    },
    {
      icon: ShieldCheck,
      title: t.benefits.benefit2Title,
      description: t.benefits.benefit2Desc,
    },
    {
      icon: Clock,
      title: t.benefits.benefit3Title,
      description: t.benefits.benefit3Desc,
    },
    {
      icon: BarChart,
      title: t.benefits.benefit4Title,
      description: t.benefits.benefit4Desc,
    },
  ];

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
              {t.benefits.sectionLabel}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
            >
              {t.benefits.title}{" "}
              <span className="text-gradient">{t.benefits.titleHighlight}</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg mb-8"
            >
              {t.benefits.subtitle}
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
                <div className="font-display text-4xl font-bold text-gradient mb-2">{t.benefits.stat1Value}</div>
                <div className="text-muted-foreground text-sm">{t.benefits.stat1Label}</div>
              </div>
              <div>
                <div className="font-display text-4xl font-bold text-gradient mb-2">{t.benefits.stat2Value}</div>
                <div className="text-muted-foreground text-sm">{t.benefits.stat2Label}</div>
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
