import React, { useEffect } from 'react';
import { TimelineMax, Power1 } from 'gsap';
import { Link, animateScroll as scroll } from 'react-scroll';
import Hamburger from './Hamburger';

const NavMobile = ({ duration }) => {
  useEffect(() => {
    animateOnload();
    //eslint-disable-next-line
  }, []);
  const animateOnload = () => {
    let t1 = new TimelineMax();
    // t1.from('#ham-bottom', duration / 1000 / 20, {
    //   opacity: 0,
    //   y: -20,
    //   delay: duration / 1000 / 1.5,
    //   ease: Power1.easeOut,
    // });
    // t1.from('#ham-middle', duration / 1000 / 20, {
    //   opacity: 0,
    //   y: -20,
    //   ease: Power1.easeOut,
    // });
    // t1.from('#ham-top', duration / 1000 / 20, {
    //   opacity: 0,
    //   y: -20,
    //   ease: Power1.easeOut,
    // });
    t1.from('#ham-top', duration / 1000 / 10, {
      opacity: 0,
      x: 75,
      delay: duration / 1000 / 1.2,

      ease: Power1.easeOut,
    });

    t1.from('#ham-middle', duration / 1000 / 8, {
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
    <div>
      <Hamburger height='35px' classes='ham'></Hamburger>
    </div>
  );
};

export default NavMobile;
