/**
 * Returns region-aware contact details.
 * Argentina gets local WhatsApp number, .com.ar email, and 🇦🇷 flag.
 * All other regions get Spanish defaults.
 */

import { useLanguage } from "@/i18n/LanguageContext";

interface ContactInfo {
  email: string;
  emailHref: string;
  whatsapp: string;
  whatsappHref: string;
  spanishFlag: string;
}

export function useContactInfo(): ContactInfo {
  const { country } = useLanguage();
  const isArgentina = country === "AR";

  return {
    email: isArgentina ? "consultas@ggdisenio.com.ar" : "info@ggdisenio.es",
    emailHref: isArgentina ? "mailto:consultas@ggdisenio.com.ar" : "mailto:info@ggdisenio.es",
    whatsapp: isArgentina ? "+54 9 11 3838 9787" : "+34 652 63 84 07",
    whatsappHref: isArgentina ? "https://wa.me/5491138389787" : "https://wa.me/34652638407",
    spanishFlag: isArgentina ? "🇦🇷" : "🇪🇸",
  };
}
