import CustomCursor from "@/src/components/CustomCursor";
import RevealObserver from "@/src/components/RevealObserver";
import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import Ticker from "@/src/components/Ticker";
import About from "@/src/components/About";
import Services from "@/src/components/Services";
import Industries from "@/src/components/Industries";
import Projects from "@/src/components/Projects";
import Contact from "@/src/components/Contact";
import Footer from "@/src/components/Footer";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <RevealObserver />
      <Navbar />
      <Hero />
      <Ticker />
      <About />
      <Services />
      <Industries />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}