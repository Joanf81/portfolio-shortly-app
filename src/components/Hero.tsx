import Button from "./Button";
import IllustrationWorkingSvg from "./Svg/IllustrationWorkingSvg"

export default function Hero() {
  return <section id="hero">
    <div className="flex flex-col justify-center items-center lg:flex-row">
      <IllustrationWorkingSvg viewBox="0 0 733 482" className="w-4/6 h-auto mt-12"/>
      <h1 className="mt-24 text-5xl text-black font-bold">More than just shorter links</h1>
      <p>
        Build your brand's recognition and get detailed insights on how your links are performing.
      </p>
      <Button>Get started</Button>
    </div>

  </section>;
}