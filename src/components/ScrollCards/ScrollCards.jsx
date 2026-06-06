import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./scroll-cards.css"

gsap.registerPlugin(ScrollTrigger);

const Card = ({ title, copy, index }) => {
  return (
    <div className="card" id={`card-${index + 1}`}>
      <div className="card-inner">
        <div className="card-content">
          <h1>{title}</h1>
          <p>{copy}</p>
        </div>
        <div className="card-img">
          <img src={`/images/card-${index + 1}.png`} alt={title} />
        </div>
      </div>
    </div>
  );
};

function ScrollCards() {
  const cards = [
    {
      title: "Product Building",
      copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      title: "Code Maintenance",
      copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      title: "Automated Testing",
      copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      title: "API Development",
      copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ];

  const container = useRef();
  const introRef = useRef();
  const outroRef = useRef();

  useEffect(() => {
    const cards = gsap.utils.toArray(".card");

    if (!cards || cards.length === 0) return;

    ScrollTrigger.create({
      trigger: cards[0],
      start: "top 35%",
      endTrigger: cards[cards.length - 1],
      end: "top 30%",
      pin: introRef.current,
      pinSpacing: false,
    });

    cards.forEach((card, index) => {
      const isLastCard = index === cards.length - 1;
      const cardInner = card.querySelector(".card-inner");

      if (!isLastCard) {
        ScrollTrigger.create({
          trigger: card,
          start: "top 35%",
          endTrigger: outroRef.current,
          end: "top 65%",
          pin: true,
          pinSpacing: false,
        });

        gsap.to(cardInner, {
          y: `-${(cards.length - index) * 14}vh`,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top 35%",
            endTrigger: outroRef.current,
            end: "top 65%",
            scrub: true,
          },
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="scroll-cards" ref={container}>

      <section className="scroll-cards-intro" ref={introRef}>
        <div>
          <h1>Who Am I?</h1>
          <p>
            A performance-driven Software Engineer specializing in automated testing and full-stack 
            development for large-scale SaaS platforms. Expert in debugging and maintaining JavaScript, 
            React, and Node-based SDKs and component libraries used by millions. Dedicated to elevating 
            user experience by replacing manual processes with automated workflows, significantly 
            accelerating project delivery timelines.
          </p>
        </div>
      </section>

      <section className="card-content">
        {cards.map((card, index) => (
          <Card key={index} {...card} index={index} />
        ))}
      </section>

      <section className="scroll-cards-outro" ref={outroRef}>
        <h1>Previous Roles</h1>
      </section>

    </div>
  );
}

export default ScrollCards;
