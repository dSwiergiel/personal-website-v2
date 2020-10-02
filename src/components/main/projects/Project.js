import React, { useState } from 'react';
import useWindowDimensions from '../../../hooks/WindowDimensions';
import Carousel from 'react-bootstrap/Carousel';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import './projects.scss';
// import image from '../../../assets/images/projects/this-website/el-capitan.jpg';
const Project = ({ project, scrollPosition }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { width } = useWindowDimensions();

  const onOpenModal = () => {
    setIsModalOpen(true);
  };

  const onCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='card card-shadow card-zoom bg-dark mt-4'>
      <div className='card-body row'>
        <div className='col-lg-3 carousel-container'>
          <Carousel>
            {project.images.map((image, index) => (
              <Carousel.Item key={index}>
                <LazyLoadImage
                  scrollPosition={scrollPosition}
                  visibleByDefault={true}
                  className='w-100 carousel-image-tint'
                  width='100%'
                  src={require(`../../../assets/images/projects/this-website/${image.filename}`)}
                  alt={''}
                  // effect='opacity'
                ></LazyLoadImage>
                <div className='overlay' role='button' onClick={onOpenModal}>
                  <h3 className='text-light overlay-text text-center'>
                    {/* VIEW GALLERY */}DETAILS
                  </h3>
                </div>

                {/* <Carousel.Caption
                  bsPrefix={`carousel-caption pt-1 px-4 ${
                    width > 991 ? 'd-flex align-items-center' : 'd-none'
                  }`}
                >
                  <small className='mx-auto'>{image.description}</small>
                </Carousel.Caption> */}
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div className='col-lg-9 mt-2 mt-lg-0'>
          <h3 className='less-letter-spacing capital-case text-lighter'>
            {project.header}
          </h3>
          <h6 className='card-subtitle mb-2 text-muted less-letter-spacing capital-case'>
            {project.date}
          </h6>
          <small>
            <p className='card-text text-lighter mb-2'>{project.description}</p>
          </small>

          {project.url !== '' && (
            <a
              href={project.url}
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-sm slide-up-button mr-2'
            >
              Visit Site
            </a>
          )}
          {project.repoUrl !== '' && (
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
      <div>
        <Modal
          open={isModalOpen}
          onClose={onCloseModal}
          blockScroll={false}
          center
        >
          <Carousel>
            {project.images.map((image, index) => (
              <Carousel.Item key={index}>
                <LazyLoadImage
                  className='w-100'
                  width='100%'
                  src={require(`../../../assets/images/projects/this-website/${image.filename}`)}
                  alt={''}
                  effect='opacity'
                ></LazyLoadImage>
                <Carousel.Caption
                  bsPrefix={`carousel-caption pt-1 px-4 d-flex align-items-center`}
                >
                  {width > 991 ? (
                    <div className='mx-auto'>{image.description}</div>
                  ) : (
                    <small className='mx-auto'>{image.description}</small>
                  )}
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal>
      </div>
    </div>
  );
};

export default Project;
