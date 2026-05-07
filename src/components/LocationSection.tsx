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
        <div className="text-center mb-16">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map */}
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
                className="absolute bottom-3 right-3 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-lg text-xs text-terra hover:text-terra-dark transition-colors font-medium shadow-sm border border-gray-100"
              >
                {t(translations.location.openMaps)}
              </a>
            </div>
          </div>

          {/* Directions & Parking */}
          <div className={`space-y-8 transition-all duration-500 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            {/* How to get here */}
            <div>
              <h3 className="text-base font-semibold text-charcoal mb-4">{t(translations.location.getHere)}</h3>
              <div className="space-y-3">
                {translations.location.directions.map((dir, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl bg-off-white">
                    <span className="text-lg">{dir.icon}</span>
                    <div>
                      <h4 className="font-medium text-charcoal text-sm">{t(dir.title)}</h4>
                      <p className="text-gray-400 text-xs mt-1 leading-relaxed font-light">{t(dir.desc)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Parking */}
            <div>
              <h3 className="text-base font-semibold text-charcoal mb-4">{t(translations.location.parking)}</h3>
              <div className="space-y-2">
                {parkingSpots.map((spot) => (
                  <a key={spot.name} href={spot.mapsUrl} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-xl bg-off-white hover:bg-gray-100 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-full bg-charcoal text-white text-xs font-semibold flex items-center justify-center">P</span>
                      <span className="text-sm text-charcoal font-medium">{spot.name}</span>
                    </div>
                    <span className="text-xs text-gray-400">{spot.distance}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}