import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import logo from "@/assets/logo.png";

export function Footer() {
  const { t } = useLanguage();

  const footerLinks = {
    servicios: [
      { label: t.footer.webDev, href: "/servicios#web" },
      { label: t.footer.ai, href: "/servicios#ia" },
      { label: t.footer.automation, href: "/servicios#automatizacion" },
      { label: t.footer.security, href: "/servicios#seguridad" },
    ],
    empresa: [
      { label: t.footer.aboutUs, href: "/nosotros" },
      { label: t.footer.projects, href: "/proyectos" },
      { label: t.footer.contact, href: "/contacto" },
    ],
  };

  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img 
                src={logo} 
                alt="GG Diseño" 
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              {t.footer.description}
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin size={16} className="text-primary" />
                <span>Madrid, España</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail size={16} className="text-primary" />
                <a href="mailto:hola@ggdiseno.com" className="hover:text-primary transition-colors">
                  hola@ggdiseno.com
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-6">{t.footer.services}</h4>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-6">{t.footer.company}</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-6">{t.footer.talkTitle}</h4>
            <p className="text-sm text-muted-foreground mb-4">
              {t.footer.talkDescription}
            </p>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:underline"
            >
              {t.footer.requestQuote}
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} GG Diseño. {t.footer.copyright}
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <Link to="/privacidad" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {t.footer.privacy}
            </Link>
            <Link to="/cookies" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {t.footer.cookies}
            </Link>
            <Link to="/legal" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {t.footer.legal}
            </Link>
            <button 
              onClick={() => {
                localStorage.removeItem("gg-cookie-consent");
                window.location.reload();
              }}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {t.footer.configureCookies}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
