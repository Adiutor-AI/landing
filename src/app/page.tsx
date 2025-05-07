import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/Features";
import PricingSection from "@/components/Pricing";
import CtaSection from "@/components/CTA";
import Footer from "@/components/Footer";
import AIFeaturesCard from "@/components/AIFeatures";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <AIFeaturesCard />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
