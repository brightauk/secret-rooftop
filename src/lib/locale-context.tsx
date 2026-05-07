"use client";

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";
import { Locale, t as translate } from "./i18n";

type LocaleContextType = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: <T extends { th: string; en: string }>(obj: T) => string;
};

const LocaleContext = createContext<LocaleContextType | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("th");
  const [mounted, setMounted] = useState(false);

  // Read stored locale after hydration to avoid mismatch
  useEffect(() => {
    try {
      const saved = localStorage.getItem("locale") as Locale | null;
      if (saved && (saved === "th" || saved === "en")) {
        setLocaleState(saved);
      }
    } catch {}
    setMounted(true);
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    try { localStorage.setItem("locale", l); } catch {}
  }, []);

  const t = useCallback(<T extends { th: string; en: string }>(obj: T): string => {
    return translate(obj, locale);
  }, [locale]);

  // Prevent hydration mismatch: render children only after mount
  // The server always renders with "th", so the first client render must also use "th"
  if (!mounted) {
    return (
      <LocaleContext.Provider value={{ locale: "th", setLocale, t: (obj) => obj.th }}>
        <div suppressHydrationWarning>{children}</div>
      </LocaleContext.Provider>
    );
  }

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}