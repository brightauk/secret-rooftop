// Google Analytics event tracking helper
// GA4 Measurement ID: set NEXT_PUBLIC_GA_ID in .env.local or Vercel env vars

type GAEvent = {
  action: string;
  category: string;
  label?: string;
  value?: number;
};

export function trackEvent({ action, category, label, value }: GAEvent) {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
}

// Predefined events for Secret Rooftop
export const events = {
  // Contact CTAs
  lineQrScanned: () => trackEvent({ action: "line_qr_scan", category: "contact", label: "LINE QR scanned" }),
  fastworkClicked: () => trackEvent({ action: "fastwork_click", category: "contact", label: "Fastwork profile" }),
  bookNowClicked: (source: string) => trackEvent({ action: "book_now_click", category: "cta", label: source }),
  
  // Gallery
  galleryFilter: (category: string) => trackEvent({ action: "gallery_filter", category: "engagement", label: category }),
  galleryLightbox: () => trackEvent({ action: "gallery_lightbox_open", category: "engagement", label: "Photo viewed" }),
  
  // Navigation
  navClick: (section: string) => trackEvent({ action: "nav_click", category: "navigation", label: section }),
  
  // Pricing
  pricingView: () => trackEvent({ action: "pricing_view", category: "engagement", label: "Pricing section viewed" }),
};