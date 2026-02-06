import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useContactInfo } from "@/hooks/useContactInfo";

export function CTA() {
  const { t } = useLanguage();
  const { whatsappHref } = useContactInfo();

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            {t.cta.title1}{" "}
            <span className="text-gradient">{t.cta.titleHighlight}</span>{" "}
            {t.cta.title2}
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            {t.cta.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contacto" className="gap-2">
                {t.cta.button1}
                <ArrowRight size={20} />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <a 
                href={whatsappHref} 
                target="_blank" 
                rel="noopener noreferrer"
                className="gap-2"
              >
                <MessageCircle size={20} />
                {t.cta.button2}
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
