"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLocale } from "../lib/locale-context";
import { translations } from "../lib/i18n";
import {
  staggerContainer, fadeUp, sectionHeader, sectionTag,
  sectionTitle, sectionDivider, sectionSubtitle,
} from "../lib/animations";

export default function HighlightsSection() {
  const { t } = useLocale();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const items = translations.highlights.items;

  return (
    <section id="highlights" ref={sectionRef} className="py-12 md:py-16 bg-white relative">
      {/* Subtle dot pattern background */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: "radial-gradient(circle, var(--charcoal) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }} />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <motion.div
          variants={sectionHeader}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-8"
        >
          <motion.p variants={sectionTag} className="text-xs tracking-[0.25em] uppercase text-terra mb-3 font-medium">
            {t(translations.highlights.tag)}
          </motion.p>
          <motion.h2 variants={sectionTitle} className="text-3xl sm:text-4xl md:text-5xl font-semibold text-charcoal mb-4">
            {t(translations.highlights.title)}
          </motion.h2>
          <motion.div variants={sectionDivider} className="section-divider mb-4 origin-center" />
          <motion.p variants={sectionSubtitle} className="text-gray-400 text-base max-w-md mx-auto font-light">
            {t(translations.highlights.subtitle)}
          </motion.p>
        </motion.div>

        {/* Grid with stagger reveal */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {items.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group p-8 rounded-2xl bg-off-white border border-gray-100/80 cursor-default relative overflow-hidden"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-terra/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <motion.span
                  className="text-3xl mb-5 block"
                  whileHover={{ scale: 1.15, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {item.icon}
                </motion.span>
                <h3 className="text-base font-semibold text-charcoal mb-2.5">
                  {t(item.title)}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed font-light">
                  {t(item.desc)}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}