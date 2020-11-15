import React, { useState } from 'react';
import useWindowDimensions from '../../../hooks/WindowDimensions';
import Carousel from 'react-bootstrap/Carousel';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import './projects.scss';
import { SimpleSlider } from './SimpleSlider';
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
    <div className='card project-card card-shadow card-zoom bg-dark mt-4'>
      <div className='card-body '>
        <div className='row'>
          <div className='col-lg-4 p-0'>
            {/* <Carousel>
            {project.images.map((image, index) => (
              <Carousel.Item key={index}>
                <LazyLoadImage
                  scrollPosition={scrollPosition}
                  visibleByDefault={true}
                  placeholder={<div></div>}
                  className='w-100 carousel-image-tint'
                  width='100%'
                  src={require(`../../../assets/images/projects/${image.filename}`)}
                  alt={''}
                ></LazyLoadImage>
                <div className='overlay' role='button' onClick={onOpenModal}>
                  <h3 className='text-light overlay-text text-center'>
                    DETAILS
                  </h3>
                </div>
              </Carousel.Item>
            ))}
          </Carousel> */}

            <div className='project-image-container'>
              <SimpleSlider
                settings={{
                  className: 'project-overlay-image',
                  dots: false,
                  arrows: false,
                  infinite: true,
                  lazyLoad: true,
                  speed: 500,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  adaptiveHeight: true,
                  autoplay: true,
                  autoplaySpeed: 3000,
                  pauseOnHover: true,
                }}
                project={project}
                isThumbnail={true}
                onOpenModal={onOpenModal}
              ></SimpleSlider>
            </div>
          </div>
          <div className='col-lg-8 mt-2 mt-lg-0'>
            <h3 className='less-letter-spacing capital-case text-lighter'>
              {project.header}
            </h3>
            <h6 className='card-subtitle mb-2 text-muted less-letter-spacing capital-case'>
              {project.date}
            </h6>
            <small>
              <p className='card-text text-lighter mb-2'>
                {project.description}
              </p>
            </small>
            <div className=' d-flex'>
              <button
                className={
                  width > 991
                    ? 'btn btn-sm slide-up-button mr-2'
                    : 'btn btn-sm slide-up-button mr-2 flex-grow-1'
                }
                onClick={onOpenModal}
              >
                Details
              </button>
              {project.url !== '' && (
                <a
                  href={project.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={
                    width > 991
                      ? 'btn btn-sm slide-up-button mr-2'
                      : 'btn btn-sm slide-up-button mr-2 flex-grow-1'
                  }
                >
                  Visit Site
                </a>
              )}
              {project.repoUrl !== '' && (
                <a
                  href={project.repoUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={
                    width > 991
                      ? 'btn btn-sm slide-up-button '
                      : 'btn btn-sm slide-up-button  flex-grow-1'
                  }
                >
                  <i className='fab fa-github' style={{ fontSize: '13px' }}></i>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      <div>
        <Modal
          open={isModalOpen}
          onClose={onCloseModal}
          blockScroll={false}
          showCloseIcon={false}
          center
          classNames={{
            overlay: 'customOverlay',
            modal: 'customModal',
          }}
        >
          <SimpleSlider project={project}></SimpleSlider>
          {/* <Carousel>
            {project.images.map((image, index) => (
              <Carousel.Item key={index} className='project-image-container'>
                <LazyLoadImage
                  className=' test justify-content-center'
                  src={require(`../../../assets/images/projects/${image.filename}`)}
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
          </Carousel> */}
        </Modal>
      </div>
    </div>
  );
};

export default Project;
