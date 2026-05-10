import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { allSchemas } from "../lib/schema";
import "./globals.css";

const prompt = Prompt({
  variable: "--font-prompt",
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://secret-rooftop.com"),
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
    "studio rental near me bangkok", "affordable studio bangkok",
  ],
  openGraph: {
    title: "เช่าสตูดิโอถ่ายภาพ ดาดฟ้า ตลาดน้อย | Secret Rooftop Studio Bangkok",
    description: "เช่าดาดฟ้าถ่ายภาพ วิว360° ย่านเก่ากรุงเทพ ถ่ายMV พรีเวดดิ้ง แฟชั่น จัดอีเวนต์ เริ่ม 1,500฿ | Rooftop studio for MV, pre-wedding & events from 1,500 THB/hr",
    type: "website",
    locale: "th_TH",
    alternateLocale: "en_US",
    url: "https://secret-rooftop.com",
    siteName: "Secret Rooftop Talad Noi",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Secret Rooftop — สตูดิโอถ่ายภาพ ดาดฟ้า ตลาดน้อย กรุงเทพ" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Secret Rooftop — เช่าสตูดิโอถ่ายภาพ ดาดฟ้า กรุงเทพ",
    description: "เช่าดาดฟ้าถ่ายภาพ วิว360° ย่านตลาดน้อย ถ่ายMV พรีเวดดิ้ง จัดอีเวนต์ เริ่ม 1,500฿/ชม.",
    images: ["/opengraph-image"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://secret-rooftop.com" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="th" className={`${prompt.variable} antialiased`}>
      <head>
        <link rel="preconnect" href="https://maps.google.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        {allSchemas.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body className="min-h-screen flex flex-col bg-white text-charcoal font-sans grain">{children}</body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX"} />
    </html>
  );
}