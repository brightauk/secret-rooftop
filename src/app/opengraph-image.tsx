import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";

export const alt = "Secret Rooftop — เช่าสตูดิโอถ่ายภาพ ดาดฟ้า ตลาดน้อย กรุงเทพ";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  // Read hero image
  let heroImageData: Buffer | null = null;
  try {
    heroImageData = await readFile(
      join(process.cwd(), "public/images/hero/hero.jpg")
    );
  } catch {
    // fallback if image not found
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          backgroundColor: "#1A1A1A",
        }}
      >
        {/* Background image */}
        {heroImageData && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={`data:image/jpeg;base64,${heroImageData.toString("base64")}`}
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 30%",
            }}
          />
        )}

        {/* Dark gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.1) 100%)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "60px",
          }}
        >
          {/* Tagline */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "16px",
            }}
          >
            <div
              style={{
                width: "32px",
                height: "1px",
                backgroundColor: "#B87333",
              }}
            />
            <span
              style={{
                fontSize: "16px",
                color: "#B87333",
                letterSpacing: "4px",
                textTransform: "uppercase",
                fontFamily: "sans-serif",
              }}
            >
              TALAD NOI • BANGKOK
            </span>
          </div>

          {/* Main title */}
          <div
            style={{
              fontSize: "72px",
              fontWeight: 700,
              color: "white",
              lineHeight: 1.1,
              fontFamily: "sans-serif",
              marginBottom: "8px",
            }}
          >
            Secret Rooftop
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: "28px",
              color: "rgba(255,255,255,0.85)",
              fontWeight: 300,
              fontFamily: "sans-serif",
              marginBottom: "24px",
            }}
          >
            Studio & Event Space — สตูดิโอถ่ายภาพ ดาดฟ้า วิว 360°
          </div>

          {/* Bottom row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* Price */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "24px",
              }}
            >
              <span
                style={{
                  fontSize: "20px",
                  color: "rgba(255,255,255,0.7)",
                  fontFamily: "sans-serif",
                }}
              >
                เริ่มต้น 1,500฿/ชม.
              </span>
              <span
                style={{
                  fontSize: "20px",
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                |
              </span>
              <span
                style={{
                  fontSize: "20px",
                  color: "rgba(255,255,255,0.7)",
                  fontFamily: "sans-serif",
                }}
              >
                From 1,500 THB/hr
              </span>
            </div>

            {/* URL */}
            <span
              style={{
                fontSize: "18px",
                color: "rgba(255,255,255,0.5)",
                fontFamily: "sans-serif",
              }}
            >
              secret-rooftop.com
            </span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}