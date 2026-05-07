"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useLocale } from "../lib/locale-context";
import { translations } from "../lib/i18n";
import { events } from "../lib/analytics";

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

const PREVIEW_COUNT = 6;

export default function GallerySection() {
  const { t } = useLocale();
  const [active, setActive] = useState<Category>("all");
  const [expanded, setExpanded] = useState(false);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
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
  const displayed = expanded ? filtered : filtered.slice(0, PREVIEW_COUNT);
  const hasMore = filtered.length > PREVIEW_COUNT;

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightbox(filtered[index].src);
    events.galleryLightbox();
  };

  const nextImage = () => {
    const next = (lightboxIndex + 1) % filtered.length;
    setLightboxIndex(next);
    setLightbox(filtered[next].src);
  };

  const prevImage = () => {
    const prev = (lightboxIndex - 1 + filtered.length) % filtered.length;
    setLightboxIndex(prev);
    setLightbox(filtered[prev].src);
  };

  return (
    <section id="gallery" ref={sectionRef} className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.25em] uppercase text-terra mb-3 font-medium">
            {t(translations.gallery.tag)}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-charcoal mb-4 tracking-tight">
            {t(translations.gallery.title)}
          </h2>
          <div className="section-divider mb-4" />
          <p className="text-gray-400 text-base max-w-md mx-auto font-light">
            {t(translations.gallery.subtitle)}
          </p>
        </div>

        {/* Filter pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => { setActive(cat.key); setExpanded(false); events.galleryFilter(cat.key); }}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                active === cat.key
                  ? "bg-charcoal text-white shadow-md"
                  : "bg-off-white text-gray-500 hover:text-charcoal hover:bg-cream-200"
              }`}
            >
              {t(translations.gallery[cat.labelKey])}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {displayed.map((img, index) => (
            <div
              key={img.src}
              className={`relative cursor-pointer group overflow-hidden rounded-2xl aspect-square shadow-card hover:shadow-card-hover transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${Math.min(index * 60, 400)}ms` }}
              onClick={() => openLightbox(index)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Zoom icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-10 h-10 rounded-full glass flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}

          {/* Show more overlay */}
          {hasMore && !expanded && (
            <div
              className="relative aspect-square cursor-pointer group overflow-hidden rounded-2xl bg-gradient-to-br from-charcoal to-charcoal-deep flex items-center justify-center shadow-card hover:shadow-card-hover transition-all duration-500"
              onClick={() => setExpanded(true)}
            >
              <div className="text-center text-white">
                <span className="text-4xl font-light group-hover:scale-110 inline-block transition-transform">+{filtered.length - PREVIEW_COUNT}</span>
                <p className="text-xs mt-2 text-white/50 font-light tracking-wide">
                  {t({ th: "ดูทั้งหมด", en: "View all" })}
                </p>
              </div>
              <div className="absolute inset-0 bg-terra/0 group-hover:bg-terra/10 transition-colors duration-300" />
            </div>
          )}
        </div>

        {/* Collapse button */}
        {expanded && hasMore && (
          <div className="text-center mt-8">
            <button
              onClick={() => { setExpanded(false); sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }); }}
              className="px-6 py-3 rounded-full text-sm text-gray-400 hover:text-charcoal border border-gray-200 hover:border-terra/30 transition-all duration-300"
            >
              {t({ th: "แสดงน้อยลง", en: "Show less" })}
            </button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 w-11 h-11 rounded-full glass hover:bg-white/20 text-white flex items-center justify-center transition-colors z-10"
            onClick={() => setLightbox(null)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass hover:bg-white/20 text-white flex items-center justify-center transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="relative max-w-5xl w-full mx-8 sm:mx-20" onClick={(e) => e.stopPropagation()}>
            <Image
              src={lightbox}
              alt="Gallery"
              width={1200}
              height={800}
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
          </div>

          <button
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass hover:bg-white/20 text-white flex items-center justify-center transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 text-sm font-light tracking-wide">
            {lightboxIndex + 1} / {filtered.length}
          </div>
        </div>
      )}
    </section>
  );
}