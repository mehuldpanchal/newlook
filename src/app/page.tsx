import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Promotions from "@/components/Promotions";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <About />
      <Gallery />
      <Promotions />
      <Testimonials />
      <Contact />
    </>
  );
}
