"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale } from "../lib/locale-context";
import { translations } from "../lib/i18n";

const packages = [
  { ...translations.pricing.halfDay, price: "5,000", highlight: false, ctaKey: "bookLine" as const },
  { ...translations.pricing.fullDay, price: "8,000", highlight: true, ctaKey: "bookLine" as const },
  { ...translations.pricing.event, price: null, highlight: false, ctaKey: "getQuote" as const },
];

export default function PricingSection() {
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

  return (
    <section id="pricing" ref={sectionRef} className="py-24 md:py-32 bg-off-white">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.2em] uppercase text-terra mb-3 font-medium">
            {t(translations.pricing.tag)}
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-charcoal mb-4 tracking-tight">
            {t(translations.pricing.title)}
          </h2>
          <p className="text-gray-400 text-base max-w-md mx-auto font-light">
            {t(translations.pricing.subtitle)}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 transition-all duration-500 ${
                pkg.highlight
                  ? "bg-charcoal text-white shadow-soft-lg"
                  : "bg-white border border-gray-100"
              } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: isVisible ? `${index * 100}ms` : "0ms" }}
            >
              {pkg.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-terra text-white text-[10px] font-semibold tracking-wider uppercase rounded-full">
                  {t(translations.pricing.popular)}
                </span>
              )}

              <div className="text-center mb-6">
                <h3 className={`text-lg font-semibold mb-1 ${pkg.highlight ? "text-white" : "text-charcoal"}`}>
                  {t(pkg.name)}
                </h3>
                <span className={`text-xs ${pkg.highlight ? "text-white/50" : "text-gray-400"}`}>
                  {t(pkg.duration)}
                </span>
              </div>

              <div className="text-center mb-6">
                {pkg.price ? (
                  <div className="flex items-baseline justify-center gap-1">
                    <span className={`text-4xl font-bold ${pkg.highlight ? "text-terra-light" : "text-charcoal"}`}>
                      {pkg.price}
                    </span>
                    <span className={`text-sm ${pkg.highlight ? "text-white/50" : "text-gray-400"}`}>THB</span>
                  </div>
                ) : (
                  <span className={`text-2xl font-semibold ${pkg.highlight ? "text-terra-light" : "text-terra"}`}>
                    {t(translations.pricing.getQuote)}
                  </span>
                )}
              </div>

              <p className={`text-sm text-center mb-6 leading-relaxed font-light ${pkg.highlight ? "text-white/60" : "text-gray-400"}`}>
                {t(pkg.desc)}
              </p>

              <ul className="space-y-2.5 mb-8">
                {pkg.features.map((feat, i) => (
                  <li key={i} className={`flex items-start gap-2.5 text-sm ${pkg.highlight ? "text-white/70" : "text-gray-500"}`}>
                    <svg className={`w-4 h-4 mt-0.5 flex-shrink-0 ${pkg.highlight ? "text-terra-light" : "text-terra"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {t(feat)}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block w-full text-center py-3 rounded-full text-sm font-medium transition-all ${
                  pkg.highlight
                    ? "bg-white text-charcoal hover:bg-gray-100"
                    : "bg-charcoal text-white hover:bg-gray-800"
                }`}
              >
                {t(translations.pricing[pkg.ctaKey])}
              </a>

              <a
                href="https://fastwork.co/user/brightauk/studio-rental-10056485"
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center mt-3 text-xs transition-colors ${
                  pkg.highlight ? "text-white/30 hover:text-white/60" : "text-gray-300 hover:text-terra"
                }`}
              >
                {t(translations.pricing.orFastwork)}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center mt-10 text-gray-300 text-xs font-light">
          {t(translations.pricing.note)}
        </p>
      </div>
    </section>
  );
}