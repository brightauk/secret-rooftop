import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Allow all crawlers including AI
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
      // Explicitly allow AI crawlers (OpenAI, Google Gemini, Perplexity, Claude, Apple)
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
      { userAgent: "Bytespider", allow: "/" },
      { userAgent: "facebookexternalhit", allow: "/" },
    ],
    sitemap: "https://secret-rooftop.com/sitemap.xml",
  };
}