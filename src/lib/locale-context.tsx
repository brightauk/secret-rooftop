"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Locale, translations, t as translate } from "./i18n";

type LocaleContextType = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: <T extends { th: string; en: string }>(obj: T) => string;
};

const LocaleContext = createContext<LocaleContextType | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("th");

  const t = <T extends { th: string; en: string }>(obj: T): string => {
    return translate(obj, locale);
  };

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