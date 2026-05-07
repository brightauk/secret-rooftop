"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale } from "../lib/locale-context";
import { translations } from "../lib/i18n";

const parkingSpots = [
  { name: "River City Bangkok", distance: "~10 min walk", mapsUrl: "https://maps.google.com/?q=River+City+Bangkok" },
  { name: "Expressway Parking", distance: "~5 min walk", mapsUrl: "https://maps.google.com/?q=13.7385,100.5117" },
  { name: "Charoen Krung Road", distance: "Nearest", mapsUrl: "https://maps.google.com/?q=13.738,100.512" },
];

export default function LocationSection() {
  const { t } = useLocale();
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
    <section id="location" ref={sectionRef} className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.2em] uppercase text-terra mb-3 font-medium">
            {t(translations.location.tag)}
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-charcoal mb-4 tracking-tight">
            {t(translations.location.title)}
          </h2>
          <p className="text-gray-400 text-base max-w-md mx-auto font-light">
            {t(translations.location.subtitle)}
          </p>
        </div>

        {/* Full width map */}
        <div className={`rounded-2xl overflow-hidden border border-gray-100 transition-all duration-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}>
          <div className="relative">
            <iframe
              src="https://maps.google.com/maps?q=Secret+Rooftop+Talad+Noi&t=&z=17&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="360"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
              title="Secret Rooftop Location"
            />
            <a
              href="https://maps.app.goo.gl/mrAeDAYrVjZdUHzM9"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-3 right-3 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-lg text-xs text-terra hover:text-terra-dark transition-colors font-medium shadow-sm border border-gray-100"
            >
              {t(translations.location.openMaps)}
            </a>
          </div>
        </div>

        {/* Info cards row below map */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 transition-all duration-500 delay-100 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}>
          {/* Address */}
          <div className="p-5 rounded-2xl bg-off-white">
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
                  {t({ th: "ซอยวานิช 2 ถ.เจริญกรุง แขวงตลาดน้อย เขตสัมพันธวงศ์ กรุงเทพฯ 10100", en: "Soi Vanich 2, Charoen Krung Rd, Talad Noi, Samphanthawong, Bangkok 10100" })}
                </p>
              </div>
            </div>
          </div>

          {/* How to get here */}
          <div className="p-5 rounded-2xl bg-off-white">
            <h4 className="font-medium text-charcoal text-sm mb-3">{t(translations.location.getHere)}</h4>
            <div className="space-y-2">
              {translations.location.directions.map((dir, i) => (
                <div key={i} className="flex gap-2.5">
                  <span className="text-sm">{dir.icon}</span>
                  <div>
                    <p className="text-charcoal text-xs font-medium">{t(dir.title)}</p>
                    <p className="text-gray-400 text-[11px] leading-relaxed font-light">{t(dir.desc)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Parking */}
          <div className="p-5 rounded-2xl bg-off-white sm:col-span-2 lg:col-span-1">
            <h4 className="font-medium text-charcoal text-sm mb-3">{t(translations.location.parking)}</h4>
            <div className="space-y-2">
              {parkingSpots.map((spot) => (
                <a key={spot.name} href={spot.mapsUrl} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-between py-1.5 group"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-charcoal text-white text-[9px] font-bold flex items-center justify-center">P</span>
                    <span className="text-xs text-charcoal font-medium group-hover:text-terra transition-colors">{spot.name}</span>
                  </div>
                  <span className="text-[11px] text-gray-400">{spot.distance}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}