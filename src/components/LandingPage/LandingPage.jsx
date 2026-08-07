import { useEffect } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { CustomEase } from "gsap/all";
import "./landing-page.css"

gsap.registerPlugin(CustomEase, SplitText);
CustomEase.create("hop", "0.8, 0, 0.2, 1");
CustomEase.create("hop2", "0.9, 0, 0.1, 1");

const images = ["/images/lp-1.png", "/images/lp-2.png", "/images/lp-3.png", "/images/lp-4.png", "/images/lp-5.png", "/images/lp-6.png"];

const splitText = (selector, type, className, mask = true) => {
  return SplitText.create(selector, {
    type,
    [`${type}Class`]: className,
    ...(mask && { mask: type }),
  });
};

function LandingPage() {
  useEffect(() => {
    const preloaderHeaderSplit = splitText(
      ".preloader-header h1",
      "chars",
      "char",
    );
    const headerSplit = splitText(".header h1", "chars", "char", false);

    const preloaderImgInitRotations = [7.5, -2.5, -10, 5, -5];
    gsap.set(".preloader-img", {
      rotate: (i) => preloaderImgInitRotations[i],
    });

    const tl = gsap.timeline({ delay: 0.5 });

    tl.to(".preloader-img", {
      scale: 1,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 1,
      ease: "hop",
      stagger: 0.25,
    });

    tl.to(
      ".preloader-header h1 .char",
      {
        y: "0%",
        duration: 1,
        ease: "hop2",
        stagger: { each: 0.125, from: "random" },
      },
      "0.35",
    );

    tl.to(
      ".preloader-header h1 .char",
      {
        y: "-100%",
        duration: 0.75,
        ease: "hop2",
        stagger: { each: 0.125, from: "random" },
      },
      3.25,
    );

    tl.to(
      ".preloader-images .preloader-img",
      {
        scale: 0,
        clipPath: "polygon(20% 20%, 80% 20%, 80% 80%, 20% 80%)",
        duration: 1,
        ease: "hop2",
        stagger: -0.075,
      },
      3.5,
    );

    tl.to(
      ".preloader",
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 1,
        ease: "hop2",
      },
      4.35,
    );

    tl.to(
      ".header h1 .char",
      {
        y: "0%",
        duration: 1,
        ease: "hop",
        stagger: { each: 0.075, from: "random" },
      },
      4.65,
    );

    tl.to(
      "nav a .word",
      {
        y: "0%",
        duration: 1,
        ease: "hop",
        stagger: 0.075,
      },
      4.75,
    );

    tl.to(
      ".hero-footer p .word",
      {
        y: "0%",
        duration: 1,
        ease: "hop",
        stagger: 0.075,
      },
      4.75,
    );

    return () => {
      tl.kill();
      preloaderHeaderSplit.revert();
      headerSplit.revert();
      gsap.killTweensOf(".preloader-img");
      gsap.killTweensOf(".preloader-header h1 .char");
      gsap.killTweensOf(".header h1 .char");
    };
  }, []);

  return (
    <>
      <div className="preloader">
        <div className="preloader-images">
          {images.map((image) => (
            <div className="preloader-img" key={image}>
              <img src={image} alt="" />
            </div>
          ))}
        </div>

        <div className="preloader-header">
          <h1>James Moten</h1>
        </div>
      </div>

      <section className="hero">
        <div className="header">
          <h1>Welcome</h1>
        </div>
      </section>
    </>
  );
}

export default LandingPage;