"use client";

import { useState, useEffect, useRef } from "react";
import { useLocale } from "../lib/locale-context";
import { translations } from "../lib/i18n";


export default function ContactFAQSection() {
  const { t } = useLocale();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
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
    <section id="contact" ref={sectionRef} className="py-16 md:py-20 bg-off-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.2em] uppercase text-terra mb-3 font-medium">
            {t(translations.contact.tag)}
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-charcoal mb-4 tracking-tight">
            {t(translations.contact.title)}
          </h2>
          <p className="text-gray-400 text-base max-w-md mx-auto font-light">
            {t(translations.contact.subtitle)}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact */}
          <div className={`transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <h3 className="text-base font-semibold text-charcoal mb-5">{t(translations.contact.bookNow)}</h3>

            <div className="space-y-4">
              {/* LINE QR — Main CTA */}
              <div className="p-5 rounded-2xl bg-white border border-[#06C755]/15">
                <div className="flex flex-col sm:flex-row items-center gap-5">
                  <div className="flex-shrink-0 w-36 h-36 rounded-xl overflow-hidden bg-white p-2 border border-gray-100">
                    <img src="/images/line-qr.png" alt="LINE QR Code" className="w-full h-full object-contain" />
                  </div>
                  <div className="text-center sm:text-left">
                    <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                      <div className="w-6 h-6 rounded-md bg-[#06C755] flex items-center justify-center">
                        <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.627-.285-.627-.629V8.108c0-.27.174-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.349 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                        </svg>
                      </div>
                      <span className="font-semibold text-charcoal text-sm">LINE</span>
                    </div>
                    <p className="text-gray-400 text-xs font-light leading-relaxed">
                      {t({ th: "แสกน QR เพื่อเพิ่มเพื่อน → ส่งข้อความจองได้เลย", en: "Scan QR to add friend → Send a booking message" })}
                    </p>
                    <p className="text-[11px] text-gray-300 font-light mt-1.5">
                      {t({ th: "💬 ตอบกลับเร็วภายใน 30 นาที", en: "💬 Quick reply within 30 minutes" })}
                    </p>
                  </div>
                </div>
              </div>

              {/* Fastwork */}
              <a href="https://fastwork.co/user/brightauk/studio-rental-10056485" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-[#4C1D95]/5 border border-[#4C1D95]/15 hover:border-[#4C1D95]/30 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center flex-shrink-0 border border-gray-100">
                  <img src="/images/fastwork-logo.svg" alt="Fastwork" className="w-7 h-7 object-contain" />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-sm text-charcoal">Fastwork</div>
                  <div className="text-xs text-gray-400 font-light">{t({ th: "จองผ่าน Fastwork", en: "Book via Fastwork" })}</div>
                </div>
                <svg className="w-4 h-4 text-gray-300 group-hover:text-[#6D28D9] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          {/* FAQ */}
          <div className={`transition-all duration-500 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <h3 className="text-base font-semibold text-charcoal mb-5">{t(translations.contact.faqTitle)}</h3>
            <div className="space-y-2">
              {translations.contact.faqs.map((faq, index) => (
                <div key={index} className="rounded-xl border border-gray-100 overflow-hidden bg-white">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full text-left p-4 flex items-start gap-3 hover:bg-gray-50 transition-colors"
                  >
                    <span className={`flex-shrink-0 mt-0.5 w-5 h-5 flex items-center justify-center text-xs transition-all duration-200 ${
                      openFaq === index ? "text-terra rotate-45" : "text-gray-300"
                    }`}>+</span>
                    <span className="font-medium text-charcoal text-sm leading-snug">{t(faq.q)}</span>
                  </button>
                  <div className={`transition-all duration-200 overflow-hidden ${
                    openFaq === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}>
                    <div className="px-4 pb-4">
                      <p className="text-gray-400 text-sm leading-relaxed ml-8 font-light">{t(faq.a)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}