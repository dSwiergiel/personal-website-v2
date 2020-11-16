import React, { useState } from 'react';
import useWindowDimensions from '../../../hooks/WindowDimensions';
import AnimateHeight from 'react-animate-height';
import Project from './Project';
import { projects } from '../../../assets/json/projects';
import FadeInSlide from '../../wrapers/fade-in-slide/FadeInSlide';
import {
  LazyLoadImage,
  trackWindowScroll,
} from 'react-lazy-load-image-component';
const Projects = ({ scrollPosition }) => {
  const { width } = useWindowDimensions();
  const [minHeight, setMinHeight] = useState('auto');
  const [isPersonalProjects, setIsPersonalProjects] = useState(true);

  const [projectsToShow, setProjectsToShow] = useState(
    projects.filter((project) => project.projectType === 'personal')
  );

  const handleClick = (e) => {
    const buttonClicked = e.target.value;
    if (buttonClicked === 'personal') {
      setIsPersonalProjects(true);

      let projectCount = projects.filter(
        (project) => project.projectType === 'personal'
      ).length;

      // set new height to rough estimate of project card heights multiplied by the amount of projects
      setMinHeight(projectCount * 225 + 300);

      // loop over each project and delay it being added to invoke animation effect of each card individually
      for (let i = 0; i <= projectCount; i++) {
        setTimeout(() => {
          setProjectsToShow(
            projects
              .filter((project) => project.projectType === 'personal')
              .slice(0, i)
          );

          // on the last loop, set height to auto to correct height estimate
          if (i >= projectCount) {
            setTimeout(() => {
              setMinHeight('auto');
            }, projectCount * 0.2 * 1000);
          }
        }, i * 0.1 * 1000);
      }
    } else {
      setIsPersonalProjects(false);

      let projectCount = projects.filter(
        (project) => project.projectType === 'professional'
      ).length;

      // set new height to rough estimate of project card heights multiplied by the amount of projects
      setMinHeight(projectCount * 225 + 300);

      // loop over each project and delay it being added to invoke animation effect of each card individually
      for (let i = 0; i <= projectCount; i++) {
        setTimeout(() => {
          setProjectsToShow(
            projects
              .filter((project) => project.projectType === 'professional')
              .slice(0, i)
          );

          // on the last loop, set height to auto to correct height estimate
          if (i >= projectCount) {
            setTimeout(() => {
              setMinHeight('auto');
            }, projectCount * 0.2 * 1000);
          }
        }, i * 0.1 * 1000);
      }
    }
  };

  return (
    <AnimateHeight
      className={width > 576 ? 'container px-5' : 'container'}
      duration={500}
      easing={'ease'}
      height={minHeight}
    >
      <h1 className='mb-4 text-center text-light'>The Projects</h1>
      <div className='d-flex justify-content-center'>
        <button
          className={`btn btn-lg px-3 mr-2 slide-up-button ${
            isPersonalProjects === true ? `active` : ``
          }`}
          value='personal'
          onClick={(e) => handleClick(e)}
        >
          Personal
        </button>
        <button
          className={`btn btn-lg px-3 mr-2 slide-up-button ${
            isPersonalProjects === false ? `active` : ``
          }`}
          value='professional'
          onClick={(e) => handleClick(e)}
        >
          Professional
        </button>
      </div>

      <div className='pb-5'>
        {projectsToShow.map((project, index) => (
          <FadeInSlide key={index} delay={0} duration={0.5}>
            <Project
              key={index}
              project={project}
              scrollPosition={scrollPosition}
            ></Project>
          </FadeInSlide>
        ))}
      </div>
    </AnimateHeight>
  );
};

export default trackWindowScroll(Projects);
