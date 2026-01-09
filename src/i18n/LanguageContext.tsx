import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Language, translations, TranslationType } from "./translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationType;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const fallbackContext: LanguageContextType = {
  language: "es",
  setLanguage: () => {},
  t: translations.es as unknown as TranslationType,
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

async function detectLanguageByGeolocation(): Promise<Language> {
  try {
    // Use a free IP geolocation API
    const response = await fetch("https://ipapi.co/json/", {
      signal: AbortSignal.timeout(3000),
    });
    
    if (!response.ok) throw new Error("Geolocation failed");
    
    const data = await response.json();
    const countryCode = data.country_code;
    
    return countryToLanguage[countryCode] || "en";
  } catch {
    // Fallback to browser language preference
    const browserLang = navigator.language.split("-")[0];
    const langMap: Record<string, Language> = {
      es: "es",
      en: "en",
      pt: "pt",
      zh: "zh",
    };
    return langMap[browserLang] || "en";
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    // Check localStorage first
    const saved = localStorage.getItem("gg-language");
    if (saved && (saved === "es" || saved === "en" || saved === "pt" || saved === "zh")) {
      return saved as Language;
    }
    return "es"; // Default to Spanish initially
  });
  
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const initLanguage = async () => {
      const saved = localStorage.getItem("gg-language");
      
      // Only detect by geolocation if no saved preference
      if (!saved) {
        const detected = await detectLanguageByGeolocation();
        setLanguageState(detected);
        localStorage.setItem("gg-language", detected);
      }
      
      setIsInitialized(true);
    };

    initLanguage();
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("gg-language", lang);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
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
