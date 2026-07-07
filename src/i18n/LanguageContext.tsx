import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Language, translations, TranslationType } from "./translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationType;
  country: string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const fallbackContext: LanguageContextType = {
  language: "es",
  setLanguage: () => {},
  t: translations.es as unknown as TranslationType,
  country: "",
};

// Map country codes to languages
const countryToLanguage: Record<string, Language> = {
  // Spanish
  ES: "es",
  MX: "es",
  AR: "es",
  CO: "es",
  PE: "es",
  CL: "es",
  VE: "es",
  EC: "es",
  GT: "es",
  CU: "es",
  BO: "es",
  DO: "es",
  HN: "es",
  PY: "es",
  SV: "es",
  NI: "es",
  CR: "es",
  PA: "es",
  UY: "es",
  PR: "es",
  // Portuguese
  BR: "pt",
  PT: "pt",
  AO: "pt",
  MZ: "pt",
  // Chinese
  CN: "zh",
  TW: "zh",
  HK: "zh",
  SG: "zh",
  // English (default for all others)
};

async function detectGeoInfo(): Promise<{ language: Language; country: string }> {
  try {
    const response = await fetch("https://ipapi.co/json/", {
      signal: AbortSignal.timeout(3000),
    });
    
    if (!response.ok) throw new Error("Geolocation failed");
    
    const data = await response.json();
    const countryCode = data.country_code || "";
    
    return {
      language: countryToLanguage[countryCode] || "en",
      country: countryCode,
    };
  } catch {
    const browserLang = navigator.language.split("-")[0];
    const langMap: Record<string, Language> = {
      es: "es",
      en: "en",
      pt: "pt",
      zh: "zh",
    };
    return { language: langMap[browserLang] || "en", country: "" };
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("gg-language");
    if (saved && (saved === "es" || saved === "en" || saved === "pt" || saved === "zh")) {
      return saved as Language;
    }
    return "es";
  });

  const [country, setCountry] = useState<string>("");
  
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("gg-language");
    const cachedCountry = localStorage.getItem("gg-country");
    if (cachedCountry) setCountry(cachedCountry);

    // Skip the external geolocation request when we already know both
    // the visitor's language and country from a previous visit.
    if (saved && cachedCountry) {
      setIsInitialized(true);
      return;
    }

    const init = async () => {
      const geo = await detectGeoInfo();
      setCountry(geo.country);
      localStorage.setItem("gg-country", geo.country);

      if (!saved) {
        setLanguageState(geo.language);
        localStorage.setItem("gg-language", geo.language);
      }

      setIsInitialized(true);
    };

    init();
  }, []);

  // Keep the document language in sync for accessibility and SEO
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("gg-language", lang);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, country }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    // Avoid blank screens if a component is ever rendered outside the provider.
    if (import.meta.env.DEV) {
      console.warn("useLanguage was used outside LanguageProvider. Falling back to default language.");
    }
    return fallbackContext;
  }
  return context;
}
