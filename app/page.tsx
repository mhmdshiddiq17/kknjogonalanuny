import Analytics from "@/components/analytics";
import Cards from "@/components/cards";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import NewsLetter from "@/components/newsLetter";
import Image from "next/image";

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
