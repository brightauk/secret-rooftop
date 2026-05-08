"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "../lib/locale-context";
import { translations } from "../lib/i18n";
import { events } from "../lib/analytics";
import { mobileMenu } from "../lib/animations";

export default function Navbar() {
  const { locale, setLocale, t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ["highlights", "gallery", "pricing", "location", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const navItems = [
    { label: t(translations.nav.highlights), href: "#highlights" },
    { label: t(translations.nav.gallery), href: "#gallery" },
    { label: t(translations.nav.rates), href: "#pricing" },
    { label: t(translations.nav.location), href: "#location" },
    { label: t(translations.nav.contact), href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-gray-100/80 shadow-[0_1px_20px_rgba(0,0,0,0.04)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
              scrolled ? "bg-charcoal" : "bg-white/15"
            }`}>
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <span className={`text-lg font-semibold transition-colors duration-300 ${scrolled ? "text-charcoal" : "text-white"}`}>
              Secret Rooftop
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative px-3 py-2 text-sm transition-colors rounded-lg ${
                    isActive
                      ? scrolled ? "text-charcoal font-medium" : "text-white font-medium"
                      : scrolled ? "text-gray-500 hover:text-charcoal hover:bg-gray-50" : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="navIndicator"
                      className="absolute bottom-0.5 left-1/2 -translate-x-1/2 h-0.5 w-4 rounded-full bg-terra"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={() => setLocale(locale === "th" ? "en" : "th")}
              className={`relative h-8 w-16 rounded-full transition-all duration-300 flex items-center p-1 ${
                scrolled ? "bg-gray-100 hover:bg-gray-200" : "bg-white/10 hover:bg-white/20"
              }`}
              title={locale === "th" ? "Switch to English" : "เปลี่ยนเป็นภาษาไทย"}
              aria-label={locale === "th" ? "Switch to English" : "เปลี่ยนเป็นภาษาไทย"}
            >
              <motion.span
                className="absolute top-1 h-6 w-6 rounded-full bg-white shadow-sm"
                animate={{ left: locale === "th" ? "4px" : "34px" }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              />
              <span className={`relative z-10 w-1/2 text-center text-[10px] font-bold tracking-wide transition-colors duration-200 ${
                locale === "th" ? "text-charcoal" : (scrolled ? "text-gray-300" : "text-white/30")
              }`}>TH</span>
              <span className={`relative z-10 w-1/2 text-center text-[10px] font-bold tracking-wide transition-colors duration-200 ${
                locale === "en" ? "text-charcoal" : (scrolled ? "text-gray-300" : "text-white/30")
              }`}>EN</span>
            </motion.button>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => events.bookNowClicked("navbar")}
              className={`hidden sm:inline-flex px-5 py-2 text-sm font-medium rounded-full transition-all ${
                scrolled
                  ? "bg-charcoal text-white hover:bg-gray-900"
                  : "bg-white text-charcoal hover:bg-gray-100"
              }`}
            >
              {t(translations.nav.bookNow)}
            </motion.a>

            <motion.button
              whileTap={{ scale: 0.9 }}
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
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            variants={mobileMenu}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100"
          >
            <div className="px-6 py-4 space-y-1">
              {navItems.map((item, i) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className={`block py-3 text-sm transition-colors ${
                      isActive ? "text-charcoal font-medium" : "text-gray-600 hover:text-charcoal"
                    }`}
                  >
                    {item.label}
                  </motion.a>
                );
              })}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                onClick={() => setMobileOpen(false)}
                className="block mt-3 text-center py-3 bg-charcoal text-white text-sm font-medium rounded-full"
              >
                {t(translations.nav.bookNow)}
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}