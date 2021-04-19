import React, { useEffect } from 'react';
import { TimelineLite, Power1 } from 'gsap/all';

const Hamburger = ({ fill, height = '30px', classes, duration = '3000' }) => {
  useEffect(() => {
    animateOnload();

    //eslint-disable-next-line
  }, []);
  const animateOnload = () => {
    let t1 = new TimelineLite();

    t1.defaultOverwrite = false;

    t1.from('#ham-top', duration / 1000 / 10, {
      opacity: 0,
      x: 75,
      delay: duration / 1000 / 1.2,

      ease: Power1.easeOut,
    });

    t1.from('#ham-middle, #ham-middle2', duration / 1000 / 8, {
      opacity: 0,
      x: 20,
      ease: Power1.easeOut,
    });
    t1.from('#ham-bottom', duration / 1000 / 6, {
      opacity: 0,
      x: -75,
      ease: Power1.easeOut,
    });
  };

  return (
    <svg
      viewBox='0 0 50 40'
      fill={fill}
      height={height}
      className={classes}
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect id='ham-top' width='30' height='6' rx='4' ry='4' />
      <rect id='ham-middle' y='17' width='50' height='6' rx='4' ry='4' />
      <rect id='ham-middle2' y='17' width='50' height='6' rx='4' ry='4' />
      <rect id='ham-bottom' width='30' height='6' rx='4' ry='4' x='20' y='34' />
    </svg>
  );
};

export default Hamburger;
