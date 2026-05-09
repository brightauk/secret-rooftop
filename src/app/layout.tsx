import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const prompt = Prompt({
  variable: "--font-prompt",
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});


export const metadata: Metadata = {
  metadataBase: new URL("https://secret-rooftop-site.vercel.app"),
  title: "เช่าสตูดิโอถ่ายภาพ ดาดฟ้า ตลาดน้อย | Secret Rooftop — Studio & Event Space กรุงเทพ",
  description:
    "เช่าสตูดิโอถ่ายภาพ ดาดฟ้า วิว360° ย่านตลาดน้อย กรุงเทพ เหมาะสำหรับถ่ายMV ถ่ายพรีเวดดิ้ง ถ่ายแฟชั่น จัดอีเวนต์ จัดปาร์ตี้ เช่าพื้นที่ถ่ายทำ เริ่ม 1,500฿/ชม. | Rooftop studio rental in Bangkok Old Town — MV, pre-wedding, fashion shoot, event space from 1,500 THB/hr.",
  keywords: [
    // Thai - high priority
    "เช่าสตูดิโอถ่ายภาพ", "เช่าดาดฟ้า", "เช่าสตูดิโอ", "สตูดิโอถ่ายภาพ กรุงเทพ",
    "ดาดฟ้า เช่า", "ถ่าย MV กรุงเทพ", "ถ่ายพรีเวดดิ้ง กรุงเทพ",
    "เช่าพื้นที่ถ่ายทำ", "เช่าสตูดิโอถ่ายวีดีโอ", "จัดอีเวนต์ กรุงเทพ",
    "จัดปาร์ตี้ ดาดฟ้า", "ถ่ายแฟชั่น กรุงเทพ", "สตูดิโอ ตลาดน้อย",
    "เช่าพื้นที่จัดงาน", "ดาดฟ้า ตลาดน้อย", "ถ่ายภาพ ดาดฟ้า",
    "สตูดิโอถ่ายภาพ ราคาถูก", "เช่า location ถ่ายหนัง",
    // English - high priority
    "rooftop studio rental bangkok", "studio space bangkok", "photoshoot location bangkok",
    "MV shooting bangkok", "pre-wedding shoot bangkok", "event space bangkok",
    "rooftop rental bangkok", "fashion shoot bangkok", "video production bangkok",
    "talad noi studio", "bangkok old town studio", "party venue bangkok",
    "outdoor studio bangkok", "content creation space bangkok",
    "studio rental near me bangkok", "affordable studio bangkok",
  ],
  openGraph: {
    title: "เช่าสตูดิโอถ่ายภาพ ดาดฟ้า ตลาดน้อย | Secret Rooftop Studio Bangkok",
    description: "เช่าดาดฟ้าถ่ายภาพ วิว360° ย่านเก่ากรุงเทพ ถ่ายMV พรีเวดดิ้ง แฟชั่น จัดอีเวนต์ เริ่ม 1,500฿ | Rooftop studio for MV, pre-wedding & events from 1,500 THB/hr",
    type: "website",
    locale: "th_TH",
    alternateLocale: "en_US",
    url: "https://secret-rooftop-site.vercel.app",
    siteName: "Secret Rooftop Talad Noi",
    images: [{ url: "/images/hero/hero.jpg", width: 1200, height: 630, alt: "Secret Rooftop — สตูดิโอถ่ายภาพ ดาดฟ้า ตลาดน้อย กรุงเทพ" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Secret Rooftop — เช่าสตูดิโอถ่ายภาพ ดาดฟ้า กรุงเทพ",
    description: "เช่าดาดฟ้าถ่ายภาพ วิว360° ย่านตลาดน้อย ถ่ายMV พรีเวดดิ้ง จัดอีเวนต์ เริ่ม 1,500฿/ชม.",
    images: ["/images/hero/hero.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://secret-rooftop-site.vercel.app" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://secret-rooftop-site.vercel.app/#business",
        name: "Secret Rooftop Talad Noi",
        alternateName: ["ดาดฟ้าลับ ตลาดน้อย", "เช่าสตูดิโอถ่ายภาพ ดาดฟ้า กรุงเทพ", "Secret Rooftop Studio"],
        description: "เช่าสตูดิโอถ่ายภาพ ดาดฟ้า วิว360° ย่านตลาดน้อย กรุงเทพ เหมาะสำหรับถ่ายMV ถ่ายพรีเวดดิ้ง ถ่ายแฟชั่น จัดอีเวนต์ จัดปาร์ตี้ เช่าพื้นที่ถ่ายทำ เริ่ม 1,500฿/ชม. | Rooftop studio rental in Bangkok Old Town — MV, pre-wedding, fashion shoot, event space from 1,500 THB/hr.",
        url: "https://secret-rooftop-site.vercel.app",
        telephone: "+669-000-0000",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Soi Chao Sua Son Ja, Near Mother Roaster, Talad Noi",
          addressLocality: "Bangkok",
          addressRegion: "Samphanthawong",
          postalCode: "10100",
          addressCountry: "TH",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 13.733322,
          longitude: 100.5122616,
        },
        priceRange: "฿฿",
        image: "https://secret-rooftop-site.vercel.app/images/hero/hero.jpg",
        sameAs: ["https://fastwork.co/user/brightauk/studio-rental-10056485"],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Studio Rental Packages",
          itemListElement: [
            { "@type": "Offer", name: "Hourly Shoot", description: "เช่าสตูดิโอถ่ายภาพรายชั่วโมง", price: "1500", priceCurrency: "THB" },
            { "@type": "Offer", name: "Hourly Production", description: "เช่าสตูดิโอถ่ายวีดีโอพร้อมทีม Production", price: "2000", priceCurrency: "THB" },
            { "@type": "Offer", name: "Half Day", description: "เช่าสตูดิโอครึ่งวัน", price: "5000", priceCurrency: "THB" },
            { "@type": "Offer", name: "Full Day", description: "เช่าสตูดิโอเต็มวัน", price: "8000", priceCurrency: "THB" },
          ],
        },
        knowsAbout: [
          "เช่าสตูดิโอถ่ายภาพ", "เช่าดาดฟ้า", "ถ่าย MV", "ถ่ายพรีเวดดิ้ง",
          "ถ่ายแฟชั่น", "จัดอีเวนต์", "เช่าพื้นที่ถ่ายทำ", "Studio rental", "Rooftop studio",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://secret-rooftop-site.vercel.app/#website",
        url: "https://secret-rooftop-site.vercel.app",
        name: "Secret Rooftop Talad Noi",
        inLanguage: ["th", "en"],
        potentialAction: {
          "@type": "ReserveAction",
          name: "Book Studio",
          target: "https://secret-rooftop-site.vercel.app/#contact",
        },
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "เช่าสตูดิโอถ่ายภาพที่ Secret Rooftop ราคาเท่าไหร่?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "เริ่มต้นที่ 1,500 บาท/ชั่วโมง สำหรับถ่ายภาพ และ 2,000 บาท/ชั่วโมง สำหรับถ่ายวีดีโอพร้อมทีม production หรือเช่าครึ่งวัน 5,000 บาท / เต็มวัน 8,000 บาท",
        },
      },
      {
        "@type": "Question",
        "name": "How much does it cost to rent the studio?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Starting from 1,500 THB/hour for photoshoot, 2,000 THB/hour for video production, 5,000 THB for half day, and 8,000 THB for full day.",
        },
      },
      {
        "@type": "Question",
        "name": "Secret Rooftop อยู่ที่ไหน?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ตั้งอยู่ในซอยเจ้าสัวสอนจ้า ใกล้ร้าน Mother Roaster ย่านตลาดน้อย กรุงเทพฯ — ใจกลางย่านเก่า วิวแม่น้ำเจ้าพระยา 360°",
        },
      },
      {
        "@type": "Question",
        "name": "เหมาะสำหรับงานอะไรบ้าง?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "เหมาะสำหรับถ่าย MV, ถ่ายพรีเวดดิ้ง, ถ่ายแฟชั่น, จัดปาร์ตี้ส่วนตัว, ทำคอนเทนต์, ถ่ายทำ, และอีเวนต์เล็กๆ",
        },
      },
    ],
  };

  return (
    <html lang="th" className={`${prompt.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://maps.google.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AggregateRating",
              "itemReviewed": { "@id": "https://secret-rooftop-site.vercel.app/#business" },
              "ratingValue": "5.0",
              "bestRating": "5",
              "worstRating": "1",
              "ratingCount": "50",
              "reviewCount": "12",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Review",
              "itemReviewed": { "@id": "https://secret-rooftop-site.vercel.app/#business" },
              "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
              "author": { "@type": "Person", "name": "Piya" },
              "reviewBody": "Incredible view! Every angle is photogenic. Golden hour was absolutely stunning. Highly recommended!",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Review",
              "itemReviewed": { "@id": "https://secret-rooftop-site.vercel.app/#business" },
              "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
              "author": { "@type": "Person", "name": "Nittaya" },
              "reviewBody": "Hosted my birthday party here. Amazing atmosphere, the owner is super friendly and helpful. Definitely coming back!",
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-charcoal font-sans grain">{children}</body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX"} />
    </html>
  );
}
