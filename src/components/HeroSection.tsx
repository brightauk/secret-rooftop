"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLocale } from "../lib/locale-context";
import { translations } from "../lib/i18n";
import { fadeUp, scrollBounce } from "../lib/animations";
import Image from "next/image";

export default function HeroSection() {
  const { t } = useLocale();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.4], [0, -60]);

  return (
    <section ref={sectionRef} className="relative h-screen min-h-[700px] flex items-end overflow-x-hidden bg-charcoal-deep">
      {/* Full-bleed hero image + overlays with parallax */}
      <motion.div className="absolute inset-0" style={{ y: imgY }}>
        <Image
          src="/images/hero/hero.jpg"
          alt="Secret Rooftop Talad Noi — สตูดิโอถ่ายภาพ ดาดฟ้า ตลาดน้อย กรุงเทพ"
          fill
          className="object-cover object-center scale-110"
          priority
          sizes="100vw"
          quality={85}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChsdW1pAAABcAAAABRyblBAAAAAWAAAABRia0EAAAAWAAAACgAAAAAAAHMbwAAACwAADiYAGeAADymQAATacAAAnWY2lkdwAAAAAAAAAAAAAAAFlgAMekAAAAAABIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="
        />
        {/* Cinematic gradient overlays — inside parallax so they scroll with image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20" />
        {/* Animated ambient glow */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(ellipse at 20% 80%, rgba(184,115,51,0.08) 0%, transparent 50%)",
              "radial-gradient(ellipse at 30% 70%, rgba(184,115,51,0.12) 0%, transparent 50%)",
              "radial-gradient(ellipse at 20% 80%, rgba(184,115,51,0.08) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Content with scroll-linked fade */}
      <motion.div
        className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-8 pb-20 sm:pb-24"
        style={{ opacity: textOpacity, y: textY }}
      >
        <div className="max-w-2xl">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
            className="text-white/50 text-xs tracking-[0.25em] uppercase mb-5 font-medium"
          >
            {t(translations.hero.badge)}
          </motion.p>

          <motion.h1
            className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.3] mb-5"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              {t(translations.hero.title)}
            </motion.span>
            <motion.span
              className="text-gradient-terra italic block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              {t(translations.hero.titleLine2)}
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-white/60 text-sm sm:text-base leading-relaxed mb-10 max-w-lg font-light"
          >
            {t(translations.hero.subtitle)}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <a
              href="#pricing"
              className="btn-glow magnetic group px-8 py-4 bg-white text-charcoal text-sm font-semibold rounded-full inline-flex items-center gap-2"
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
          </motion.div>
        </div>
      </motion.div>

      {/* Animated scroll indicator */}
      <motion.div
        variants={scrollBounce}
        initial="hidden"
        animate="visible"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-[10px] tracking-[0.2em] uppercase font-light">Scroll</span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}