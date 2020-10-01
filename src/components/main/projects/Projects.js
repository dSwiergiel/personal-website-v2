import React, { useState, useEffect, useRef } from 'react';
import Project from './Project';
import { projects } from '../../../assets/json/projects';
import FadeInSlide from '../../wrapers/fade-in-slide/FadeInSlide';
import { gsap, TimelineMax, Expo } from 'gsap';
// import * as ScrollMagic from 'scrollmagic';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.core.globals('ScrollTrigger', ScrollTrigger);
}
const Projects = () => {
  const [isPersonalProjects, setIsPersonalProjects] = useState(true);
  const [personalProjects, setPersonalProjects] = useState(
    projects.filter((project) => project.projectType === 'personal')
  );
  const [professionalProjects, setProfessionalProjects] = useState(
    projects.filter((project) => project.projectType === 'professional')
  );

  const contentRefs = useRef([]);
  contentRefs.current = [];

  const addToRefs = (el) => {
    if (el && !contentRefs.current.includes(el)) {
      contentRefs.current.push(el);
    }
  };

  useEffect(() => {
    contentRefs.current.forEach((el, index) => {
      gsap.from(
        el,
        {
          scrollTrigger: {
            // start: '1500px 80%',
            tigger: el,
            toggleActions: 'restart none none restart',
            markers: true,
          },
          duration: 1,
          y: 100,
          opacity: 0,
        },
        0
      );
    });

    // filterProjectList();
    //eslint-disable-next-line
  }, []);
  const handleClick = (e) => {
    const buttonClicked = e.target.value;
    if (buttonClicked === 'personal') {
      setIsPersonalProjects(true);
    } else {
      setIsPersonalProjects(false);
    }
  };

  return (
    <div className='py-4 container'>
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
      {isPersonalProjects === true ? (
        <div>
          {personalProjects.map((project, index) => (
            <FadeInSlide
              ref={addToRefs}
              key={index}
              delay={index * 0.2}
              duration={2}
            >
              <Project key={index} project={project}></Project>
            </FadeInSlide>
          ))}
        </div>
      ) : (
        <div>
          {professionalProjects.map((project, index) => (
            <FadeInSlide
              ref={addToRefs}
              key={index}
              delay={index * 0.5}
              duration={1}
            >
              <Project key={index} project={project}></Project>
            </FadeInSlide>
          ))}
        </div>
      )}
      {/* <div>
        {projects.map((project, index) => (
          <FadeInSlide key={index} delay={index * 0.2} duration={1}>
            <Project key={index} project={project}></Project>
          </FadeInSlide>
        ))}
      </div> */}
    </div>
  );
};

export default Projects;
