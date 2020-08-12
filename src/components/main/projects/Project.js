import React, { Fragment } from 'react';
import { projects } from '../../../assets/json/projects';
import Carousel from 'react-bootstrap/Carousel';
import './projects.scss';
// import image from '../../../assets/images/projects/this-website/el-capitan.jpg';
const Project = ({ project }) => {
  return (
    <div className='card shadow mt-4'>
      <div className='card-body row'>
        <div className='col-lg-4'>
          <Carousel>
            {project.images.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  className='d-block w-100'
                  src={require(`../../../assets/images/projects/this-website/${image.filename}`)}
                  alt='First slide'
                />
                <Carousel.Caption bsPrefix={'carousel-caption'}>
                  <small>{image.description}</small>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div className='col-lg-8'>
          <h5 className='card-title'>Card title</h5>
          <h6 className='card-subtitle mb-2 text-muted'>Card subtitle</h6>
          <p className='card-text'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href='#' className='card-link'>
            Card link
          </a>
          <a href='#' className='card-link'>
            Another link
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
