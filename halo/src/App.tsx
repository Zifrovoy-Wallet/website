import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { StatsSection } from "./components/StatsSection";
import { InfoSection } from "./components/InfoSection";
import { SmartIncomeSection } from "./components/SmartIncomeSection";
import { PerpsSection } from "./components/PerpsSection";
import { HowToStartSection } from "./components/HowToStartSection";
import { SocialLoginSection } from "./components/SocialLoginSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { FaqSection } from "./components/FaqSection";
import { CtaSection } from "./components/CtaSection";
import { Footer } from "./components/Footer";
import { Loader } from "./components/Loader";
import { LegalPage } from "./components/LegalPage";

// Safety net: if the hero video stalls (slow network, codec issue, blocked
// autoplay), force-clear the loader after this many ms so the page is never
// stuck behind the splash.
const LOADER_TIMEOUT_MS = 5000;

export default function App() {
  // Lightweight path routing for the static legal pages.
  const path =
    typeof window !== "undefined" ? window.location.pathname.replace(/\/+$/, "") : "";
  if (path.endsWith("/terms")) return <LegalPage kind="terms" />;
  if (path.endsWith("/privacy")) return <LegalPage kind="privacy" />;
  return <Landing />;
}

function Landing() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setReady(true), LOADER_TIMEOUT_MS);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <>
      <Loader visible={!ready} />
      <div className="flex flex-col bg-page">
        <div className="h-screen flex flex-col overflow-hidden relative">
          <Navbar />
          <HeroSection onReady={() => setReady(true)} />
        </div>
        <StatsSection />
        <InfoSection />
        <SmartIncomeSection />
        <PerpsSection />
        <HowToStartSection />
        <TestimonialsSection />
        <SocialLoginSection />
        <FaqSection />
        <CtaSection />
        <Footer />
      </div>
    </>
  );
}
