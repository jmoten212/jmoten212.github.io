import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./personal-projects.css";

const projects = [
  {
    title: "Metronome Drum Machine",
    description: "A responsive React audio sequencer with tempo controls, keyboard input, and polished UX for rhythm practice.",
    href: "https://jmoten212.github.io/metronome-drum-machine/"
  },
  {
    title: "NBA Playoff Stats API",
    description: "A stats dashboard built around a custom NBA playoffs API, with interactive filtering and performance-focused UI.",
    href: "https://jmoten212.github.io/nba-playoff-stats-api/"
  }
];

function PersonalProjects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true,
    className: "personal-projects__slider",
  };

  return (
    <section className="personal-projects">
      <div className="personal-projects__inner">
        <h1 className="personal-projects__title">Personal Projects</h1>

        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index} className="personal-projects__slide">
              <div className="project-card">
                <iframe src={project.href} frameborder="0"></iframe>
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

export default PersonalProjects;