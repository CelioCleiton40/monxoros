"use client";
import Footer from "@/components/Footer";
import { PortfolioHero } from "@/components/portfolio/PortfolioHero";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { DocumentarySection } from "@/components/portfolio/DocumentarySection";
import { SeriesSection } from "@/components/portfolio/SeriesSection";
import { PortraitSection } from "@/components/portfolio/PortraitSection";
import { CityscapeSection } from "@/components/portfolio/CityscapeSection";
import { ContactSection } from "@/components/portfolio/ContactSection";

export default function DiscoverMyWorkProducts() {
  const shopUrl = "https://fineartamerica.com/profiles/jose-bezerra";

  return (
    <section id="discover-products" className="min-h-screen bg-white">
      <PortfolioHero shopUrl={shopUrl} />
      <AboutSection />
      <DocumentarySection />
      <SeriesSection />
      <PortraitSection />
      <CityscapeSection />
      <ContactSection />
      <Footer />
    </section>
  );
}