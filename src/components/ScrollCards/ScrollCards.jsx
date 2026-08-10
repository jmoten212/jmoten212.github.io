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
      title: "Product Development",
      copy: "I have extensive experience with developing diverse software projects across the entire stack, from the individual component level to the end-to-end user level. By focusing on efficiency and proper system flow, I work to ensure every product meets design conventions and ADA accessibility standards. Through previous work on a variety of projects, I've gained valuable collborative work experience, from cross-functional teams to key stakeholders; this has allowed me to consistently deliver feasible, high-quality builds that align with project goals.",
    },
    {
      title: "Code Maintenance",
      copy: "I specialize in maintaining post-release software and engineering bug fixes to ensure security, efficiency, and alignment with user needs. I also excel at analyzing and comprehending legacy codebases to strategically re-engineer systems if needed, with an implementation of documentation and modern best practices. I believe leveraging robust dependency management and version control workflows should be emphasized in order to best maintain codebase integrity and streamline ongoing development.",
    },
    {
      title: "Automated Testing",
      copy: "I am highly proficient in writing unit, integration, and end-to-end automated tests across a variety of frameworks, including Mocha, Jest, Cypress, Playwright and Selenium. I also have extensive experience with integrating tests into CI/CD pipelines, most frequently utilizing CircleCI and GitHub Actions. I believe this implementation provides necessary visibility into build stability, ensuring high-quality deployments while significantly reducing time-to-market.",
    },
    {
      title: "API Development",
      copy: "I excel at creating and maintaining secure, high-performance Webhooks and RESTful APIs in both TypeScript and JavaScript. My backend experience extends to data management, where I've designed data schemas in JSON and YAML formats and stored in various databases, including MongoDB, PostgreSQL and AWS database services. Throughout development, I believe a strong emphasis should be placed on seamless system integration, optimized data bundling, and enhanced security controls in order to enable building more stable and secure software.",
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
            A performance-driven Software Engineer with 5+ years of experience specializing in 
            full-stack development and automated testing for large-scale SaaS platforms. An expert 
            in debugging and maintaining React, TypeScript, JavaScript, and Node-based applications. 
            An eager learner and active contributor who is dedicated to elevating user and developer experience. 
            Below are a few core areas to further breakdown my knowledge and experience in software development:
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
