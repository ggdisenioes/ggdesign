import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Cookie, Settings, X } from "lucide-react";

const COOKIE_CONSENT_KEY = "gg-cookie-consent";

type CookiePreferences = {
  necessary: boolean;
  analytics: boolean;
  functional: boolean;
};

const defaultPreferences: CookiePreferences = {
  necessary: true,
  analytics: false,
  functional: false,
};

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Small delay to prevent jarring appearance
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const saveConsent = (prefs: CookiePreferences) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(prefs));
    setIsVisible(false);
  };

  const acceptAll = () => {
    saveConsent({ necessary: true, analytics: true, functional: true });
  };

  const acceptNecessary = () => {
    saveConsent({ necessary: true, analytics: false, functional: false });
  };

  const savePreferences = () => {
    saveConsent(preferences);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6"
      >
        <div className="container mx-auto max-w-4xl">
          <div className="rounded-2xl bg-card border border-border shadow-2xl overflow-hidden">
            {!showSettings ? (
              // Main banner
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Cookie className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-foreground mb-2">
                      Utilizamos cookies
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      Usamos cookies para mejorar tu experiencia en nuestro sitio web, analizar 
                      el tráfico y personalizar el contenido. Al hacer clic en "Aceptar todas", 
                      aceptas el uso de todas las cookies. Puedes gestionar tus preferencias 
                      haciendo clic en "Configurar".{" "}
                      <Link to="/cookies" className="text-primary hover:underline">
                        Más información
                      </Link>
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Button variant="hero" size="sm" onClick={acceptAll}>
                        Aceptar todas
                      </Button>
                      <Button variant="outline" size="sm" onClick={acceptNecessary}>
                        Solo necesarias
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => setShowSettings(true)}
                        className="gap-2"
                      >
                        <Settings size={16} />
                        Configurar
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              // Settings panel
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-display font-semibold text-foreground">
                    Configurar cookies
                  </h3>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setShowSettings(false)}
                  >
                    <X size={20} />
                  </Button>
                </div>

                <div className="space-y-4 mb-6">
                  {/* Necessary */}
                  <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/50">
                    <div>
                      <p className="font-medium text-foreground">Cookies necesarias</p>
                      <p className="text-sm text-muted-foreground">
                        Esenciales para el funcionamiento del sitio. No se pueden desactivar.
                      </p>
                    </div>
                    <div className="w-12 h-6 rounded-full bg-primary flex items-center justify-end px-1">
                      <div className="w-4 h-4 rounded-full bg-primary-foreground" />
                    </div>
                  </div>

                  {/* Analytics */}
                  <label className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 cursor-pointer">
                    <div>
                      <p className="font-medium text-foreground">Cookies de análisis</p>
                      <p className="text-sm text-muted-foreground">
                        Nos ayudan a entender cómo usas el sitio para mejorarlo.
                      </p>
                    </div>
                    <button
                      onClick={() => setPreferences(p => ({ ...p, analytics: !p.analytics }))}
                      className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                        preferences.analytics ? "bg-primary justify-end" : "bg-muted justify-start"
                      }`}
                    >
                      <div className="w-4 h-4 rounded-full bg-foreground" />
                    </button>
                  </label>

                  {/* Functional */}
                  <label className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 cursor-pointer">
                    <div>
                      <p className="font-medium text-foreground">Cookies funcionales</p>
                      <p className="text-sm text-muted-foreground">
                        Recuerdan tus preferencias como el idioma o la región.
                      </p>
                    </div>
                    <button
                      onClick={() => setPreferences(p => ({ ...p, functional: !p.functional }))}
                      className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                        preferences.functional ? "bg-primary justify-end" : "bg-muted justify-start"
                      }`}
                    >
                      <div className="w-4 h-4 rounded-full bg-foreground" />
                    </button>
                  </label>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button variant="hero" size="sm" onClick={savePreferences}>
                    Guardar preferencias
                  </Button>
                  <Button variant="outline" size="sm" onClick={acceptAll}>
                    Aceptar todas
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

// Export function to reset consent (for the footer button)
export function resetCookieConsent() {
  localStorage.removeItem(COOKIE_CONSENT_KEY);
  window.location.reload();
}
