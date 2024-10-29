import HeroSlider from "./hero-slider";

export default function Hero() {
  return (
    <section className="py-4 h-[400px]">
      <div className="w-full h-full rounded-2xl border border-solid border-neutral-500 overflow-hidden">
        <HeroSlider />
      </div>
    </section>
  );
}
