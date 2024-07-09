import Button from "./Button";
import IllustrationWorkingSvg from "./Svg/IllustrationWorkingSvg"

export default function Hero() {
  return <section id="hero">
    <div className="flex flex-col justify-center items-center lg:flex-row-reverse lg:justify-between lg:items-start lg:px-6">
      <IllustrationWorkingSvg viewBox="0 0 733 482" className="w-11/12 h-auto mt-12 lg:w-6/12 md:w-8/12 "/>
      <div className="flex flex-col justify-center items-center max-w-screen-sm pt-4 text-center md:max-w-screen-md md:px-4 lg:justify-start lg:items-start lg:max-w-md lg:px-0 lg:text-left ">
        <h1 className="mt-20 text-5xl text-black font-bold lg:mt-24 lg:text-6xl">More than just shorter links</h1>
        <h2 className="mt-10 text-2xl text-grayishViolet ">
          Build your brand's recognition and get detailed insights on how your links are performing.
        </h2>
        <Button xl className="mt-6 lg:py-4">Get Started</Button>
      </div>
    </div>

  </section>;
}