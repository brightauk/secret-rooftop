import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";

const prompt = Prompt({
  variable: "--font-prompt",
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://secret-rooftop-site.vercel.app"),
  title: "Secret Rooftop Talad Noi | ดาดฟ้าลับ ตลาดน้อย — Studio & Event Space ย่านเก่ากรุงเทพ",
  description:
    "สตูดิโอและพื้นที่อีเวนต์ในใจกลางย่านเก่ากรุงเทพ วิว 360° เหมาะสำหรับถ่าย MV ถ่ายพรีเวดดิ้ง และจัดปาร์ตี้ | Studio & Event Space in Bangkok's Old Town. Perfect for MV, Pre-wedding, and Parties.",
  keywords: [
    "rooftop rental bangkok", "studio space bangkok", "MV shooting bangkok",
    "pre-wedding bangkok", "event space talad noi", "ดาดฟ้า เช่า ถ่าย MV",
    "ตลาดน้อย", "สตูดิโอ กรุงเทพ", "จัดปาร์ตี้ ดาดฟ้า",
    "rooftop studio bangkok", "photoshoot location bangkok", "talad noi studio",
  ],
  openGraph: {
    title: "Secret Rooftop Talad Noi | ดาดฟ้าลับ ตลาดน้อย",
    description: "Studio & Event Space in the heart of Bangkok's Old Town. Perfect for MV, Pre-wedding, and Parties.",
    type: "website",
    locale: "th_TH",
    alternateLocale: "en_US",
    url: "https://secret-rooftop-site.vercel.app",
    siteName: "Secret Rooftop Talad Noi",
    images: [{ url: "/images/hero/hero.jpg", width: 1200, height: 630, alt: "Secret Rooftop Talad Noi" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Secret Rooftop Talad Noi | Studio & Event Space",
    description: "Studio & Event Space in Bangkok's Old Town. 360° view — perfect for MV, Pre-wedding, and Parties.",
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
    "@type": "LocalBusiness",
    name: "Secret Rooftop Talad Noi",
    alternateName: "ดาดฟ้าลับ ตลาดน้อย",
    description: "Studio & Event Space in Bangkok's Old Town. 360° rooftop view — perfect for MV shooting, pre-wedding, and parties.",
    url: "https://secret-rooftop-site.vercel.app",
    telephone: "+669-000-0000",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Soi Vanich 2, Charoen Krung Road",
      addressLocality: "Bangkok",
      addressRegion: "Samphanthawong",
      postalCode: "10100",
      addressCountry: "TH",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 13.7385,
      longitude: 100.5117,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      opens: "09:00",
      closes: "21:00",
    },
    priceRange: "฿฿",
    image: "https://secret-rooftop-site.vercel.app/images/hero/hero.jpg",
    sameAs: ["https://fastwork.co/user/brightauk/studio-rental-10056485"],
  };

  return (
    <html lang="th" className={`${prompt.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-charcoal font-sans">{children}</body>
    </html>
  );
}
