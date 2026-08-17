import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./recent-projects.css";

const projects = [
  {
    title: "World Cup Web Scraper",
    description: "(Work In Progress) A web scraper built with Node and Playwright + a REST API built with Express and PostgreSQL that scrapes ESPN stats for the 2026 FIFA World Cup.",
    href: "https://jmoten212.github.io/world-cup-web-scraper/"
  },
  {
    title: "Metronome Drum Machine",
    description: "A responsive React audio sequencer with a metronome meant to create a casual, interactive audio experience.",
    href: "https://jmoten212.github.io/metronome-drum-machine/"
  },
  {
    title: "NBA Playoffs Stat Tracker",
    description: "A stats dashboard built around an Express integration of a Rapid API meant to track the top players from the 2026 NBA Playoffs.",
    href: "https://jmoten212.github.io/nba-playoff-stats-api/"
  }
];

function RecentProjects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true,
    className: "recent-projects__slider",
  };

  return (
    <section className="recent-projects">
      <div className="recent-projects__inner">
        <h1 className="recent-projects__title">Recent Projects</h1>

        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index} className="recent-projects__slide">
              <div className="project-card">
                <iframe src={project.href}></iframe>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.href} target="_blank" rel="noreferrer">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default RecentProjects;