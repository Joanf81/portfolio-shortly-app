import Header from "./components/Header"
import Hero from "./components/Hero";

export default function App() {
  return (
    <>
      <div className="w-full max-w-3xl mx-auto lg:max-w-6xl xl:max-w-7xl 2xl:max-w-screen-2xl ">
        <Header/>
        <Hero />
      </div>
      
    </>
  );
};
