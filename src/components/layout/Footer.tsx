import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

const footerLinks = {
  servicios: [
    { label: "Desarrollo Web", href: "/servicios#web" },
    { label: "Inteligencia Artificial", href: "/servicios#ia" },
    { label: "Automatizaciones", href: "/servicios#automatizacion" },
    { label: "Ciberseguridad", href: "/servicios#seguridad" },
  ],
  empresa: [
    { label: "Nosotros", href: "/nosotros" },
    { label: "Proyectos", href: "/proyectos" },
    { label: "Contacto", href: "/contacto" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center font-display font-bold text-primary-foreground text-lg">
                GG
              </div>
              <span className="font-display font-semibold text-xl text-foreground">
                Diseño
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Agencia boutique tecnológica. Soluciones web inteligentes, automatizadas y seguras para negocios en España y Europa.
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
            <h4 className="font-display font-semibold text-foreground mb-6">Servicios</h4>
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
            <h4 className="font-display font-semibold text-foreground mb-6">Empresa</h4>
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
            <h4 className="font-display font-semibold text-foreground mb-6">¿Hablamos?</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Contanos tu proyecto y veamos cómo la tecnología puede ayudarte a crecer.
            </p>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:underline"
            >
              Solicitar presupuesto
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} GG Diseño. Todos los derechos reservados.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <Link to="/privacidad" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacidad
            </Link>
            <Link to="/cookies" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Cookies
            </Link>
            <Link to="/legal" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Aviso Legal
            </Link>
            <button 
              onClick={() => {
                localStorage.removeItem("gg-cookie-consent");
                window.location.reload();
              }}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Configurar cookies
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
