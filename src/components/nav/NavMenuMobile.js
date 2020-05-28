import React, { useEffect, useState, useRef } from 'react';
import { TimelineLite, TweenLite, Power1 } from 'gsap/all';
import { Link, animateScroll as scroll } from 'react-scroll';
import Hamburger from './Hamburger';

const NavMobile = ({ duration }) => {
  const [menuAnimation, setMenuAnimation] = useState(
    new TimelineLite({ paused: true })
  );
  useEffect(() => {
    setMenuAnimation(
      new TimelineLite()
        .to(
          '#ham-top',
          0.2,
          {
            x: 50,
            opacity: 0,
            ease: Power1.easeInOut,
          },
          'menu'
        )
        .to(
          '#ham-middle',
          0.3,
          {
            transformOrigin: '50% 50%',
            rotate: 45,
            ease: Power1.easeInOut,
          },
          'menu'
        )
        .to(
          '#ham-middle2',
          0.3,
          {
            transformOrigin: '50% 50%',
            rotate: -45,
            opacity: 1,
            ease: Power1.easeInOut,
          },
          'menu'
        )
        .to(
          '#ham-bottom',
          0.2,
          {
            x: -50,
            opacity: 0,

            ease: Power1.easeInOut,
          },
          'menu'
        )
        .reverse()
    );
    //eslint-disable-next-line
  }, []);
  const animateMenu = () => {
    menuAnimation.reversed() ? menuAnimation.play() : menuAnimation.reverse();
  };
  return (
    <div>
      <Hamburger
        height='35px'
        classes='ham'
        duration={duration}
        onClick={animateMenu}
      ></Hamburger>
    </div>
  );
};

export default NavMobile;
