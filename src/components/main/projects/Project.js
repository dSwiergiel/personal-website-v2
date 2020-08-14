import React, { Fragment } from 'react';
import useWindowDimensions from '../../../hooks/WindowDimensions';
import Carousel from 'react-bootstrap/Carousel';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import './projects.scss';
// import image from '../../../assets/images/projects/this-website/el-capitan.jpg';
const Project = ({ project }) => {
  const { width } = useWindowDimensions();
  return (
    <div className='card card-shadow card-zoom bg-dark mt-4'>
      <div className='card-body row'>
        <div className={`col-lg-4 ${width > 991 && 'carousel-zoom'}`}>
          <Carousel>
            {project.images.map((image, index) => (
              <Carousel.Item key={index}>
                <LazyLoadImage
                  className='d-block w-100'
                  width='100%'
                  src={require(`../../../assets/images/projects/this-website/${image.filename}`)}
                  alt={''}
                  effect='opacity'
                ></LazyLoadImage>
                {/* <img
                  className='d-block w-100'
                  src={require(`../../../assets/images/projects/this-website/${image.filename}`)}
                  alt='First slide'
                /> */}
                <Carousel.Caption
                  bsPrefix={`carousel-caption pt-1 px-4 ${
                    width > 991 ? 'd-flex align-items-center' : 'd-none'
                  }`}
                >
                  <small className='mx-auto'>{image.description}</small>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div className='col-lg-8 mt-2 mt-lg-0'>
          <h3 className='less-letter-spacing capital-case text-lighter'>
            {project.header}
          </h3>
          <h6 className='card-subtitle mb-2 text-muted less-letter-spacing capital-case'>
            {project.date}
          </h6>
          <small>
            <p className='card-text text-lighter mb-2'>{project.description}</p>
          </small>

          {project.url != '' && (
            <a
              href={project.url}
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-sm slide-up-button mr-2'
            >
              Visit Site
            </a>
          )}
          {project.repoUrl != '' && (
            <a
              href={project.repoUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-sm  px-3 slide-up-button'
            >
              <i className='fab fa-github' style={{ fontSize: '13px' }}></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
