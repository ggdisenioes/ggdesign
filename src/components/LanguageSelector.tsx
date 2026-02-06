import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, ChevronDown } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useContactInfo } from "@/hooks/useContactInfo";
import { Language, languageNames, languageFlags } from "@/i18n/translations";

const languages: Language[] = ["es", "en", "pt", "zh"];

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const { spanishFlag } = useContactInfo();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
        aria-label="Select language"
      >
        <Globe size={16} />
        <span className="hidden sm:inline">{language === "es" ? spanishFlag : languageFlags[language]}</span>
        <ChevronDown
          size={14}
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 py-2 w-40 rounded-xl glass border border-border shadow-lg z-50"
          >
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => {
                  setLanguage(lang);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-2 text-sm transition-colors ${
                  language === lang
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}
              >
                <span className="text-base">{lang === "es" ? spanishFlag : languageFlags[lang]}</span>
                <span>{languageNames[lang]}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
