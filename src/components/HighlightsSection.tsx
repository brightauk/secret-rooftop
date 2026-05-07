"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale } from "../lib/locale-context";
import { translations } from "../lib/i18n";

export default function HighlightsSection() {
  const { t } = useLocale();
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const items = translations.highlights.items;

  return (
    <section id="highlights" ref={sectionRef} className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Header - centered, minimal */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.2em] uppercase text-terra mb-3 font-medium">
            {t(translations.highlights.tag)}
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-charcoal mb-4 tracking-tight">
            {t(translations.highlights.title)}
          </h2>
          <p className="text-gray-400 text-base max-w-md mx-auto font-light">
            {t(translations.highlights.subtitle)}
          </p>
        </div>

        {/* Grid - 2x3 clean cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className={`p-6 rounded-2xl bg-off-white border border-gray-100 transition-all duration-500 hover:shadow-soft-lg hover:-translate-y-0.5 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: isVisible ? `${i * 80}ms` : "0ms" }}
            >
              <span className="text-2xl mb-4 block">{item.icon}</span>
              <h3 className="text-base font-semibold text-charcoal mb-2">
                {t(item.title)}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed font-light">
                {t(item.desc)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}