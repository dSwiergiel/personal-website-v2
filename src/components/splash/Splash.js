import React, { useEffect, useRef } from 'react';
import { TweenMax, Power0, Power1 } from 'gsap';

import './splashscreen.scss';
import logo from '../../assets/images/react-logo.svg';

const Splash = ({ duration }) => {
  useEffect(() => {
    animateLogo();
    setTimeout(() => {
      TweenMax.killTweensOf(logoItem);
    }, duration);
    //eslint-disable-next-line
  }, []);

  let splashContainer = useRef(null);
  let splashContents = useRef(null);
  let logoItem = useRef(null);

  const animateLogo = () => {
    // TweenMax.from(splashContents, 0.5, {
    //   opacity: 0,
    //   ease: Power1.ease,
    // });
    TweenMax.from(logoItem, 1, {
      opacity: 0,
      filter: 'drop-shadow(0px 0px 5px rgba(41, 169, 255, 1))',
      width: 'calc(10px + 25vmin)',
      ease: Power1.ease,
    });
    TweenMax.to(logoItem, 4, {
      rotation: 360,
      repeat: -1,
      ease: Power0.easeNone,
    });
    TweenMax.to(logoItem, 1, {
      y: -50,
      opacity: 1,
      ease: Power1.easeInOut,
      width: 'calc(10px + 35vmin)',
      repeat: -1,
      yoyo: true,
    });
    TweenMax.to(logoItem, 1, {
      filter: 'drop-shadow(0px 0px 50px rgba(41, 169, 255,1))',
      ease: Power1.easeInOut,
      repeat: -1,
      yoyo: true,
    });
    TweenMax.to(splashContents, 1.2, {
      opacity: 0,
      delay: 1,
      ease: Power1.easeInOut,
    });
    TweenMax.to(splashContainer, 1, {
      opacity: 0,
      delay: 2,
      ease: Power1.easeInOut,
    });
    // TweenMax.killTweensOf(logoItem);
  };
  return (
    <div
      className='splash-screen-container'
      ref={(el) => {
        splashContainer = el;
      }}
    >
      <div
        className='splash-screen'
        ref={(el) => {
          splashContents = el;
        }}
      >
        <img
          src={logo}
          ref={(el) => {
            logoItem = el;
          }}
          className='App-logo'
          alt='logo'
        />
        <p className='light-text fixed-bottom text-center h-25'>
          getting things together...
        </p>
      </div>
    </div>
  );
};

export default Splash;
