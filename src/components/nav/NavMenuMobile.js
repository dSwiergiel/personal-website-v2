import React, { useEffect, useState, useRef } from 'react';
import { TimelineLite, TweenLite, Power1 } from 'gsap/all';
import { Link, animateScroll as scroll } from 'react-scroll';
import Hamburger from './Hamburger';

const NavMobile = ({ duration }) => {
  useEffect(() => {
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      <div>
        <Hamburger height='35px' classes='ham' duration={duration}></Hamburger>
      </div>
    </div>
  );
};

export default NavMobile;
