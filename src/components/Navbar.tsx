"use client";

import { useState, useEffect } from "react";
import { useLocale } from "../lib/locale-context";
import { translations } from "../lib/i18n";

export default function Navbar() {
  const { locale, setLocale, t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: t(translations.nav.highlights), href: "#highlights" },
    { label: t(translations.nav.gallery), href: "#gallery" },
    { label: t(translations.nav.rates), href: "#pricing" },
    { label: t(translations.nav.location), href: "#location" },
    { label: t(translations.nav.contact), href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span className={`text-lg font-semibold tracking-tight ${scrolled ? "text-charcoal" : "text-white"}`}>
              Secret Rooftop
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm transition-colors ${
                  scrolled
                    ? "text-gray-500 hover:text-charcoal"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Language toggle */}
            <button
              onClick={() => setLocale(locale === "th" ? "en" : "th")}
              className={`w-8 h-8 rounded-full text-xs font-medium transition-all flex items-center justify-center ${
                scrolled
                  ? "text-gray-500 hover:text-charcoal border border-gray-200"
                  : "text-white/70 hover:text-white border border-white/20"
              }`}
            >
              {locale === "th" ? "EN" : "TH"}
            </button>

            {/* Book CTA */}
            <a
              href="https://line.me/R/ti/p/@brightauk"
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden sm:inline-flex px-5 py-2 text-sm font-medium rounded-full transition-all ${
                scrolled
                  ? "bg-charcoal text-white hover:bg-gray-900"
                  : "bg-white text-charcoal hover:bg-gray-100"
              }`}
            >
              {t(translations.nav.bookNow)}
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden w-9 h-9 flex items-center justify-center transition-colors ${
                scrolled ? "text-charcoal" : "text-white"
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-6 py-4 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-sm text-gray-600 hover:text-charcoal transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://line.me/R/ti/p/@brightauk"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-3 text-center py-3 bg-charcoal text-white text-sm font-medium rounded-full"
            >
              {t(translations.nav.bookNow)}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}