import Analytics from "@/components/analytics";
import Cards from "@/components/cards";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import NewsLetter from "@/components/newsLetter";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Hero />
      <Analytics />
      <NewsLetter />
      <Cards />
      <Footer />
    </div>
  );
}
