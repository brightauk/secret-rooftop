"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useLocale } from "../lib/locale-context";
import { translations } from "../lib/i18n";

interface Package {
  name: { th: string; en: string };
  duration: { th: string; en: string };
  desc: { th: string; en: string };
  features: readonly { th: string; en: string }[];
  price: string | null;
  highlight: boolean;
  ctaKey: "bookLine" | "getQuote";
  badge?: { th: string; en: string } | null;
  priceSuffix?: { th: string; en: string } | null;
}

// Sorted: cheapest → most expensive
const allPackages: Package[] = [
  { ...translations.pricing.hourlyShoot, price: "1,500", highlight: false, ctaKey: "bookLine", badge: { th: "รายชั่วโมง", en: "Hourly" }, priceSuffix: { th: "THB/ชม.", en: "THB/hr" } },
  { ...translations.pricing.hourlyProduction, price: "2,000", highlight: false, ctaKey: "bookLine", badge: { th: "รายชั่วโมง", en: "Hourly" }, priceSuffix: { th: "THB/ชม.", en: "THB/hr" } },
  { ...translations.pricing.halfDay, price: "5,000", highlight: false, ctaKey: "bookLine" },
  { ...translations.pricing.fullDay, price: "8,000", highlight: true, ctaKey: "bookLine", badge: translations.pricing.popular },
  { ...translations.pricing.event, price: null, highlight: false, ctaKey: "getQuote" },
];

function PackageCard({ pkg, t, isActive }: { pkg: Package; t: (obj: { th: string; en: string }) => string; isActive: boolean }) {
  return (
    <div
      className={`relative rounded-3xl p-8 sm:p-10 transition-all duration-700 ease-out h-full flex flex-col ${
        pkg.highlight
          ? "bg-charcoal text-white shadow-soft-lg"
          : "bg-white border border-gray-100"
      } ${isActive ? "scale-100 opacity-100" : "scale-[0.92] opacity-50"}`}
    >
      {pkg.badge && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-5 py-1.5 bg-terra text-white text-[10px] font-semibold tracking-wider uppercase rounded-full whitespace-nowrap shadow-sm">
          {t(pkg.badge)}
        </span>
      )}

      <div className="text-center mb-6 pt-2">
        <h3 className={`text-xl font-semibold mb-1 ${pkg.highlight ? "text-white" : "text-charcoal"}`}>
          {t(pkg.name)}
        </h3>
        <span className={`text-sm ${pkg.highlight ? "text-white/50" : "text-gray-400"}`}>
          {t(pkg.duration)}
        </span>
      </div>

      <div className="text-center mb-6">
        {pkg.price ? (
          <div className="flex items-baseline justify-center gap-1.5">
            <span className={`text-5xl font-bold ${pkg.highlight ? "text-terra-light" : "text-charcoal"}`}>
              {pkg.price}
            </span>
            <span className={`text-base ${pkg.highlight ? "text-white/50" : "text-gray-400"}`}>
              {pkg.priceSuffix ? t(pkg.priceSuffix) : "THB"}
            </span>
          </div>
        ) : (
          <span className={`text-3xl font-semibold ${pkg.highlight ? "text-terra-light" : "text-terra"}`}>
            {t(translations.pricing.getQuote)}
          </span>
        )}
      </div>

      <p className={`text-sm text-center mb-6 leading-relaxed font-light ${pkg.highlight ? "text-white/60" : "text-gray-400"}`}>
        {t(pkg.desc)}
      </p>

      <ul className="space-y-3 mb-8 flex-1">
        {pkg.features.map((feat, i) => (
          <li key={i} className={`flex items-start gap-3 text-sm ${pkg.highlight ? "text-white/70" : "text-gray-500"}`}>
            <svg className={`w-4 h-4 mt-0.5 flex-shrink-0 ${pkg.highlight ? "text-terra-light" : "text-terra"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {t(feat)}
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className={`block w-full text-center py-3.5 rounded-full text-sm font-medium transition-all ${
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
  );
}

export default function PricingSection() {
  const { t } = useLocale();
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(2); // start at half-day (middle)
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const isDragging = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const goTo = useCallback((index: number) => {
    setActiveIndex(Math.max(0, Math.min(allPackages.length - 1, index)));
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    isDragging.current = true;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goTo(activeIndex + 1);
      else goTo(activeIndex - 1);
    }
  };

  return (
    <section id="pricing" ref={sectionRef} className="py-16 md:py-20 bg-off-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
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

        {/* Carousel */}
        <div
          className={`relative transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Desktop: center peek carousel */}
          <div className="hidden md:block relative">
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-5xl">
                {/* Cards container */}
                <div className="relative h-[540px]">
                  {allPackages.map((pkg, index) => {
                    const offset = index - activeIndex;
                    const isCenter = offset === 0;
                    const translateX = offset * 340;
                    const zIndex = 10 - Math.abs(offset);

                    return (
                      <div
                        key={index}
                        className="absolute top-0 left-1/2 w-[320px] cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                        style={{
                          transform: `translateX(${translateX - 160}px)`,
                          zIndex,
                          opacity: Math.abs(offset) > 2 ? 0 : 1,
                          pointerEvents: Math.abs(offset) <= 2 ? "auto" : "none",
                        }}
                        onClick={() => goTo(index)}
                      >
                        <PackageCard pkg={pkg} t={t} isActive={isCenter} />
                      </div>
                    );
                  })}
                </div>

                {/* Nav arrows — bigger and more visible */}
                <button
                  onClick={() => goTo(activeIndex - 1)}
                  className={`absolute left-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 shadow-md flex items-center justify-center transition-all duration-300 z-20 hover:bg-white hover:shadow-lg hover:scale-110 ${
                    activeIndex === 0 ? "opacity-0 pointer-events-none" : ""
                  }`}
                >
                  <svg className="w-5 h-5 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => goTo(activeIndex + 1)}
                  className={`absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 shadow-md flex items-center justify-center transition-all duration-300 z-20 hover:bg-white hover:shadow-lg hover:scale-110 ${
                    activeIndex === allPackages.length - 1 ? "opacity-0 pointer-events-none" : ""
                  }`}
                >
                  <svg className="w-5 h-5 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile: swipe carousel */}
          <div className="md:hidden">
            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {allPackages.map((pkg, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <PackageCard pkg={pkg} t={t} isActive={true} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center items-center gap-2 mt-10">
            {allPackages.map((pkg, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className={`transition-all duration-500 rounded-full ${
                  index === activeIndex
                    ? "bg-terra w-8 h-3"
                    : "bg-gray-200 w-3 h-3 hover:bg-gray-300"
                }`}
                title={t(pkg.name)}
              />
            ))}
          </div>

          {/* Package name preview */}
          <p className="text-center mt-3 text-sm text-gray-400 font-light transition-all duration-500">
            {t(allPackages[activeIndex].name)} · {t(allPackages[activeIndex].duration)}
          </p>
        </div>

        <p className="text-center mt-10 text-gray-300 text-xs font-light">
          {t(translations.pricing.note)}
        </p>
      </div>
    </section>
  );
}