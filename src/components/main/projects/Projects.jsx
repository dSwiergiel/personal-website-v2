import React, { useState } from "react";
import useWindowDimensions from "../../../hooks/WindowDimensions";
import AnimateHeight from "react-animate-height";
import Project from "./Project";
import { projects } from "../../../assets/json/projects";
import FadeInSlide from "../../wrapers/fade-in-slide/FadeInSlide";
import { trackWindowScroll } from "react-lazy-load-image-component";
const Projects = ({ scrollPosition }) => {
  const { width } = useWindowDimensions();
  const [minHeight, setMinHeight] = useState("auto");
  const [isPersonalProjects, setIsPersonalProjects] = useState(true);
  const [projectsMasterList] = useState(
    projects.filter((project) => project.isActive)
  );

  const [projectsToShow, setProjectsToShow] = useState(
    projectsMasterList.filter((project) => project.projectType === "personal")
  );

  const handleClick = (e) => {
    const projectType = e.target.value;
    const isPersonal = projectType === "personal";
    setIsPersonalProjects(isPersonal);

    const projectCount = projectsMasterList.filter(
      (project) => project.projectType === projectType
    ).length;

    // Set initial height estimate
    setMinHeight(projectCount * 225 + 300);

    // Animate projects appearing one by one
    const animateProjects = (index) => {
      if (index > projectCount) return;

      setTimeout(() => {
        setProjectsToShow(
          projectsMasterList
            .filter((project) => project.projectType === projectType)
            .slice(0, index)
        );

        // Reset height to auto after all projects are shown
        if (index >= projectCount) {
          setTimeout(() => {
            setMinHeight("auto");
          }, projectCount * 200); // 0.2 * 1000
        }

        animateProjects(index + 1);
      }, 100); // 0.1 * 1000
    };

    animateProjects(0);
  };

  return (
    <AnimateHeight
      className={width > 576 ? "container px-5" : "container"}
      duration={500}
      easing={"ease"}
      height={minHeight}
    >
      <section>
        <h1 className="mb-4 text-center text-light">The Projects</h1>
        <div className="d-flex justify-content-center">
          <button
            className={`btn btn-lg px-3 mr-2 slide-up-button ${
              isPersonalProjects === true ? `active` : ``
            }`}
            value="personal"
            onClick={(e) => handleClick(e)}
          >
            Personal
          </button>
          <button
            className={`btn btn-lg px-3 mr-2 slide-up-button ${
              isPersonalProjects === false ? `active` : ``
            }`}
            value="professional"
            onClick={(e) => handleClick(e)}
          >
            Professional
          </button>
        </div>

        <div className="pb-5">
          {projectsToShow.map((project, index) => (
            <FadeInSlide key={index} delay={0} duration={0.5}>
              <Project
                key={index}
                project={project}
                scrollPosition={scrollPosition}
              ></Project>
            </FadeInSlide>
          ))}
          {projectsToShow.length === 0 && (
            <h4 className="mt-5 mb-4 pt-4 pb-4 text-center text-light">
              No projects being shown at the moment
            </h4>
          )}
        </div>
      </section>
    </AnimateHeight>
  );
};

export default trackWindowScroll(Projects);
