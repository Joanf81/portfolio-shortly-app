import Header from "./components/Sections/Header"
import Hero from "./components/Sections/HeroSection";
import LinksSection from "./components/Sections/LinksSection/LinksSection";
import StatisticsSection from "./components/Sections/StatisticsSection/StatisticsSection"

export default function App() {
  return (
    <>
      <div className="w-full max-w-2xl mx-auto bg-s md:max-w-3xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-screen-2xl ">
        <Header/>
        <Hero />
      </div>
      <LinksSection />
      <StatisticsSection />
    </>
  );
};
