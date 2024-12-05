import Analytics from "@/components/analytics";
import Cards from "@/components/cards";
import DataDisplay from "@/components/dataDisplay";
import Footer from "@/components/footer";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Hero />
      <Analytics />
      <DataDisplay />
      <Cards />
      <Footer />
    </div>
  );
}
