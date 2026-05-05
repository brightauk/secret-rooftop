"use client";

import { useLocale } from "../lib/locale-context";
import { translations } from "../lib/i18n";

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="bg-charcoal text-white">
      {/* CTA bar */}
      <div className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-3 tracking-tight">
            {t(translations.footer.ctaTitle)}
          </h2>
          <p className="text-white/40 text-sm mb-6 font-light max-w-md mx-auto">
            {t(translations.footer.ctaDesc)}
          </p>
          <a
            href="#contact"
            className="inline-flex px-8 py-3.5 bg-white text-charcoal text-sm font-medium rounded-full hover:bg-gray-100 transition-colors"
          >
            {t(translations.footer.bookNow)}
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-white/30 text-xs font-light">
            © {new Date().getFullYear()} Secret Rooftop Talad Noi
          </span>
          <div className="flex items-center gap-6">
            <a href="#contact" className="text-white/30 hover:text-white/60 text-xs transition-colors">
              LINE
            </a>
            <a href="https://fastwork.co/user/brightauk/studio-rental-10056485" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white/60 text-xs transition-colors">
              Fastwork
            </a>
            <a href="https://maps.app.goo.gl/mrAeDAYrVjZdUHzM9" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white/60 text-xs transition-colors">
              Maps
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}