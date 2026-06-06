import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import IntroScrollZoom from "./components/IntroScrollZoom/IntroScrollZoom";
import ScrollCards from "./components/ScrollCards/ScrollCards";
import LinkCards from "./components/LinkCards/LinkCards"
import PersonalProjects from "./components/PersonalProjects/PersonalProjects";
import Footer from "./components/Footer";

function App() {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis();
    lenis.on("scroll", () => ScrollTrigger.update());

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <IntroScrollZoom />
      <ScrollCards />
      <LinkCards />
      <PersonalProjects />
      <Footer />
    </>
  );
}

export default App;
