import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { StatsSection } from "./components/StatsSection";
import { InfoSection } from "./components/InfoSection";
import { PerpsSection } from "./components/PerpsSection";
import { HowToStartSection } from "./components/HowToStartSection";
import { SocialLoginSection } from "./components/SocialLoginSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { FaqSection } from "./components/FaqSection";
import { CtaSection } from "./components/CtaSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="flex flex-col bg-page">
      <div className="h-screen flex flex-col overflow-hidden relative">
        <Navbar />
        <HeroSection />
      </div>
      <StatsSection />
      <InfoSection />
      <PerpsSection />
      <HowToStartSection />
      <TestimonialsSection />
      <SocialLoginSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
