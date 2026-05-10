// JSON-LD structured data for SEO
// All schemas are defined here to keep layout.tsx clean

const SITE_URL = "https://secret-rooftop.com";
const BUSINESS_ID = `${SITE_URL}/#business`;

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": BUSINESS_ID,
      name: "Secret Rooftop Talad Noi",
      alternateName: [
        "ดาดฟ้าลับ ตลาดน้อย",
        "เช่าสตูดิโอถ่ายภาพ ดาดฟ้า กรุงเทพ",
        "Secret Rooftop Studio",
      ],
      description:
        "เช่าสตูดิโอถ่ายภาพ ดาดฟ้า วิว360° ย่านตลาดน้อย กรุงเทพ เหมาะสำหรับถ่ายMV ถ่ายพรีเวดดิ้ง ถ่ายแฟชั่น จัดอีเวนต์ จัดปาร์ตี้ เช่าพื้นที่ถ่ายทำ เริ่ม 1,500฿/ชม. | Rooftop studio rental in Bangkok Old Town — MV, pre-wedding, fashion shoot, event space from 1,500 THB/hr.",
      url: SITE_URL,
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
      image: `${SITE_URL}/images/hero/hero.jpg`,
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
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "08:00",
        closes: "22:00",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        bestRating: "5",
        worstRating: "1",
        ratingCount: "50",
        reviewCount: "12",
      },
      knowsAbout: [
        "เช่าสตูดิโอถ่ายภาพ", "เช่าดาดฟ้า", "ถ่าย MV", "ถ่ายพรีเวดดิ้ง",
        "ถ่ายแฟชั่น", "จัดอีเวนต์", "เช่าพื้นที่ถ่ายทำ", "Studio rental", "Rooftop studio",
        "ถ่ายคอนเทนต์", "เช่าสถานที่ถ่ายทำ", "เช่าสถานที่จัดงาน",
        "content creator space", "photoshoot location", "event space",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Secret Rooftop Talad Noi",
      inLanguage: ["th", "en"],
      potentialAction: {
        "@type": "ReserveAction",
        name: "Book Studio",
        target: `${SITE_URL}/#contact`,
      },
    },
  ],
};

export const faqSchema = {
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

type ReviewData = { author: string; body: string };

const reviews: ReviewData[] = [
  { author: "Piya", body: "Incredible view! Every angle is photogenic. Golden hour was absolutely stunning. Highly recommended!" },
  { author: "Nittaya", body: "Hosted my birthday party here. Amazing atmosphere, the owner is super friendly and helpful. Definitely coming back!" },
  { author: "Thana", body: "Shot our entire MV here. The river view is stunning, natural light is perfect. Our DP said it was incredibly easy to shoot." },
];

export const reviewSchemas = reviews.map(({ author, body }) => ({
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": { "@id": BUSINESS_ID },
  "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
  "author": { "@type": "Person", "name": author },
  "reviewBody": body,
}));

// All schemas in a flat array for easy iteration in layout
export const allSchemas = [
  localBusinessSchema,
  faqSchema,
  ...reviewSchemas,
];