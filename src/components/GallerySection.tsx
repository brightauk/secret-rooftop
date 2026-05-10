"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useLocale } from "../lib/locale-context";
import { translations } from "../lib/i18n";
import { events } from "../lib/analytics";
import {
  staggerContainer, galleryImage, sectionHeader, sectionTag,
  sectionTitle, sectionDivider, sectionSubtitle,
  lightboxOverlay, lightboxImage,
} from "../lib/animations";

type Category = "all" | "day" | "night" | "office";

const categories: { key: Category; labelKey: "all" | "day" | "night" | "office" }[] = [
  { key: "all", labelKey: "all" },
  { key: "day", labelKey: "day" },
  { key: "night", labelKey: "night" },
  { key: "office", labelKey: "office" },
];

const images: { src: string; alt: string; category: Category }[] = [
  { src: "/images/gallery/day/01.jpg", alt: "สตูดิโอถ่ายภาพดาดฟ้า วิวแม่น้ำเจ้าพระยา ย่านตลาดน้อย", category: "day" },
  { src: "/images/gallery/day/04.jpg", alt: "เช่าสตูดิโอถ่ายภาพ ดาดฟ้า กรุงเทพ วิว360องศา", category: "day" },
  { src: "/images/gallery/day/07.jpg", alt: "พื้นที่ถ่ายพรีเวดดิ้ง ดาดฟ้าลับ ตลาดน้อย กรุงเทพ", category: "day" },
  { src: "/images/gallery/day/13.jpg", alt: "สตูดิโอถ่ายภาพ outdoor วิวกรุงเทพเก่า แสงธรรมชาติ", category: "day" },
  { src: "/images/gallery/day/14.jpg", alt: "สถานที่ถ่ายแฟชั่น ดาดฟ้า ตลาดน้อย afternoon light", category: "day" },
  { src: "/images/gallery/day/16.jpg", alt: "เช่าพื้นที่ถ่ายทำ ดาดฟ้าสตูดิโอ กรุงเทพ บรรยากาศดิบ", category: "day" },
  { src: "/images/gallery/day/18.jpg", alt: "รายละเอียดสตูดิโอดาดฟ้า ผนังคอนกรีต industrial vibe", category: "day" },
  { src: "/images/gallery/day/20.jpg", alt: "วิวแพโนรามา 360องศา สตูดิโอถ่ายภาพ ดาดฟ้า กรุงเทพ", category: "day" },
  { src: "/images/gallery/day/22.jpg", alt: "สถานที่ถ่ายภาพโกลเดนอาวเวอร์ แสงสวย ดาดฟ้า ตลาดน้อย", category: "day" },
  { src: "/images/gallery/day/23.jpg", alt: "ถ่ายพรีเวดดิ้งยามพระอาทิตย์ตก ดาดฟ้า กรุงเทพ sunset", category: "day" },
  { src: "/images/gallery/day/25.jpg", alt: "แสงเย็นสตูดิโอดาดฟ้า เหมาะถ่ายภาพ evening glow ตลาดน้อย", category: "day" },
  { src: "/images/gallery/night/01.jpg", alt: "ถ่ายภาพกลางคืน ดาดฟ้า กรุงเทพ วิวแม่น้ำ night photography", category: "night" },
  { src: "/images/gallery/night/02.jpg", alt: "สตูดิโอดาดฟ้ากลางคืน วิวไฟเมือง ถ่ายMV กรุงเทพ", category: "night" },
  { src: "/images/gallery/night/04.jpg", alt: "จัดอีเวนต์ดาดฟ้ากลางคืน วิวไฟเมือง กรุงเทพ city lights", category: "night" },
  { src: "/images/gallery/night/05.jpg", alt: "พื้นที่จัดปาร์ตี้ดาดฟ้า บรรยากาศโรแมนติก กรุงเทพ", category: "night" },
  { src: "/images/gallery/night/06.jpg", alt: "สถานที่ถ่ายทำกลางคืน ดาดฟ้าสตูดิโอ ตลาดน้อย", category: "night" },
  { src: "/images/gallery/night/08.jpg", alt: "เช่าดาดฟ้ากลางคืน บรรยากาศมู้ดดี กรุงเทพ nightlife", category: "night" },
  { src: "/images/gallery/office/01.jpg", alt: "ห้องออฟฟิศสตูดิโอ มีเก้าอี้โต๊ะไฟถ่ายภาพ ตลาดน้อย", category: "office" },
  { src: "/images/gallery/office/02.jpg", alt: "อุปกรณ์สตูดิโอถ่ายภาพ ไฟ กระจก โต๊ะ เก้าอี้ พร้อมใช้", category: "office" },
];

const PREVIEW_COUNT = 6;

export default function GallerySection() {
  const { t } = useLocale();
  const [active, setActive] = useState<Category>("all");
  const [expanded, setExpanded] = useState(false);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

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
    <section id="gallery" ref={sectionRef} className="py-12 md:py-16 bg-off-white relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <motion.div
          variants={sectionHeader}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-8"
        >
          <motion.p variants={sectionTag} className="text-xs tracking-[0.25em] uppercase text-terra mb-3 font-medium">
            {t(translations.gallery.tag)}
          </motion.p>
          <motion.h2 variants={sectionTitle} className="text-3xl sm:text-4xl md:text-5xl font-semibold text-charcoal mb-4">
            {t(translations.gallery.title)}
          </motion.h2>
          <motion.div variants={sectionDivider} className="section-divider mb-4 origin-center" />
          <motion.p variants={sectionSubtitle} className="text-gray-400 text-base max-w-md mx-auto font-light">
            {t(translations.gallery.subtitle)}
          </motion.p>
        </motion.div>

        {/* Filter pills */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.key}
              onClick={() => { setActive(cat.key); setExpanded(false); events.galleryFilter(cat.key); }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                active === cat.key
                  ? "bg-charcoal text-white shadow-md"
                  : "bg-white text-gray-500 hover:text-charcoal border border-gray-100"
              }`}
            >
              {t(translations.gallery[cat.labelKey])}
            </motion.button>
          ))}
        </motion.div>

        {/* Grid with stagger */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          key={active + (expanded ? "-all" : "")}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
        >
          <AnimatePresence mode="popLayout">
            {displayed.map((img, index) => (
              <motion.div
                key={img.src}
                variants={galleryImage}
                layout
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                className="relative cursor-pointer group overflow-hidden rounded-2xl aspect-square shadow-card hover:shadow-card-hover"
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 rounded-full glass flex items-center justify-center"
                  >
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Show more overlay */}
          {hasMore && !expanded && (
            <motion.div
              variants={galleryImage}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="relative aspect-square cursor-pointer group overflow-hidden rounded-2xl bg-gradient-to-br from-charcoal to-charcoal-deep flex items-center justify-center shadow-card hover:shadow-card-hover"
              onClick={() => setExpanded(true)}
            >
              <div className="text-center text-white">
                <span className="text-4xl font-light inline-block">+{filtered.length - PREVIEW_COUNT}</span>
                <p className="text-xs mt-2 text-white/50 font-light tracking-wide">
                  {t({ th: "ดูทั้งหมด", en: "View all" })}
                </p>
              </div>
              <div className="absolute inset-0 bg-terra/0 group-hover:bg-terra/10 transition-colors duration-300" />
            </motion.div>
          )}
        </motion.div>

        {expanded && hasMore && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-8"
          >
            <button
              onClick={() => { setExpanded(false); sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }); }}
              className="px-6 py-3 rounded-full text-sm text-gray-400 hover:text-charcoal border border-gray-200 hover:border-terra/30 transition-all duration-300"
            >
              {t({ th: "แสดงน้อยลง", en: "Show less" })}
            </button>
          </motion.div>
        )}

        {/* Google Drive — more photos */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-8"
        >
          <a
            href="https://drive.google.com/drive/folders/1k44ryDzGnwZUg1Atqp45f0ojVB8Qzapc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-terra hover:text-terra-dark transition-colors duration-300 group"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="border-b border-terra/30 group-hover:border-terra transition-colors">
              {t({ th: "ดูรูปเพิ่มเติมใน Google Drive", en: "View more photos on Google Drive" })}
            </span>
            <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Premium Lightbox with AnimatePresence */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            variants={lightboxOverlay}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center"
            onClick={() => setLightbox(null)}
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-6 right-6 w-11 h-11 rounded-full glass hover:bg-white/20 text-white flex items-center justify-center z-10"
              onClick={() => setLightbox(null)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1, x: -4 }}
              whileTap={{ scale: 0.9 }}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass hover:bg-white/20 text-white flex items-center justify-center z-10"
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            <motion.div
              key={lightbox}
              variants={lightboxImage}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative max-w-5xl w-full mx-8 sm:mx-20"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightbox}
                alt="Gallery"
                width={1200}
                height={800}
                className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl"
                priority
              />
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.1, x: 4 }}
              whileTap={{ scale: 0.9 }}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass hover:bg-white/20 text-white flex items-center justify-center z-10"
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 text-sm font-light tracking-wide"
            >
              {lightboxIndex + 1} / {filtered.length}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}