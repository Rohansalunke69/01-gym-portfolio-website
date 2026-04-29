import HeroSection from "@/components/HeroSection";
import MarqueeTicker from "@/components/MarqueeTicker";
import AboutSection from "@/components/AboutSection";
import CertificationsSection from "@/components/CertificationsSection";
import VideosSection from "@/components/VideosSection";
import ProgramsSection from "@/components/ProgramsSection";
import ResultsSection from "@/components/ResultsSection";
import FAQSection from "@/components/FAQSection";
import LocationSection from "@/components/LocationSection";
import SessionsSection from "@/components/SessionsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <MarqueeTicker />
      <AboutSection />
      <CertificationsSection />
      <VideosSection />
      <MarqueeTicker />
      <ProgramsSection />
      <ResultsSection />
      <FAQSection />
      <LocationSection />
      <SessionsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
