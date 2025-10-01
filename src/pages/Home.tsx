import HeroSection from "@/components/HeroSection";
import ManifestoSection from "@/components/ManifestoSection";
import ElementsGallery from "@/components/ElementsGallery";
import ItineraryTimeline from "@/components/ItineraryTimeline";
import InvitationSection from "@/components/InvitationSection";
import AboutPhotographer from "@/components/AboutPhotographer";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import FloatingWidget from "@/components/FloatingWidget";

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <HeroSection />

      {/* Manifesto Section */}
      <ManifestoSection />

      {/* Elements Gallery */}
      <ElementsGallery />

      {/* Itinerary Timeline */}
      <ItineraryTimeline />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Invitation Section */}
      <InvitationSection />

      {/* About Photographer */}
      <AboutPhotographer />

      {/* Footer */}
      <Footer />

      {/* Floating Widget */}
      <FloatingWidget />
    </div>
  );
}
