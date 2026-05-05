"use client";

import { useState, useEffect, useRef } from "react";
import { useLocale } from "../lib/locale-context";
import { translations } from "../lib/i18n";

const contactLinks = [
  { platform: "Fastwork", label: "Book via Fastwork", href: "https://fastwork.co/user/brightauk/studio-rental-10056485", icon: "⚡" },
  { platform: "Google Maps", label: "View on Maps", href: "https://maps.app.goo.gl/mrAeDAYrVjZdUHzM9", icon: "📍" },
];

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
    <section id="contact" ref={sectionRef} className="py-24 md:py-32 bg-off-white">
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

            <div className="space-y-3">
              {contactLinks.map((link) => (
                <a key={link.platform} href={link.href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-white border border-gray-100 hover:border-gray-200 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-lg">{link.icon}</span>
                    <div>
                      <div className="font-medium text-sm text-charcoal">{link.platform}</div>
                      <div className="text-xs text-gray-400 font-light">{link.label}</div>
                    </div>
                  </div>
                  <svg className="w-4 h-4 text-gray-300 group-hover:text-terra transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ))}
            </div>

            <div className="mt-5 p-4 rounded-xl bg-white border border-gray-100">
              <p className="text-gray-400 text-sm font-light">{t(translations.contact.quickReply)}</p>
            </div>

            {/* LINE QR — smooth integrated card */}
            <div className="mt-5 p-6 rounded-2xl bg-[#06C755]/5 border border-[#06C755]/20">
              <div className="flex items-center gap-5">
                <div className="flex-shrink-0 w-32 h-32 rounded-xl overflow-hidden bg-white p-2 shadow-sm">
                  <img src="/images/line-qr.png" alt="LINE QR Code" className="w-full h-full object-contain rounded-lg" />
                </div>
                <div>
                  <p className="text-charcoal font-medium text-sm">จองผ่าน LINE</p>
                  <p className="text-gray-400 text-xs font-light mt-1">แสกน QR Code เพื่อเพิ่มเพื่อน<br/>และส่งข้อความจองได้เลย</p>
                  <p className="text-gray-300 text-[11px] font-light mt-2">💬 ตอบกลับเร็วภายใน 30 นาที</p>
                </div>
              </div>
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