"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { useLocale } from "../lib/locale-context";
import { translations } from "../lib/i18n";
import {
  sectionHeader, sectionTag, sectionTitle, sectionDivider, sectionSubtitle,
} from "../lib/animations";

// Dynamic monthly promo — 20% off, auto-rotates each month
const DISCOUNT_PCT = 20;
const TH_MONTHS = ["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"];
const EN_MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];

function getPromoMonth() {
  const now = new Date();
  return { th: TH_MONTHS[now.getMonth()], en: EN_MONTHS[now.getMonth()] };
}

function applyDiscount(price: string | null): { original: string; discounted: string } | null {
  if (!price) return null;
  const num = parseInt(price.replace(/,/g, ""), 10);
  const discounted = Math.round(num * (1 - DISCOUNT_PCT / 100));
  return { original: price, discounted: discounted.toLocaleString() };
}

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

const allPackages: Package[] = [
  { ...translations.pricing.hourlyShoot, price: "1,500", highlight: false, ctaKey: "bookLine", badge: { th: "รายชั่วโมง", en: "Hourly" }, priceSuffix: { th: "THB/ชม.", en: "THB/hr" } },
  { ...translations.pricing.hourlyProduction, price: "2,000", highlight: false, ctaKey: "bookLine", badge: { th: "รายชั่วโมง", en: "Hourly" }, priceSuffix: { th: "THB/ชม.", en: "THB/hr" } },
  { ...translations.pricing.halfDay, price: "5,000", highlight: true, ctaKey: "bookLine", badge: translations.pricing.popular },
  { ...translations.pricing.fullDay, price: "7,500", highlight: false, ctaKey: "bookLine" },
  { ...translations.pricing.event, price: null, highlight: false, ctaKey: "getQuote" },
];

function PackageCard({ pkg, t, isActive }: { pkg: Package; t: (obj: { th: string; en: string }) => string; isActive: boolean }) {
  const discount = applyDiscount(pkg.price);

  return (
    <div
      className={`relative rounded-3xl p-8 sm:p-10 transition-all duration-500 ease-out h-full flex flex-col card-hover overflow-visible ${
        pkg.highlight
          ? "bg-charcoal-deep text-white shadow-glow ring-1 ring-terra/20"
          : "bg-white border border-gray-100 shadow-card"
      }`}
    >
      {pkg.badge && (
        <span className={`absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 text-[10px] font-semibold tracking-wider uppercase rounded-full whitespace-nowrap z-10 ${
          pkg.highlight
            ? "bg-gradient-to-r from-terra to-amber text-white shadow-md"
            : "bg-terra/10 text-terra border border-terra/20"
        }`}>
          {t(pkg.badge)}
        </span>
      )}

      {pkg.highlight && (
        <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-3xl bg-terra" />
      )}

      <div className="text-center mb-6 pt-2">
        <h3 className={`text-xl font-semibold mb-1 ${pkg.highlight ? "text-white" : "text-charcoal"}`}>
          {t(pkg.name)}
        </h3>
        <span className={`text-sm ${pkg.highlight ? "text-white/40" : "text-gray-400"}`}>
          {t(pkg.duration)}
        </span>
      </div>

      <div className="text-center mb-6">
        {pkg.price && discount ? (
          <div>
            <div className="flex items-baseline justify-center gap-1.5">
              <span className={`text-5xl font-bold ${pkg.highlight ? "text-gradient-terra" : "text-charcoal"}`}>
                {discount.discounted}
              </span>
              <span className={`text-base ${pkg.highlight ? "text-white/40" : "text-gray-400"}`}>
                {pkg.priceSuffix ? t(pkg.priceSuffix) : "THB"}
              </span>
            </div>
            <div className={`flex items-center justify-center gap-2 mt-1.5 text-xs ${pkg.highlight ? "text-white/30" : "text-gray-300"}`}>
              <span className="line-through">{discount.original} {pkg.priceSuffix ? t(pkg.priceSuffix) : "THB"}</span>
              <span className="bg-green-500/10 text-green-600 px-2 py-0.5 rounded-full font-semibold">-{DISCOUNT_PCT}%</span>
            </div>
          </div>
        ) : (
          <span className={`text-3xl font-semibold ${pkg.highlight ? "text-gradient-terra" : "text-terra"}`}>
            {t(translations.pricing.getQuote)}
          </span>
        )}
      </div>

      <p className={`text-sm text-center mb-6 leading-relaxed font-light ${pkg.highlight ? "text-white/50" : "text-gray-400"}`}>
        {t(pkg.desc)}
      </p>

      <ul className="space-y-3 mb-8 flex-1">
        {pkg.features.map((feat, i) => (
          <li key={i} className={`flex items-start gap-3 text-sm ${pkg.highlight ? "text-white/70" : "text-gray-500"}`}>
            <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
              pkg.highlight ? "bg-terra/20" : "bg-terra/10"
            }`}>
              <svg className={`w-3 h-3 ${pkg.highlight ? "text-terra-light" : "text-terra"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            {t(feat)}
          </li>
        ))}
      </ul>

      <motion.a
        href="#contact"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`block w-full text-center py-4 rounded-full text-sm font-semibold transition-all duration-300 btn-glow tap-target ${
          pkg.highlight
            ? "bg-gradient-to-r from-terra to-amber text-white hover:shadow-lg"
            : "bg-charcoal text-white hover:bg-charcoal-deep"
        }`}
      >
        {t(translations.pricing[pkg.ctaKey])}
      </motion.a>

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
  const { t, locale } = useLocale();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [activeIndex, setActiveIndex] = useState(2);
  const promoMonth = getPromoMonth();

  const goTo = useCallback((index: number) => {
    setActiveIndex(Math.max(0, Math.min(allPackages.length - 1, index)));
  }, []);

  // Swipe handlers
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const isDragging = useRef(false);

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
    <section id="pricing" ref={sectionRef} className="py-12 md:py-16 bg-off-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <motion.div
          variants={sectionHeader}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-8"
        >
          <motion.p variants={sectionTag} className="text-xs tracking-[0.25em] uppercase text-terra mb-3 font-medium">
            {t(translations.pricing.tag)}
          </motion.p>
          <motion.h2 variants={sectionTitle} className="text-3xl sm:text-4xl md:text-5xl font-semibold text-charcoal mb-4">
            {t(translations.pricing.title)}
          </motion.h2>
          <motion.div variants={sectionDivider} className="section-divider mb-4 origin-center" />
          <motion.p variants={sectionSubtitle} className="text-gray-400 text-base max-w-md mx-auto font-light">
            {t(translations.pricing.subtitle)}
          </motion.p>
          {/* Promo banner */}
          <motion.div variants={sectionSubtitle} className="mt-4 inline-flex items-center gap-2 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-full px-5 py-2">
            <span className="text-green-600 font-semibold text-sm">
              🔥 {DISCOUNT_PCT}% OFF
            </span>
            <span className="text-green-700/70 text-xs">
              {locale === "th"
                ? `โปรเดือน${promoMonth.th}เท่านั้น`
                : `${promoMonth.en} promo only`}
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Desktop carousel */}
          <div className="hidden md:block relative">
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-5xl">
                <div className="relative h-[560px]">
                  {allPackages.map((pkg, index) => {
                    const offset = index - activeIndex;
                    const isCenter = offset === 0;
                    const translateX = offset * 340;
                    const zIndex = 10 - Math.abs(offset);

                    return (
                      <motion.div
                        key={index}
                        className="absolute top-0 left-1/2 w-[320px] cursor-pointer"
                        animate={{
                          x: translateX - 160,
                          scale: isCenter && pkg.highlight ? 1.03 : isCenter ? 1 : 0.92,
                          opacity: Math.abs(offset) > 2 ? 0 : isCenter ? 1 : 0.5,
                          zIndex,
                        }}
                        transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
                        onClick={() => goTo(index)}
                      >
                        <PackageCard pkg={pkg} t={t} isActive={isCenter} />
                      </motion.div>
                    );
                  })}
                </div>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => goTo(activeIndex - 1)}
                  className={`absolute left-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 shadow-md flex items-center justify-center z-20 ${
                    activeIndex === 0 ? "opacity-0 pointer-events-none" : ""
                  }`}
                >
                  <svg className="w-5 h-5 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => goTo(activeIndex + 1)}
                  className={`absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 shadow-md flex items-center justify-center z-20 ${
                    activeIndex === allPackages.length - 1 ? "opacity-0 pointer-events-none" : ""
                  }`}
                >
                  <svg className="w-5 h-5 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </div>
            </div>
          </div>

          {/* Mobile: full-width card carousel */}
          <div className="md:hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${activeIndex * 100}%` }}
              transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
            >
              {allPackages.map((pkg, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4 pt-5">
                  <PackageCard pkg={pkg} t={t} isActive={true} />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Dots */}
          <div className="flex justify-center items-center gap-2 mt-10">
            {allPackages.map((pkg, index) => (
              <motion.button
                key={index}
                onClick={() => goTo(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`transition-all duration-500 rounded-full ${
                  index === activeIndex
                    ? "bg-terra w-8 h-3"
                    : "bg-gray-200 w-3 h-3 hover:bg-gray-300"
                }`}
                title={t(pkg.name)}
              />
            ))}
          </div>

          <p className="text-center mt-3 text-sm text-gray-400 font-light">
            {t(allPackages[activeIndex].name)} · {t(allPackages[activeIndex].duration)}
          </p>
        </motion.div>

        <p className="text-center mt-12 text-gray-300 text-xs font-light">
          {t(translations.pricing.note)}
        </p>
      </div>
    </section>
  );
}