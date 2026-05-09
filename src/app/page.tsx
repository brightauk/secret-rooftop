import { LocaleProvider } from "../lib/locale-context";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import HighlightsSection from "../components/HighlightsSection";
import GallerySection from "../components/GallerySection";
import TestimonialsSection from "../components/TestimonialsSection";
import PricingSection from "../components/PricingSection";
import LocationSection from "../components/LocationSection";
import ContactFAQSection from "../components/ContactFAQSection";
import AIChatbotWidget from "../components/AIChatbotWidget";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <LocaleProvider>
      <main className="relative flex-1">
        <Navbar />
        <HeroSection />
        <HighlightsSection />
        <GallerySection />
        <TestimonialsSection />
        <PricingSection />
        <LocationSection />
        <ContactFAQSection />
        <Footer />
        <AIChatbotWidget />
      </main>
    </LocaleProvider>
  );
}
