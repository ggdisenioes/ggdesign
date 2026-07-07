import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
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

const serviceIcons = {
  web: Globe,
  ecommerce: ShoppingCart,
  ai: Cpu,
  automation: Zap,
  security: Shield,
  maintenance: Wrench,
};

export default function Servicios() {
  const { t } = useLanguage();
  const s = t.servicesPage;

  const services = [
    { id: "web" as const, data: s.services.web },
    { id: "ecommerce" as const, data: s.services.ecommerce },
    { id: "ai" as const, data: s.services.ai },
    { id: "automation" as const, data: s.services.automation },
    { id: "security" as const, data: s.services.security },
    { id: "maintenance" as const, data: s.services.maintenance },
  ];

  return (
    <Layout>
      <Seo title={t.seo.services.title} description={t.seo.services.description} />
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
              {s.sectionLabel}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            >
              {s.title}{" "}
              <span className="text-gradient">{s.titleHighlight}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg"
            >
              {s.subtitle}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => {
              const Icon = serviceIcons[service.id];
              return (
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
                        <Icon size={28} className="text-primary-foreground" />
                      </div>
                      <div>
                        <span className="text-primary text-sm font-medium">
                          {service.data.subtitle}
                        </span>
                        <h2 className="font-display text-2xl sm:text-3xl font-bold">
                          {service.data.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-lg mb-8">
                      {service.data.description}
                    </p>

                    {/* Problem → Benefit → Result */}
                    <div className="space-y-4 mb-8">
                      <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
                        <span className="text-xs font-medium text-destructive uppercase tracking-wider">{s.problem}</span>
                        <p className="text-foreground text-sm mt-1">{service.data.problem}</p>
                      </div>
                      <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                        <span className="text-xs font-medium text-primary uppercase tracking-wider">{s.benefit}</span>
                        <p className="text-foreground text-sm mt-1">{service.data.benefit}</p>
                      </div>
                      <div className="p-4 rounded-lg bg-accent/20 border border-accent/30">
                        <span className="text-xs font-medium text-accent uppercase tracking-wider">{s.result}</span>
                        <p className="text-foreground text-sm mt-1">{service.data.result}</p>
                      </div>
                    </div>

                    <Button variant="hero" asChild>
                      <Link to="/contacto" className="gap-2">
                        {s.requestInfo}
                        <ArrowRight size={16} />
                      </Link>
                    </Button>
                  </div>

                  {/* Features Card */}
                  <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="p-8 rounded-2xl glass">
                      <h3 className="font-display font-semibold text-lg mb-6">
                        {s.whatIncludes}
                      </h3>
                      <ul className="space-y-4">
                        {service.data.features.map((feature) => (
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
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-card" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
              {s.ctaTitle}
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              {s.ctaSubtitle}
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contacto" className="gap-2">
                {s.ctaButton}
                <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
