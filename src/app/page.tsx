import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/Features";
import PricingSection from "@/components/Pricing";
import CtaSection from "@/components/CTA";
import Footer from "@/components/Footer";
import AIFeaturesCard from "@/components/AIFeatures";
import VideoSection from "@/components/VideoSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <VideoSection
          title="Adiutor"
          description="Adiutor es tu asistente AI que te ayuda a optimizar todas tus consultas"
          videoSrc="/vid/adiutor.mp4"
        />
        <FeaturesSection />
        <AIFeaturesCard />
        <PricingSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
