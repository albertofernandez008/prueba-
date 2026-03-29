import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MenuSection from "@/components/MenuSection";
import ReservationSection from "@/components/ReservationSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="stone-texture min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <div id="sobre">
        <AboutSection />
      </div>
      <div id="carta">
        <MenuSection />
      </div>
      <ReservationSection />
      <FooterSection />
    </div>
  );
};

export default Index;
