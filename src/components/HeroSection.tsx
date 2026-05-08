"use client";

import { useLocale } from "../lib/locale-context";
import { translations } from "../lib/i18n";
import Image from "next/image";

export default function HeroSection() {
  const { t } = useLocale();

  return (
    <section className="relative h-screen min-h-[700px] flex items-end overflow-hidden bg-charcoal-deep">
      {/* Full-bleed hero image */}
      <Image
        src="/images/hero/hero.jpg"
        alt="Secret Rooftop Talad Noi"
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
        quality={80}
      />

      {/* Cinematic gradient overlay - stronger for text pop */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
      {/* Side vignette */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />

      {/* Content positioned at bottom-left */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-8 pb-20 sm:pb-24">
        <div className="max-w-2xl">
          <p className="animate-fade-in-up text-white/50 text-xs tracking-[0.25em] uppercase mb-5 font-medium">
            {t(translations.hero.badge)}
          </p>

          <h1 className="animate-delay-1 text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.2] mb-5 tracking-tight">
            {t(translations.hero.title)}
            <br />
            <span className="text-gradient-terra italic">{t(translations.hero.titleLine2)}</span>
          </h1>

          <p className="animate-delay-2 text-white/60 text-sm sm:text-base leading-relaxed mb-10 max-w-lg font-light">
            {t(translations.hero.subtitle)}
          </p>

          <div className="animate-delay-3 flex flex-col sm:flex-row items-start gap-4">
            <a
              href="#pricing"
              className="btn-glow group px-8 py-4 bg-white text-charcoal text-sm font-semibold rounded-full inline-flex items-center gap-2"
            >
              {t(translations.hero.checkRates)}
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#contact"
              className="group px-8 py-4 border border-white/30 text-white text-sm font-medium rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300 inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
              </svg>
              {t(translations.hero.bookLine)}
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-white/30 text-[10px] tracking-[0.2em] uppercase font-light">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent animate-float" />
      </div>
    </section>
  );
}