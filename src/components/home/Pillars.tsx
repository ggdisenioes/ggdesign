import { motion } from "framer-motion";
import { Cpu, Zap, Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

export function Pillars() {
  const { t } = useLanguage();

  const pillars = [
    {
      icon: Cpu,
      title: t.pillars.ai.title,
      description: t.pillars.ai.description,
      features: [
        t.pillars.ai.feature1,
        t.pillars.ai.feature2,
        t.pillars.ai.feature3,
      ],
      href: "/servicios#ia",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      icon: Zap,
      title: t.pillars.automation.title,
      description: t.pillars.automation.description,
      features: [
        t.pillars.automation.feature1,
        t.pillars.automation.feature2,
        t.pillars.automation.feature3,
      ],
      href: "/servicios#automatizacion",
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      icon: Shield,
      title: t.pillars.security.title,
      description: t.pillars.security.description,
      features: [
        t.pillars.security.feature1,
        t.pillars.security.feature2,
        t.pillars.security.feature3,
      ],
      href: "/servicios#seguridad",
      gradient: "from-indigo-500 to-purple-500",
    },
  ];

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
            {t.pillars.sectionLabel}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
          >
            {t.pillars.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            {t.pillars.subtitle}
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
                  {t.pillars.learnMore}
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
