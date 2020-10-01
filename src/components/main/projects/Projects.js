import React, { useState, useEffect, useRef } from 'react';
import AnimateHeight from 'react-animate-height';
import Project from './Project';
import { projects } from '../../../assets/json/projects';
import FadeInSlide from '../../wrapers/fade-in-slide/FadeInSlide';
// import * as ScrollMagic from 'scrollmagic';

const Projects = () => {
  const [minHeight, setMinHeight] = useState('auto');
  const [isPersonalProjects, setIsPersonalProjects] = useState(true);
  // const [personalProjects, setPersonalProjects] = useState(
  //   projects.filter((project) => project.projectType === 'personal')
  // );
  // const [professionalProjects, setProfessionalProjects] = useState(
  //   projects.filter((project) => project.projectType === 'professional')
  // );
  const [projectsToShow, setProjectsToShow] = useState(
    projects.filter((project) => project.projectType === 'personal')
  );

  // useEffect(() => {
  //   setMinHeight('auto');
  // }, []);

  const handleClick = (e) => {
    const buttonClicked = e.target.value;
    if (buttonClicked === 'personal') {
      setIsPersonalProjects(true);
      let projectCount = projects.filter(
        (project) => project.projectType === 'personal'
      ).length;
      setMinHeight(projectCount * 200 + 300);
      console.log('proj', projectCount);

      for (let i = 0; i <= projectCount; i++) {
        setTimeout(() => {
          setProjectsToShow(
            projects
              .filter((project) => project.projectType === 'personal')
              .slice(0, i)
          );
          // if (i >= projectCount) {
          //   setTimeout(() => {
          //     setMinHeight('120%');
          //   }, projectCount * 0.5 * 1000);
          // }
        }, i * 0.2 * 1000);
      }
    } else {
      setIsPersonalProjects(false);
      let projectCount = projects.filter(
        (project) => project.projectType === 'professional'
      ).length;

      setMinHeight(projectCount * 200 + 300);
      for (let i = 0; i <= projectCount; i++) {
        setTimeout(() => {
          setProjectsToShow(
            projects
              .filter((project) => project.projectType === 'professional')
              .slice(0, i)
          );
          // if (i >= projectCount) {
          //   setTimeout(() => {
          //     setMinHeight('auto');
          //   }, projectCount * 1000);
          // }
        }, i * 0.2 * 1000);
      }
    }
  };

  // const test = (newHeight) => {
  //   console.log('newheight', newHeight.newHeight);
  //   setMinHeight('80%');
  //   // if (newHeight.newHeight === minHeight) {
  //   //   setMinHeight('auto');
  //   // } else {
  //   //   setMinHeight('auto');
  //   // }
  // };

  return (
    <AnimateHeight
      className='container projectsContainer py-4 px-5'
      duration={1000}
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

      <div>
        {projectsToShow.map((project, index) => (
          <FadeInSlide key={index} delay={0} duration={1}>
            <Project key={index} project={project}></Project>
          </FadeInSlide>
        ))}
      </div>

      {/* {isPersonalProjects === true ? (
        <div>
          {personalProjects.map((project, index) => (
            <FadeInSlide key={index} delay={index * 0.2} duration={1}>
              <Project key={index} project={project}></Project>
            </FadeInSlide>
          ))}
        </div>
      ) : (
        <div>
          {professionalProjects.map((project, index) => (
            <FadeInSlide key={index} delay={index * 0.5} duration={1}>
              <Project key={index} project={project}></Project>
            </FadeInSlide>
          ))}
        </div>
      )} */}
      {/* <div>
        {projects.map((project, index) => (
          <FadeInSlide key={index} delay={index * 0.2} duration={1}>
            <Project key={index} project={project}></Project>
          </FadeInSlide>
        ))}
      </div> */}
    </AnimateHeight>
  );
};

export default Projects;
