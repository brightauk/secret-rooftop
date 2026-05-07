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
    <section id="gallery" ref={sectionRef} className="py-24 md:py-32 bg-off-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="text-center mb-12">
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
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => { setActive(cat.key); setExpanded(false); }}
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

        {/* Featured grid — first image large, rest small (Airbnb style) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
          {displayed.map((img, index) => {
            // First image spans 2 cols + 2 rows on sm+
            const isHero = index === 0 && !expanded;
            return (
              <div
                key={img.src}
                className={`relative cursor-pointer group overflow-hidden rounded-xl ${
                  isHero ? "col-span-2 row-span-2 aspect-square sm:aspect-auto" : "aspect-square"
                } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                style={{
                  transitionProperty: "opacity, transform",
                  transitionDuration: "400ms",
                  transitionDelay: isVisible ? `${Math.min(index * 40, 300)}ms` : "0ms",
                }}
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes={isHero ? "(max-width: 640px) 100vw, 50vw" : "(max-width: 640px) 50vw, 25vw"}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300" />
              </div>
            );
          })}

          {/* Show more overlay on the 6th image */}
          {hasMore && !expanded && (
            <div
              className="relative aspect-square cursor-pointer group overflow-hidden rounded-xl bg-charcoal/80 flex items-center justify-center"
              onClick={() => setExpanded(true)}
            >
              <div className="text-center text-white">
                <span className="text-3xl font-light">+{filtered.length - PREVIEW_COUNT}</span>
                <p className="text-xs mt-1 text-white/60 font-light">
                  {t({ th: "ดูทั้งหมด", en: "View all" })}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Collapse button when expanded */}
        {expanded && hasMore && (
          <div className="text-center mt-6">
            <button
              onClick={() => { setExpanded(false); sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }); }}
              className="px-6 py-2.5 rounded-full text-sm text-gray-400 hover:text-charcoal border border-gray-200 hover:border-gray-300 transition-all"
            >
              {t({ th: "แสดงน้อยลง", en: "Show less" })}
            </button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-10"
            onClick={() => setLightbox(null)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="relative max-w-4xl w-full mx-16" onClick={(e) => e.stopPropagation()}>
            <Image
              src={lightbox}
              alt="Gallery"
              width={1200}
              height={800}
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
            />
          </div>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-sm">
            {lightboxIndex + 1} / {filtered.length}
          </div>
        </div>
      )}
    </section>
  );
}