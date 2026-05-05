export type Locale = "th" | "en";

export const translations = {
  // Navbar
  nav: {
    home: { th: "หน้าแรก", en: "Home" },
    highlights: { th: "จุดเด่น", en: "Highlights" },
    gallery: { th: "แกลเลอรี", en: "Gallery" },
    rates: { th: "ราคา", en: "Rates" },
    location: { th: "ที่ตั้ง", en: "Location" },
    contact: { th: "ติดต่อ", en: "Contact" },
    bookNow: { th: "จองเลย", en: "Book Now" },
  },
  // Hero
  hero: {
    badge: { th: "ย่านเก่า กรุงเทพ", en: "Bangkok's Old Town" },
    title: { th: "ดาดฟ้าลับ", en: "Secret Rooftop" },
    titleLine2: { th: "ตลาดน้อย", en: "Talad Noi" },
    subtitle: {
      th: "สตูดิโอและพื้นที่อีเวนต์ในใจกลางย่านเก่ากรุงเทพ วิว 360° เหมาะสำหรับถ่าย MV ถ่ายพรีเวดดิ้ง และจัดปาร์ตี้",
      en: "Studio & Event Space in the heart of Bangkok's Old Town. 360° view — perfect for MV, Pre-wedding, and Parties.",
    },
    checkRates: { th: "ดูราคา", en: "Check Rates" },
    bookLine: { th: "จองผ่าน LINE", en: "Book via LINE" },
    scrollDown: { th: "เลื่อนลง", en: "Scroll to explore" },
  },
  // Highlights
  highlights: {
    tag: { th: "ทำไมต้องเรา", en: "Why Choose Us" },
    title: { th: "จุดเด่นของที่นี่", en: "The Space & Highlights" },
    subtitle: {
      th: "ทุกสิ่งที่ทำให้ดาดฟ้าแห่งนี้พิเศษ",
      en: "Everything that makes this rooftop special",
    },
    items: [
      {
        icon: "🌇",
        title: { th: "จุดชมพระอาทิตย์ตก", en: "Sunset Spot" },
        desc: {
          th: "วิวแม่น้ำเจ้าพระยาและ skyline ย่านเก่าที่สวยที่สุด ยามโกลเดนอาวเวอร์งดงมาก",
          en: "The best view of the Chao Phraya River and old town skyline. Golden hour here is magical.",
        },
      },
      {
        icon: "📸",
        title: { th: "บรรยากาศดิบๆ", en: "Raw & Rustic Vibe" },
        desc: {
          th: "เท็กเจอร์คอนกรีต ผนังวินเทจ บรรยากาศอินดัสเทรียล — ถ่ายรูปออกมาสวยทุกมุม",
          en: "Authentic urban texture with exposed concrete and vintage walls — perfect for photography.",
        },
      },
      {
        icon: "🛋️",
        title: { th: "มีอุปกรณ์ให้", en: "Props Included" },
        desc: {
          th: "ไฟถ่ายภาพ 1 ดวง / เก้าอี้ โต๊ะ / กระจก / พร้อมเต้ารับไฟฟ้า — ของพวกนี้รวมอยู่ในราคาแล้ว",
          en: "1 photography light, chairs, tables, mirrors, and power outlets — all included in the price.",
        },
      },
      {
        icon: "📍",
        title: { th: "ซ่อนอยู่ในตลาดน้อย", en: "Hidden Gem" },
        desc: {
          th: "ทำเลส่วนตัวในย่านตลาดน้อยที่เต็มไปด้วยเสน่ห์ — ความลับที่รอให้คุณมาค้นพบ",
          en: "Private and exclusive in the charming Talad Noi neighborhood — a secret waiting to be discovered.",
        },
      },
      {
        icon: "🎥",
        title: { th: "ใช้ได้หลายอย่าง", en: "Multi-Purpose" },
        desc: {
          th: "เหมาะสำหรับถ่าย MV ถ่ายพรีเวดดิ้ง จัดปาร์ตี้ส่วนตัว ทำคอนเทนต์ หรืออีเวนต์เล็กๆ",
          en: "Perfect for MV shooting, pre-wedding, private parties, content creation, and small events.",
        },
      },
      {
        icon: "🌃",
        title: { th: "กลางวันสวย กลางคืนมันส์", en: "Day & Night" },
        desc: {
          th: "กลางวันแสงสวยสำหรับถ่ายภาพ พอตกค่ำจะเปลี่ยนเป็นพื้นที่ที่แสนโรแมนติกกับแสงไฟเมือง",
          en: "Stunning daylight for golden hour shots, transforms into a magical venue with city lights at night.",
        },
      },
    ],
  },
  // Gallery
  gallery: {
    tag: { th: "ภาพถ่าย", en: "Visual Proof" },
    title: { th: "แกลเลอรี", en: "Gallery" },
    subtitle: {
      th: "ดาดฟ้าของเราในมุมต่างๆ — ทั้งกลางวันและกลางคืน",
      en: "Our rooftop from every angle — day and night",
    },
    all: { th: "ทั้งหมด", en: "All" },
    day: { th: "กลางวัน", en: "Daytime" },
    night: { th: "กลางคืน", en: "Night" },
    office: { th: "ห้องออฟฟิศ", en: "Office" },
  },
  // Pricing
  pricing: {
    tag: { th: "ราคา", en: "Rate Card" },
    title: { th: "แพ็กเกจ & ราคา", en: "Packages & Pricing" },
    subtitle: {
      th: "เลือกแพ็กเกจที่เหมาะกับคุณ",
      en: "Choose the package that fits your needs",
    },
    popular: { th: "ยอดนิยม", en: "Most Popular" },
    bookLine: { th: "จองผ่าน LINE", en: "Book via LINE" },
    orFastwork: { th: "หรือจองผ่าน Fastwork →", en: "or book via Fastwork →" },
    getQuote: { th: "ขอใบเสนอราคา", en: "Get a Quote" },
    note: {
      th: "* ราคาอาจเปลี่ยนแปลงตามช่วงเวลาและจำนวนคน หากมีคนเยอะกรุณาติดต่อสอบถามราคาเพิ่มเติม",
      en: "* Prices may vary depending on time and number of guests. For large groups, please contact us for custom pricing.",
    },
    halfDay: {
      name: { th: "ครึ่งวัน", en: "Half-Day" },
      duration: { th: "4 ชั่วโมง", en: "4 Hours" },
      desc: {
        th: "เหมาะสำหรับถ่ายคอนเทนต์สั้นๆ เซสชันพระอาทิตย์ตก หรือถ่ายทำเบื้องต้น",
        en: "Perfect for short shoots, content creation, or a quick sunset session.",
      },
      features: [
        { th: "ใช้พื้นที่ 4 ชั่วโมง", en: "4 hours access" },
        { th: "สอบถามรายละเอียดเพิ่มเติมได้", en: "Contact us for details" },
      ],
    },
    fullDay: {
      name: { th: "เต็มวัน", en: "Full-Day" },
      duration: { th: "8 ชั่วโมง", en: "8 Hours" },
      desc: {
        th: "คุ้มที่สุดสำหรับถ่าย MV ถ่ายพรีเวดดิ้ง หรืออีเวนต์ทั้งวัน",
        en: "Best value for MV shooting, pre-wedding, or full-day events.",
      },
      features: [
        { th: "ใช้พื้นที่ 8 ชั่วโมง", en: "8 hours access" },
        { th: "สอบถามรายละเอียดเพิ่มเติมได้", en: "Contact us for details" },
      ],
    },
    event: {
      name: { th: "จัดอีเวนต์", en: "Event Hosting" },
      duration: { th: "ตามตกลง", en: "Custom" },
      desc: {
        th: "แพ็กเกจสำหรับจัดปาร์ตี้ งานเลี้ยงส่งท้าย วันเกิด หรืออีเวนต์พิเศษ",
        en: "Custom packages for private parties, birthdays, corporate events, or special occasions.",
      },
      features: [
        { th: "เวลายืดหยุ่น", en: "Flexible hours" },
        { th: "สอบถามรายละเอียดเพิ่มเติมได้", en: "Contact us for details" },
      ],
    },
  },
  // Location
  location: {
    tag: { th: "หาเรา", en: "Find Us" },
    title: { th: "ที่ตั้ง & ที่จอดรถ", en: "Location & Parking" },
    subtitle: {
      th: "หาเราไม่ยาก — ซ่อนอยู่ในย่านตลาดน้อย ใจกลางกรุงเทพเก่า",
      en: "Not hard to find — hidden in Talad Noi, the heart of Bangkok's Old Town",
    },
    getHere: { th: "มาถึงได้ยังไง", en: "How to Get Here" },
    parking: { th: "ที่จอดรถใกล้เคียง", en: "Nearby Parking" },
    openMaps: { th: "เปิดใน Google Maps →", en: "Open in Google Maps →" },
    directions: [
      { icon: "🚇", title: { th: "รถไฟฟ้า MRT", en: "By MRT" }, desc: { th: "ลงสถานีสามยอด ออกทางออด 3 เดินประมาณ 10 นาทีไปยังซอยตลาดน้อย หรือนั่งมอเตอร์ไซค์รับจ้าง", en: "Sam Yot station, Exit 3. Walk ~10 min to Talad Noi alley, or take a motorbike taxi." } },
      { icon: "🚢", title: { th: "เรือ", en: "By Boat" }, desc: { th: "นั่งเรือโดยสารแม่น้ำเจ้าพระยา ลงท่าราชวงศ์ เดินเข้าซอยตลาดน้อยอีก ~5 นาที", en: "Chao Phraya Express Boat to Ratchawong pier, then walk into Talad Noi alley ~5 minutes." } },
      { icon: "🚗", title: { th: "รถยนต์", en: "By Car" }, desc: { th: "ขับมาย่านตลาดน้อย ผ่านถนนเจริญกรุง ที่จอดรถบนถนนมีน้อย — ดูที่จอดรถส่วนตัวด้านล่าง", en: "Navigate via Charoen Krung Road to Talad Noi. Street parking is limited — see parking options below." } },
      { icon: "🚶", title: { th: "ขึ้นไปบนดาดฟ้า", en: "The Walk Up" }, desc: { th: "เข้าตึกแล้วขึ้นบันไดไปดาดฟ้า (ไม่มีลิฟต์) ขึ้นไม่สูงมาก สู้หน่อยนะ! 🏃", en: "Take the stairs to the rooftop (no elevator). It's worth every step! 🏃" } },
    ],
  },
  // Contact & FAQ
  contact: {
    tag: { th: "ติดต่อเรา", en: "Get in Touch" },
    title: { th: "ติดต่อ & คำถาม", en: "Contact & FAQ" },
    subtitle: {
      th: "มีคำถาม? สอบถามเราได้เลย — หรือจองเลยตอนนี้",
      en: "Questions? Ask us anything — or book right now",
    },
    bookNow: { th: "จองเลย", en: "Book Now" },
    quickReply: {
      th: "💬 ตอบกลับเร็ว! ภายใน 30 นาทีในเวลาทำการ (9:00 - 21:00)",
      en: "💬 Quick response guaranteed! Within 30 minutes during business hours (9:00 - 21:00).",
    },
    faqTitle: { th: "คำถามที่พบบ่อย", en: "Frequently Asked Questions" },
    faqs: [
      { q: { th: "เอาอาหารและเครื่องดื่มเข้าไปได้ไหม?", en: "Can we bring food and drinks?" }, a: { th: "ได้เลย! เอาอาหารและเครื่องดื่มมาเองได้ ในห้องออฟฟิศมีตู้เย็นให้ใช้ด้วย", en: "Yes! You can bring your own food and drinks. We have a small fridge in the office room too." } },
      { q: { th: "มีลิฟต์ไหม?", en: "Is there an elevator?" }, a: { th: "ไม่มีครับ ต้องขึ้นบันไดไปดาดฟ้า ไม่สูงมาก ขึ้นไปแล้วคุ้มค่า! 🏃‍♂️", en: "No elevator. You'll need to take the stairs. It's a short climb and totally worth it! 🏃‍♂️" } },
      { q: { th: "รับคนได้สูงสุดกี่คน?", en: "What's the maximum capacity?" }, a: { th: "จุได้เยอะมากครับ! แต่ถ้าคนเยอะจริงๆ จะต้องคุยเรื่องราคาเพิ่มอีกทีนะครับ", en: "We can accommodate quite a lot of people! For large groups, we'll need to discuss pricing separately." } },
      { q: { th: "ถ่ายทำผ่านเที่ยงคืนได้ไหม?", en: "Can we shoot after midnight?" }, a: { th: "ได้ครับ แต่ต้องนัดล่วงหน้า และอาจมีค่าใช้จ่ายเพิ่มสำหรับช่วงดึก ติดต่อสอบถามได้เลย", en: "Extended hours possible with prior arrangement. Additional fees may apply for late-night sessions." } },
      { q: { th: "มีไฟฟ้าใช้ไหม?", en: "Is there electricity available?" }, a: { th: "มีครับ มีเต้ารับไฟฟ้าบนดาดฟ้า ถ้าใช้อุปกรณ์เยอะ แจ้งล่วงหน้าได้เลย", en: "Yes, standard power outlets are available on the rooftop. For heavy equipment, please let us know in advance." } },
      { q: { th: "มีอุปกรณ์อะไรให้บ้าง?", en: "What props are included?" }, a: { th: "ไฟถ่ายภาพ 1 ดวง / เก้าอี้ / โต๊ะ / กระจก / พร้อมเต้ารับไฟฟ้า — รวมอยู่ในราคาแล้ว", en: "1 photography light, chairs, tables, mirrors, and power outlets — all included in the price." } },
      { q: { th: "มีห้องน้ำไหม?", en: "Is there a bathroom?" }, a: { th: "มีครับ! ห้องน้ำรวมอยู่ชั้นล่างจากดาดฟ้า 1 ชั้น", en: "Yes! Shared bathroom one floor below the rooftop." } },
      { q: { th: "มาดูสถานที่ก่อนจองได้ไหม?", en: "Can we visit before booking?" }, a: { th: "ได้ครับ! ดูได้ไม่เกิน 15 นาที ติดต่อนัดผ่าน LINE ได้เลย", en: "Absolutely! Site visits up to 15 minutes. Contact us via LINE to schedule." } },
    ],
  },
  // Footer
  footer: {
    desc: {
      th: "ดาดฟ้าสตูดิโอและพื้นที่จัดอีเวนต์ในย่านเก่ากรุงเทพ เหมาะสำหรับถ่าย MV ถ่ายพรีเวดดิ้ง และจัดปาร์ตี้ส่วนตัว",
      en: "A hidden rooftop studio & event space in Bangkok's Old Town. Perfect for MV, pre-wedding, and private parties.",
    },
    ctaTitle: { th: "พร้อมจองแล้วใช่ไหม?", en: "Ready to Book?" },
    ctaDesc: {
      th: "สงวนวันที่คุณต้องการก่อนใคร — ส่งข้อความถึงเราผ่าน LINE วันนี้",
      en: "Reserve your date before it's taken — message us on LINE today.",
    },
    bookNow: { th: "จองเลย", en: "Book Now" },
    quickLinks: { th: "ลิงก์ด่วน", en: "Quick Links" },
    contactTitle: { th: "ติดต่อ", en: "Contact" },
    madeWith: { th: "ทำด้วย 🌅 ที่ย่านเก่ากรุงเทพ", en: "Made with 🌅 in Bangkok's Old Town" },
  },
} as const;

export type TranslationKey = keyof typeof translations;

export function t<T extends { th: string; en: string }>(obj: T, locale: Locale): string {
  return obj[locale];
}