import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/i18n/LanguageContext";
import { Mail, MapPin, MessageCircle, Send, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

export default function Contacto() {
  const { toast } = useToast();
  const { t } = useLanguage();
  const c = t.contactPage;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [acceptPrivacy, setAcceptPrivacy] = useState(false);
  const [acceptCommercial, setAcceptCommercial] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const contactInfo = [
    {
      icon: Mail,
      label: c.emailLabel,
      value: "hola@ggdiseno.com",
      href: "mailto:hola@ggdiseno.com",
    },
    {
      icon: MessageCircle,
      label: c.whatsappLabel,
      value: "+34 600 000 000",
      href: "https://wa.me/34600000000",
    },
    {
      icon: MapPin,
      label: c.locationLabel,
      value: "Madrid, España",
      href: null,
    },
    {
      icon: Clock,
      label: c.responseLabel,
      value: c.responseValue,
      href: null,
    },
  ];

  const faqs = [
    { q: c.faqs.q1, a: c.faqs.a1 },
    { q: c.faqs.q2, a: c.faqs.a2 },
    { q: c.faqs.q3, a: c.faqs.a3 },
    { q: c.faqs.q4, a: c.faqs.a4 },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!acceptPrivacy) {
      toast({
        title: c.consentRequired,
        description: c.consentRequiredMessage,
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("leads").insert({
        name: formData.name.trim(),
        email: formData.email.trim(),
        company: formData.company.trim() || null,
        message: formData.message.trim(),
        accept_commercial: acceptCommercial,
      });

      if (error) throw error;

      toast({
        title: c.successTitle,
        description: c.successMessage,
      });

      setFormData({ name: "", email: "", company: "", message: "" });
      setAcceptPrivacy(false);
      setAcceptCommercial(false);
    } catch (error) {
      console.error("Error submitting lead:", error);
      toast({
        title: "Error",
        description: "Hubo un problema al enviar el formulario. Por favor, inténtalo de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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
              {c.sectionLabel}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            >
              {c.title}{" "}
              <span className="text-gradient">{c.titleHighlight}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg"
            >
              {c.subtitle}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="p-8 sm:p-10 rounded-2xl glass">
                <h2 className="font-display text-2xl font-bold mb-2">
                  {c.formTitle}
                </h2>
                <p className="text-muted-foreground mb-8">
                  {c.formSubtitle}
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">{c.name} *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder={c.namePlaceholder}
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-secondary/50 border-border focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{c.email} *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder={c.emailPlaceholder}
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-secondary/50 border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">{c.company}</Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder={c.companyPlaceholder}
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-secondary/50 border-border focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">{c.message} *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder={c.messagePlaceholder}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="bg-secondary/50 border-border focus:border-primary resize-none"
                    />
                  </div>

                  {/* Privacy Consent */}
                  <div className="space-y-4 p-4 rounded-lg bg-secondary/30 border border-border">
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="privacy"
                        checked={acceptPrivacy}
                        onCheckedChange={(checked) => setAcceptPrivacy(checked === true)}
                        className="mt-1"
                      />
                      <div className="grid gap-1.5 leading-none">
                        <label
                          htmlFor="privacy"
                          className="text-sm text-muted-foreground cursor-pointer leading-relaxed"
                        >
                          {c.privacyConsent}{" "}
                          <Link to="/privacidad" className="text-primary hover:underline">
                            {c.privacyPolicy}
                          </Link>{" "}
                          {c.privacyConsentEnd} <span className="text-primary">*</span>
                        </label>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="commercial"
                        checked={acceptCommercial}
                        onCheckedChange={(checked) => setAcceptCommercial(checked === true)}
                        className="mt-1"
                      />
                      <div className="grid gap-1.5 leading-none">
                        <label
                          htmlFor="commercial"
                          className="text-sm text-muted-foreground cursor-pointer leading-relaxed"
                        >
                          {c.commercialConsent}
                        </label>
                      </div>
                    </div>

                    <p className="text-xs text-muted-foreground">
                      <span className="text-primary">*</span> {c.required}{" "}
                      {c.responsible}{" "}
                      <Link to="/privacidad" className="text-primary hover:underline">
                        {c.privacyPolicy}
                      </Link>.
                    </p>
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full sm:w-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      c.submitting
                    ) : (
                      <>
                        {c.submit}
                        <Send size={16} className="ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-2"
            >
              <h2 className="font-display text-2xl font-bold mb-8">
                {c.otherWays}
              </h2>

              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 p-4 rounded-xl glass"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon size={24} className="text-primary" />
                    </div>
                    <div>
                      <span className="text-muted-foreground text-sm">
                        {item.label}
                      </span>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="block font-medium text-foreground hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium text-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <div className="mt-8 p-6 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
                <h3 className="font-display font-semibold text-lg mb-3">
                  {c.preferWhatsapp}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {c.preferWhatsappDesc}
                </p>
                <Button variant="outline" asChild className="w-full">
                  <a
                    href="https://wa.me/34600000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gap-2"
                  >
                    <MessageCircle size={20} />
                    {c.openWhatsapp}
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-card" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-center mb-12">
              {c.faq}
            </h2>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl glass"
                >
                  <h3 className="font-display font-semibold text-foreground mb-3">
                    {faq.q}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
