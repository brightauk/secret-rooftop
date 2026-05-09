"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useLocale } from "../lib/locale-context";
import { translations } from "../lib/i18n";
import { events } from "../lib/analytics";
import {
  staggerContainer, fadeUp, sectionHeader, sectionTag,
  sectionTitle, sectionDivider, sectionSubtitle,
} from "../lib/animations";

export default function ContactFAQSection() {
  const { t } = useLocale();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section id="contact" ref={sectionRef} className="py-20 md:py-28 bg-off-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <motion.div
          variants={sectionHeader}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.p variants={sectionTag} className="text-xs tracking-[0.25em] uppercase text-terra mb-3 font-medium">
            {t(translations.contact.tag)}
          </motion.p>
          <motion.h2 variants={sectionTitle} className="text-3xl sm:text-4xl md:text-5xl font-semibold text-charcoal mb-4 tracking-tight">
            {t(translations.contact.title)}
          </motion.h2>
          <motion.div variants={sectionDivider} className="section-divider mb-4 origin-center" />
          <motion.p variants={sectionSubtitle} className="text-gray-400 text-base max-w-md mx-auto font-light">
            {t(translations.contact.subtitle)}
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16"
        >
          {/* Contact — Primary */}
          <motion.div variants={fadeUp}>
            <h3 className="text-base font-semibold text-charcoal mb-6">{t(translations.contact.bookNow)}</h3>
            <div className="space-y-4">
              {/* LINE — Primary CTA */}
              <motion.div
                whileHover={{ y: -2 }}
                className="p-6 rounded-2xl bg-white border border-[#06C755]/20 shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <div
                    className="flex-shrink-0 w-40 h-40 rounded-2xl overflow-hidden bg-white p-2 border border-gray-100 shadow-sm cursor-pointer hover:scale-105 transition-transform"
                    onClick={() => events.lineQrScanned()}
                  >
                    <img src="/images/line-qr.png" alt="LINE QR Code — scan to add Secret Rooftop" className="w-full h-full object-contain" />
                  </div>
                  <div className="text-center sm:text-left">
                    <div className="flex items-center justify-center sm:justify-start gap-2.5 mb-3">
                      <div className="w-7 h-7 rounded-lg bg-[#06C755] flex items-center justify-center shadow-sm">
                        <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.627-.285-.627-.629V8.108c0-.27.174-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.349 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                        </svg>
                      </div>
                      <span className="font-bold text-charcoal text-base">LINE</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#06C755]/10 text-[#06C755] font-semibold tracking-wide uppercase">
                        {t({ th: "แนะนำ", en: "Recommended" })}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm font-light leading-relaxed mb-2">
                      {t({ th: "แสกน QR เพื่อเพิ่มเพื่อน → ส่งข้อความจองได้เลย", en: "Scan QR to add friend → Send a booking message" })}
                    </p>
                    <p className="text-xs text-gray-300 font-light">
                      {t({ th: "💬 ตอบกลับเร็วภายใน 30 นาที", en: "💬 Quick reply within 30 minutes" })}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Fastwork — Secondary CTA */}
              <motion.a
                href="https://fastwork.co/user/brightauk/studio-rental-10056485"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-[#4C1D95]/10 shadow-card hover:shadow-card-hover hover:border-[#4C1D95]/25 transition-all duration-300 group"
                onClick={() => events.fastworkClicked()}
              >
                <div className="w-12 h-12 rounded-2xl overflow-hidden flex-shrink-0 shadow-sm border border-gray-50">
                  <img src="/images/fastwork-logo.jpg" alt="Fastwork" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-sm text-charcoal">Fastwork</div>
                  <div className="text-xs text-gray-400 font-light">{t({ th: "จองผ่าน Fastwork", en: "Book via Fastwork" })}</div>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#4C1D95]/5 flex items-center justify-center group-hover:bg-[#4C1D95]/10 transition-colors">
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-[#6D28D9] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </motion.a>

              {/* Trust signals */}
              <div className="flex items-center justify-center gap-6 pt-2">
                {[
                  { icon: "⚡", label: t({ th: "ตอบกลับเร็ว", en: "Quick Reply" }) },
                  { icon: "🔒", label: t({ th: "จองปลอดภัย", en: "Secure Booking" }) },
                  { icon: "📅", label: t({ th: "ยืดหยุ่น", en: "Flexible" }) },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <span className="text-sm">{item.icon}</span>
                    <span className="text-[11px] text-gray-400 font-light">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* FAQ — AI-searchable content */}
          <motion.div variants={fadeUp}>
            <h3 className="text-base font-semibold text-charcoal mb-6">{t(translations.contact.faqTitle)}</h3>
            <div className="space-y-3">
              {translations.contact.faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 2 }}
                  className="rounded-2xl border border-gray-100 overflow-hidden bg-white shadow-card hover:shadow-card-hover transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full text-left p-5 flex items-start gap-4 hover:bg-off-white/50 transition-colors tap-target"
                    aria-expanded={openFaq === index}
                  >
                    <motion.span
                      animate={{ rotate: openFaq === index ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className={`flex-shrink-0 mt-0.5 w-6 h-6 rounded-full flex items-center justify-center text-sm transition-colors duration-300 ${
                        openFaq === index ? "bg-terra/10 text-terra" : "bg-gray-100 text-gray-400"
                      }`}
                    >+</motion.span>
                    <span className="font-medium text-charcoal text-sm leading-snug">{t(faq.q)}</span>
                  </button>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="px-5 pb-5">
                          <p className="text-gray-400 text-sm leading-relaxed ml-10 font-light">{t(faq.a)}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}