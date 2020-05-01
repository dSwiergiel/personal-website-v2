import React, { useEffect } from 'react';
import { jarallax } from 'jarallax';

const Parallax = ({
  children,
  background,
  speed = '-.2',
  postion = '50%',
  alt = '',
}) => {
  useEffect(() => {
    jarallax(document.querySelectorAll('.jarallax'), {
      speed: speed,
      postion: postion,
    });

    //eslint-disable-next-line
  }, []);

  return (
    <div className='jarallax'>
      <div className='parallax-tint' />
      <img className='jarallax-img ' src={background} alt={alt} />
      {children}
    </div>
  );
};

export default Parallax;
