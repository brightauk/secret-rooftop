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
    <section id="highlights" ref={sectionRef} className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.25em] uppercase text-terra mb-3 font-medium">
            {t(translations.highlights.tag)}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-charcoal mb-4 tracking-tight">
            {t(translations.highlights.title)}
          </h2>
          <div className="section-divider mb-4" />
          <p className="text-gray-400 text-base max-w-md mx-auto font-light">
            {t(translations.highlights.subtitle)}
          </p>
        </div>

        {/* Grid - premium cards with stagger reveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className={`group p-8 rounded-2xl bg-off-white border border-gray-100/80 card-hover cursor-default ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionProperty: "opacity, transform, box-shadow",
                transitionDuration: "600ms, 600ms, 400ms",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                transitionDelay: isVisible ? `${i * 100}ms` : "0ms",
              }}
            >
              <span className="text-3xl mb-5 block group-hover:scale-110 inline-block transition-transform duration-300">
                {item.icon}
              </span>
              <h3 className="text-base font-semibold text-charcoal mb-2.5">
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