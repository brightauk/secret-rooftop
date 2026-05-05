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
  metadataBase: new URL("https://secret-rooftop.vercel.app"),
  title: "Secret Rooftop Talad Noi | ดาดฟ้าลับ ตลาดน้อย — Studio & Event Space ย่านเก่ากรุงเทพ",
  description:
    "สตูดิโอและพื้นที่อีเวนต์ในใจกลางย่านเก่ากรุงเทพ วิว 360° เหมาะสำหรับถ่าย MV ถ่ายพรีเวดดิ้ง และจัดปาร์ตี้ | Studio & Event Space in Bangkok's Old Town. Perfect for MV, Pre-wedding, and Parties.",
  keywords: [
    "rooftop rental bangkok", "studio space bangkok", "MV shooting bangkok",
    "pre-wedding bangkok", "event space talad noi", "ดาดฟ้า เช่า ถ่าย MV",
    "ตลาดน้อย", "สตูดิโอ กรุงเทพ", "จัดปาร์ตี้ ดาดฟ้า",
  ],
  openGraph: {
    title: "Secret Rooftop Talad Noi | ดาดฟ้าลับ ตลาดน้อย",
    description: "Studio & Event Space in the heart of Bangkok's Old Town. Perfect for MV, Pre-wedding, and Parties.",
    type: "website",
    images: ["/images/hero/hero.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="th" className={`${prompt.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-charcoal font-sans">{children}</body>
    </html>
  );
}