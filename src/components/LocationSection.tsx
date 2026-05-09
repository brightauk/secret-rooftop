"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLocale } from "../lib/locale-context";
import { translations } from "../lib/i18n";
import {
  fadeUp, sectionHeader, sectionTag,
  sectionTitle, sectionDivider, sectionSubtitle, mapReveal,
} from "../lib/animations";

const LAT = 13.733322;
const LNG = 100.5122616;
const MAPS_LINK = "https://maps.app.goo.gl/vMiprywijbgPnuwu6";

export default function LocationSection() {
  const { t } = useLocale();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section id="location" ref={sectionRef} className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <motion.div
          variants={sectionHeader}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <motion.p variants={sectionTag} className="text-xs tracking-[0.2em] uppercase text-terra mb-3 font-medium">
            {t(translations.location.tag)}
          </motion.p>
          <motion.h2 variants={sectionTitle} className="text-3xl sm:text-4xl font-semibold text-charcoal mb-4">
            {t(translations.location.title)}
          </motion.h2>
          <motion.div variants={sectionDivider} className="section-divider mb-4 origin-center" />
          <motion.p variants={sectionSubtitle} className="text-gray-400 text-base max-w-md mx-auto font-light">
            {t(translations.location.subtitle)}
          </motion.p>
        </motion.div>

        {/* Map with animated reveal */}
        <motion.div
          variants={mapReveal}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="rounded-2xl overflow-hidden border border-gray-100 shadow-soft-lg"
        >
          <div className="relative">
            <iframe
              src={`https://maps.google.com/maps?q=${LAT},${LNG}&z=17&ie=UTF8&iwloc=&output=embed&cid=0x801fff5d798cb793:0x11230098ebae859d`}
              width="100%"
              height="360"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
              title="Secret Rooftop Location"
            />
            <motion.a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="absolute bottom-3 right-3 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-lg text-xs text-terra hover:text-terra-dark transition-colors font-medium shadow-sm border border-gray-100"
            >
              {t(translations.location.openMaps)}
            </motion.a>
          </div>
        </motion.div>

        {/* Address card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex justify-center mt-6"
        >
          <motion.div whileHover={{ y: -3 }} className="p-5 rounded-2xl bg-off-white transition-shadow hover:shadow-soft max-w-md w-full">
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-full bg-terra/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-terra" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </span>
              <div>
                <h4 className="font-medium text-charcoal text-sm">{t({ th: "ที่อยู่", en: "Address" })}</h4>
                <p className="text-gray-400 text-xs mt-1 leading-relaxed font-light">
                  {t({ th: "ซอยเจ้าสัวสอนจ้า ใกล้ร้าน Mother Roaster ตลาดน้อย กรุงเทพฯ", en: "Soi Chao Sua Son Ja, Near Mother Roaster, Talad Noi, Bangkok" })}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}