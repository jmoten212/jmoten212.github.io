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
      copy: "I have experience with developing software projects across the entire stack, from the component level to the system level. By focusing on efficiency and proper system flow, I work to ensure every product meets the set standards of design, quality, and accessibility. Through previous work on a variety of projects, I've gained valuable experience working in collaboration with cross-functional teams, clients, and key stakeholders. This has allowed me to consistently deliver feasible, high-quality builds that align with project goals.",
    },
    {
      title: "Code Maintenance",
      copy: "I specialize in maintaining post-release software by engineering bug fixes that ensure security, efficiency, and alignment with user needs. I have experience with analyzing and comprehending legacy codebases as well, and am comfortable working to strategically re-engineer systems, if needed. I believe leveraging dependency management and version control workflows should be emphasized in order to best streamline development and maintain codebase stability.",
    },
    {
      title: "Automated Testing",
      copy: "I am proficient in writing automated test suites for various environments and stages of the testing lifecycle \u2014 unit, integration, e2e, regression, smoke, acceptance, component, API \u2014 and across a variety of frameworks \u2014 Mocha, Jest, Cypress, Playwright and Selenium. I also have in-depth experience with integrating test suites tests into CI/CD pipelines, most frequently utilizing CircleCI and GitHub Actions. I believe this can provide necessary visibility into build quality and stability, ensuring better deployments and reducing time-to-market.",
    },
    {
      title: "API Development",
      copy: "I have in-depth experience with creating and maintaining secure, high-performance Webhooks and RESTful APIs in both TypeScript and JavaScript; this includes experience in designing data schemas in JSON and YAML, and utilizing databases like MongoDB, PostgreSQL, and AWS database services for persistence. Having implemented checks for request validation, security, performance, data integrity, authentication and authorization, I am also skilled in API and database testing. I believe a strong emphasis should be placed on testing throughout development to best ensure API security, stability, and design alignment.",
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
            A performance-driven Software Engineer with 5+ years of professional experience in full-stack development 
            and automated testing; proficient in debugging and maintaining React, TypeScript, JavaScript, and Node-based 
            applications and APIs for large-scale SaaS platforms. An eager learner and active contributor who 
            is dedicated to elevating user and developer experience through reliable, well-tested software. Below are a 
            few core areas that further highlight my technical background:
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
