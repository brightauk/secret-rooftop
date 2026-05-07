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
            {/* Language toggle switch */}
            <button
              onClick={() => setLocale(locale === "th" ? "en" : "th")}
              className={`relative h-8 w-16 rounded-full transition-all duration-300 flex items-center p-1 ${
                scrolled
                  ? "bg-gray-100 hover:bg-gray-200"
                  : "bg-white/10 hover:bg-white/20"
              }`}
              title={locale === "th" ? "Switch to English" : "เปลี่ยนเป็นภาษาไทย"}
              aria-label={locale === "th" ? "Switch to English" : "เปลี่ยนเป็นภาษาไทย"}
            >
              {/* Sliding pill */}
              <span
                className={`absolute top-1 h-6 w-6 rounded-full transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                  scrolled ? "bg-white shadow-sm" : "bg-white shadow-sm"
                } ${locale === "th" ? "left-1" : "left-[34px]"}`}
              />
              {/* TH */}
              <span className={`relative z-10 w-1/2 text-center text-[10px] font-bold tracking-wide transition-colors duration-200 ${
                locale === "th"
                  ? "text-charcoal"
                  : (scrolled ? "text-gray-300" : "text-white/30")
              }`}>TH</span>
              {/* EN */}
              <span className={`relative z-10 w-1/2 text-center text-[10px] font-bold tracking-wide transition-colors duration-200 ${
                locale === "en"
                  ? "text-charcoal"
                  : (scrolled ? "text-gray-300" : "text-white/30")
              }`}>EN</span>
            </button>

            {/* Book CTA */}
            <a
              href="#contact"
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
              href="#contact"
              onClick={() => setMobileOpen(false)}
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