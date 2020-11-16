import React from 'react';
import Slider from 'react-slick';
import useWindowDimensions from '../../../hooks/WindowDimensions';

function CustomPrevArrow(props) {
  const { onClick } = props;
  return (
    <i className='customPrevArrow fas fa-chevron-left' onClick={onClick}></i>
  );
}
function CustomNextArrow(props) {
  const { onClick } = props;
  return (
    <i className='customNextArrow fas fa-chevron-right' onClick={onClick}></i>
  );
}

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
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    customPaging: (i) => <i class='fas fa-minus'></i>,
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
              style={{ maxHeight: isThumbnail ? '175px' : '' }}
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
