import { useEffect } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { CustomEase } from "gsap/all";
import "./landing-page.css"

gsap.registerPlugin(CustomEase, SplitText);
CustomEase.create("hop", "0.8, 0, 0.2, 1");
CustomEase.create("hop2", "0.9, 0, 0.1, 1");

const images = ["/images/lp-1.png", "/images/lp-2.png", "/images/lp-3.png", "/images/lp-4.png", "/images/lp-5.png", "/images/lp-6.png"];

const waitForImages = (imagePaths, timeoutMs = 1800) => {
  const loadPromises = imagePaths.map((src) => {
    const image = new Image();
    image.src = src;

    return new Promise((resolve) => {
      const complete = () => {
        if (typeof image.decode === "function") {
          image.decode().then(resolve).catch(resolve);
        } else {
          resolve();
        }
      };

      if (image.complete) {
        complete();
        return;
      }

      image.addEventListener("load", complete, { once: true });
      image.addEventListener("error", resolve, { once: true });
    });
  });

  const timeoutPromise = new Promise((resolve) => {
    window.setTimeout(resolve, timeoutMs);
  });

  return Promise.race([Promise.all(loadPromises), timeoutPromise]);
};

const waitForStableFrames = (frameCount = 2) => {
  return new Promise((resolve) => {
    let remaining = frameCount;

    const tick = () => {
      if (remaining <= 0) {
        resolve();
        return;
      }

      remaining -= 1;
      requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  });
};

const splitText = (selector, type, className, mask = true) => {
  return SplitText.create(selector, {
    type,
    [`${type}Class`]: className,
    ...(mask && { mask: type }),
  });
};

function LandingPage() {
  useEffect(() => {
    let isActive = true;

    const setViewportHeightVar = () => {
      const viewportHeight = window.visualViewport?.height || window.innerHeight;
      document.documentElement.style.setProperty("--landing-vh", `${viewportHeight}px`);
    };

    setViewportHeightVar();
    window.addEventListener("resize", setViewportHeightVar);
    window.visualViewport?.addEventListener("resize", setViewportHeightVar);

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

    const tl = gsap.timeline({ delay: 0.5, paused: true });

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

    Promise.all([waitForImages(images), waitForStableFrames(2)]).then(() => {
      if (!isActive) {
        return;
      }

      setViewportHeightVar();

      tl.play(0);
    });

    return () => {
      isActive = false;
      window.removeEventListener("resize", setViewportHeightVar);
      window.visualViewport?.removeEventListener("resize", setViewportHeightVar);
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
              <img src={image} alt="" loading="eager" decoding="async" fetchPriority="high" />
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