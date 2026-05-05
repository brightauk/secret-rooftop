"use client";

import { useLocale } from "../lib/locale-context";
import { translations } from "../lib/i18n";
import Image from "next/image";

export default function HeroSection() {
  const { t } = useLocale();

  return (
    <section className="relative h-screen min-h-[700px] flex items-end overflow-hidden bg-charcoal">
      {/* Single full-bleed hero image */}
      <Image
        src="/images/hero/hero.jpg"
        alt="Secret Rooftop Talad Noi"
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
        quality={75}
      />

      {/* Dark overlay from bottom for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* Content positioned at bottom-left like Hims */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-8 pb-16 sm:pb-20">
        <div className="max-w-xl">
          <p className="animate-fade-in-up text-white/60 text-xs tracking-[0.2em] uppercase mb-4 font-light">
            {t(translations.hero.badge)}
          </p>

          <h1 className="animate-delay-1 text-white text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.1] mb-4 tracking-tight">
            {t(translations.hero.title)}
            <br />
            <span className="text-terra-light">{t(translations.hero.titleLine2)}</span>
          </h1>

          <p className="animate-delay-2 text-white/70 text-sm sm:text-base leading-relaxed mb-8 max-w-md font-light">
            {t(translations.hero.subtitle)}
          </p>

          <div className="animate-delay-3 flex flex-col sm:flex-row items-start gap-3">
            <a
              href="#pricing"
              className="px-8 py-3.5 bg-white text-charcoal text-sm font-medium rounded-full hover:bg-gray-100 transition-colors"
            >
              {t(translations.hero.checkRates)}
            </a>
            <a
              href="https://line.me/R/ti/p/@brightauk"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 border border-white/40 text-white text-sm font-medium rounded-full hover:bg-white/10 transition-colors"
            >
              {t(translations.hero.bookLine)}
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5">
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-white/30" />
      </div>
    </section>
  );
}