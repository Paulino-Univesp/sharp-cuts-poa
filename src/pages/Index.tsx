import HeroSection from "@/components/HeroSection";
import ProofGallery from "@/components/ProofGallery";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import MapSection from "@/components/MapSection";
import FooterSection from "@/components/FooterSection";
import StickyWhatsApp from "@/components/StickyWhatsApp";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ProofGallery />
      <ProblemSection />
      <SolutionSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <TestimonialsSection />
      <PricingSection />
      <CTASection />
      <MapSection />
      <FooterSection />
      <StickyWhatsApp />
    </main>
  );
};

export default Index;
