import BestSellers from "@/components/homePage-components/best-sellers";
import CategoryBar from "@/components/homePage-components/category-bar";
import Hero from "@/components/homePage-components/hero";

export default function HomePage() {
  return (
    <main className="container">
      <Hero />
      <CategoryBar />
      <BestSellers />
    </main>
  );
}
