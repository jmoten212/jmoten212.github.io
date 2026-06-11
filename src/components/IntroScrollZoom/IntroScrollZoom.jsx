import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { titleSVG } from "./title.js";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import "./intro.css";

gsap.registerPlugin(ScrollTrigger, SplitText);

function IntroScrollZoom() {
  const containerRef = useRef(null);
  const spotlightRef = useRef(null);
  const headerRef = useRef(null);
  const outroRef = useRef(null);
  const nameRef = useRef(null);

  useEffect(() => {

    const SVG_NAMESPACE = "http://www.w3.org/2000/svg";
    const settings = {
      finalZoomScale: 35,
      zoomFocusPoint: "52.4% 52%",
    };

    if (containerRef.current) {
      containerRef.current.innerHTML = titleSVG;
    }

    const svg = containerRef.current?.querySelector("svg");
    if (!svg || !spotlightRef.current || !headerRef.current) {
      return () => {};
    }

    const spotlightHeader = headerRef.current;
    let headerSplit = null;
    if (spotlightHeader) {
      headerSplit = SplitText.create(spotlightHeader, {
        type: "words",
        wordsClass: "spotlight-word",
      });
      gsap.set(headerSplit.words, { opacity: 0 });
    }

    gsap.set(svg, {
      transformOrigin: settings.zoomFocusPoint,
      transformBox: "fill-box",
    });

    const scrollTrigger = ScrollTrigger.create({
      trigger: spotlightRef.current,
      start: "top top",
      end: () => "+=" + window.innerHeight * 3,
      pin: true,
      pinSpacing: true,
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;
        const scale = 1 + progress * 2 * (settings.finalZoomScale - 1);
        gsap.set(svg, { scale });

        if (headerSplit && headerSplit.words.length > 0) {
          if (progress >= 0.65 && progress <= 0.85) {
            const textProgress = (progress - 0.65) / 0.2;
            const totalWords = headerSplit.words.length;

            headerSplit.words.forEach((word, index) => {
              const wordRevealProgress = index / totalWords;
              gsap.set(word, {
                opacity: textProgress >= wordRevealProgress ? 1 : 0,
              });
            });
          } else if (progress < 0.65) {
            gsap.set(headerSplit.words, { opacity: 0 });
          } else if (progress > 0.85) {
            gsap.set(headerSplit.words, { opacity: 1 });
          }
        }
      },
    });

    const outroTl = gsap.timeline({
      scrollTrigger: {
        trigger: outroRef.current,
        start: "top top",
        end: () => "+=" + window.innerHeight * 1,
        scrub: 1,
        pin: true,
        pinSpacing: false,
      },
    });

    outroTl.to(nameRef.current, {
      y: -window.innerHeight * 1,
      opacity: 1,
      duration: 1,
    }, 0);

    return () => {
      scrollTrigger.kill();
      outroTl.scrollTrigger.kill();
      if (headerSplit) {
        headerSplit.revert();
      }
    };
  }, []);

  return (
    <>
      <div className="intro-scroll-zoom">
        <section className="intro">
          <h1>Welcome</h1>
          {/* <KeyboardArrowDownIcon className="downIcon"/> */}
        </section>

        <section className="spotlight" ref={spotlightRef}>
          <div className="svg-container" ref={containerRef}></div>

          <div className="spotlight-header">
            <h1 ref={headerRef}>This is a software engineering portfolio for</h1>
          </div>
        </section>

        <section className="outro" ref={outroRef}>
          <div className="name-img-title">
            <h1 className="name-title" ref={nameRef}>James Moten</h1>
            <img src="/images/JMoten.png" alt="James Moten illustration" />
          </div>
        </section>
      </div>
    </>
  );
}

export default IntroScrollZoom;
