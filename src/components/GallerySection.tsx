"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useLocale } from "../lib/locale-context";
import { translations } from "../lib/i18n";

type Category = "all" | "day" | "night" | "office";

const categories: { key: Category; labelKey: "all" | "day" | "night" | "office" }[] = [
  { key: "all", labelKey: "all" },
  { key: "day", labelKey: "day" },
  { key: "night", labelKey: "night" },
  { key: "office", labelKey: "office" },
];

const images: { src: string; alt: string; category: Category }[] = [
  { src: "/images/gallery/day/01.jpg", alt: "Rooftop view 1", category: "day" },
  { src: "/images/gallery/day/04.jpg", alt: "Rooftop view 2", category: "day" },
  { src: "/images/gallery/day/07.jpg", alt: "Rooftop setup", category: "day" },
  { src: "/images/gallery/day/13.jpg", alt: "Rooftop wide", category: "day" },
  { src: "/images/gallery/day/14.jpg", alt: "Rooftop afternoon", category: "day" },
  { src: "/images/gallery/day/16.jpg", alt: "Rooftop space", category: "day" },
  { src: "/images/gallery/day/18.jpg", alt: "Rooftop details", category: "day" },
  { src: "/images/gallery/day/20.jpg", alt: "Rooftop panoramic", category: "day" },
  { src: "/images/gallery/day/22.jpg", alt: "Golden hour", category: "day" },
  { src: "/images/gallery/day/23.jpg", alt: "Sunset", category: "day" },
  { src: "/images/gallery/day/25.jpg", alt: "Evening glow", category: "day" },
  { src: "/images/gallery/night/01.jpg", alt: "Night view 1", category: "night" },
  { src: "/images/gallery/night/02.jpg", alt: "Night view 2", category: "night" },
  { src: "/images/gallery/night/04.jpg", alt: "City lights", category: "night" },
  { src: "/images/gallery/night/05.jpg", alt: "Night ambiance", category: "night" },
  { src: "/images/gallery/night/06.jpg", alt: "Night spot", category: "night" },
  { src: "/images/gallery/night/08.jpg", alt: "Night mood", category: "night" },
  { src: "/images/gallery/office/01.jpg", alt: "Office space 1", category: "office" },
  { src: "/images/gallery/office/02.jpg", alt: "Office space 2", category: "office" },
];

export default function GallerySection() {
  const { t } = useLocale();
  const [active, setActive] = useState<Category>("all");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const filtered = active === "all" ? images : images.filter((i) => i.category === active);

  return (
    <section id="gallery" ref={sectionRef} className="py-24 md:py-32 bg-off-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.2em] uppercase text-terra mb-3 font-medium">
            {t(translations.gallery.tag)}
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-charcoal mb-4 tracking-tight">
            {t(translations.gallery.title)}
          </h2>
          <p className="text-gray-400 text-base max-w-md mx-auto font-light">
            {t(translations.gallery.subtitle)}
          </p>
        </div>

        {/* Filter pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`px-5 py-2 rounded-full text-sm transition-all ${
                active === cat.key
                  ? "bg-charcoal text-white"
                  : "bg-white text-gray-400 hover:text-charcoal border border-gray-100"
              }`}
            >
              {t(translations.gallery[cat.labelKey])}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <div className="masonry-grid">
          {filtered.map((img, index) => (
            <div
              key={img.src}
              className={`masonry-item cursor-pointer group ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{
                transitionProperty: "opacity, transform",
                transitionDuration: "500ms",
                transitionDelay: isVisible ? `${index * 40}ms` : "0ms",
              }}
              onClick={() => setLightbox(img.src)}
            >
              <div className="relative overflow-hidden rounded-2xl bg-gray-100">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            onClick={() => setLightbox(null)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={lightbox}
              alt="Gallery"
              width={1200}
              height={800}
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
}