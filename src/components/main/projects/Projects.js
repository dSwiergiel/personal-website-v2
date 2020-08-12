import React from 'react';
import Project from './Project';
import { projects } from '../../../assets/json/projects';

const Projects = () => {
  return (
    <div className='py-4 container'>
      <h1 className='mb-4 text-center'>The Projects</h1>
      <div>
        {projects.map((project, index) => (
          <Project key={index} project={project}></Project>
        ))}
      </div>
    </div>
  );
};

export default Projects;
