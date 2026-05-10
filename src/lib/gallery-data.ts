export type Category = "all" | "day" | "night" | "office";

export type GalleryImage = { src: string; alt: string; category: Category };

export const galleryImages: GalleryImage[] = [
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