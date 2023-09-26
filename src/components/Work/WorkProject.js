import { useEffect } from "react";

import "./WorkProject.css";

const projectItem = [
  {
    id: 1,
    url: "https://github.com/heeseok-j/Find-pumpkin",
    src: "img/projects/pumpkin_game.png",
    alt: "pumpkin_game",
    title: "Pumpkin_game",
    language: "HTML, CSS, JavaScript",
    type: "pumpkin",
    isVisible: true,
  },
  {
    id: 2,
    url: "https://github.com/heeseok-j/responsive-nav-bar",
    src: "img/projects/responsive_web.jpg",
    alt: "responsive_navbar",
    title: "Responsive_navbar",
    language: "HTML, CSS with media query",
    type: "navbar",
    isVisible: true,
  },
  {
    id: 3,
    url: "https://github.com/heeseok-j/Image-zoom",
    src: "img/projects/image_zoom.png",
    alt: "magnifier",
    title: "Magnifying glass",
    language: "HTML, CSS, JavaScript",
    type: "magnifier",
    isVisible: true,
  },
  {
    id: 4,
    url: "https://github.com/heeseok-j/Currency-exchange",
    src: "img/projects/currency_exchange.png",
    alt: "currency",
    title: "Currency_exchange",
    language: "HTML, CSS, JavaScript",
    type: "currency",
    isVisible: true,
  },
];

const WorkProject = ({ setProjectData, fade }) => {
  useEffect(() => {
    setProjectData(projectItem);
  });

  return (
    <div className={fade ? "work-projects animation" : "work-projects"}>
      {projectItem.map((item) => (
        <div
          onClick={() => window.open(item.url)}
          className={item.isVisible ? "project" : "project invisible"}
          data-type={item.type}
          target="_blank"
          key={item.id}
        >
          <img className="project-img" src={item.src} alt={item.alt} />
          <div className="project-description">
            <h3>{item.title}</h3>
            <span>{item.language}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkProject;
