import Menu from "./components/Sections/Menu/Menu";
import HeroSection from "./components/Sections/HeroSection";
import LinksSection from "./components/Sections/LinksSection/LinksSection";
import StatisticsSection from "./components/Sections/StatisticsSection/StatisticsSection";
import CTASection from "./components/Sections/CTASection";
import Footer from "./components/Sections/Footer";

export default function App() {
  return (
    <>
      <div className="w-full max-w-2xl mx-auto bg-s md:max-w-3xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-screen-2xl ">
        <Menu />
        <HeroSection />
      </div>
      <LinksSection />
      <StatisticsSection />
      <CTASection />
      <Footer />
    </>
  );
}
