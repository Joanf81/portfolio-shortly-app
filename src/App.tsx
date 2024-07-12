import Menu from "./components/Sections/Menu/Menu";
import HeroSection from "./components/Sections/HeroSection";
import LinksSection from "./components/Sections/LinksSection/LinksSection";
import StatisticsSection from "./components/Sections/StatisticsSection/StatisticsSection";
import CTASection from "./components/Sections/CTASection";
import Footer from "./components/Sections/Footer";

export default function App() {
  return (
    <>
      <Menu />
      <HeroSection />
      <LinksSection />
      <StatisticsSection />
      <CTASection />
      <Footer />
    </>
  );
}
