import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Services } from "@/components/sections/Services";
import { RegionsMap } from "@/components/sections/RegionsMap";
import { Process } from "@/components/sections/Process";
import { References } from "@/components/sections/References";
import { Gallery } from "@/components/sections/Gallery";
import { Collaboration } from "@/components/sections/Collaboration";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main id="obsah">
        <Hero />
        <Stats />
        <Services />
        <RegionsMap />
        <Process />
        <References />
        <Gallery />
        <Collaboration />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
