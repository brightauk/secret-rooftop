"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLocale } from "../lib/locale-context";
import { translations } from "../lib/i18n";
import {
  staggerContainer, fadeUp, sectionHeader, sectionTag,
  sectionTitle, sectionDivider, sectionSubtitle,
} from "../lib/animations";

export default function TestimonialsSection() {
  const { t, locale } = useLocale();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const items = translations.testimonials.items;

  return (
    <section id="reviews" ref={sectionRef} className="py-20 md:py-28 bg-white relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <motion.div
          variants={sectionHeader}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.p variants={sectionTag} className="text-xs tracking-[0.25em] uppercase text-terra mb-3 font-medium">
            {t(translations.testimonials.tag)}
          </motion.p>
          <motion.h2 variants={sectionTitle} className="text-3xl sm:text-4xl md:text-5xl font-semibold text-charcoal mb-4">
            {t(translations.testimonials.title)}
          </motion.h2>
          <motion.div variants={sectionDivider} className="section-divider mb-4 origin-center" />
          <motion.p variants={sectionSubtitle} className="text-gray-400 text-base max-w-md mx-auto font-light">
            {t(translations.testimonials.subtitle)}
          </motion.p>
        </motion.div>

        {/* Testimonial cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {items.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="relative p-8 rounded-2xl bg-off-white border border-gray-100/80 shadow-soft hover:shadow-card-hover transition-shadow duration-300"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: item.stars }).map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-amber" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-charcoal text-sm leading-relaxed mb-6 font-light italic">
                &ldquo;{t(item.quote)}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-terra/20 to-amber/20 flex items-center justify-center">
                  <span className="text-sm font-semibold text-terra">{t(item.author).charAt(0)}</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-charcoal">{t(item.author)}</p>
                  <p className="text-[11px] text-gray-400">{t(item.role)}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Aggregate rating for AI/SEO */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-off-white border border-gray-100">
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(i => (
                <svg key={i} className="w-4 h-4 text-amber" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-charcoal font-medium">
              {t(translations.testimonials.aggregate)}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}