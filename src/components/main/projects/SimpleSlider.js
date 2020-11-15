import React from 'react';
import Slider from 'react-slick';
import useWindowDimensions from '../../../hooks/WindowDimensions';
export const SimpleSlider = ({
  settings = {
    className: '',
    dots: true,
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  },
  project,
  isThumbnail = false,
  onOpenModal,
}) => {
  const { width } = useWindowDimensions();
  return (
    <div className={isThumbnail ? '' : 'container pb-3'}>
      <Slider {...settings}>
        {project.images.map((image) => (
          <div
            key={image}
            role={isThumbnail ? 'button' : ''}
            onClick={onOpenModal}
          >
            <img
              alt={image.header}
              className='project-image'
              style={{ maxHeight: isThumbnail ? '150px' : '' }}
              src={require(`../../../assets/images/projects/${image.filename}`)}
            />
            {!isThumbnail && (
              <div className='project-image-caption pt-3  d-flex align-items-center'>
                {width > 991 ? (
                  <p className='mx-auto mb-0'>{image.description}</p>
                ) : (
                  <small className='mx-auto'>{image.description}</small>
                )}
              </div>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};
