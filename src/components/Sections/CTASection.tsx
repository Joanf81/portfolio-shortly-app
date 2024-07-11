import Button from "../HtmlElements/Button";

export default function CTASection() {
  return (
    <section id="cta" className="py-24 bg-darkViolet">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl text-white font-bold">
          Boost your links today
        </h1>
        <Button className="mt-8">Get Started</Button>
      </div>
    </section>
  );
}
