import React, { useEffect, useRef } from 'react';
import { TweenMax, Power0, Power1 } from 'gsap';

import './splashscreen.scss';
import logo from '../../assets/images/react-logo.svg';

const Splash = ({ duration }) => {
  useEffect(() => {
    animateLogo();
    setTimeout(() => {
      TweenMax.killTweensOf(logoItem);
    }, duration + 1000);
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
      opacity: 0.5,
      filter: 'drop-shadow(0px 0px 5px rgba(41, 169, 255, 1))',
      width: 'calc(10px + 25vmin)',
      ease: Power1.ease,
    });
    // spin
    TweenMax.to(logoItem, 3, {
      rotation: 360,
      repeat: -1,
      ease: Power0.easeNone,
    });
    // hover, glow, and grow on repeat
    TweenMax.to(logoItem, duration / 1000, {
      y: -50,
      opacity: 1,
      ease: Power1.easeInOut,
      width: 'calc(10px + 35vmin)',
      filter: 'drop-shadow(0px 0px 50px rgba(41, 169, 255,1))',
      //   repeat: -1,
      //   yoyo: true,
    });
    // TweenMax.to(logoItem, 0.6, {
    //   opacity: 0,
    //   delay: duration / 1000 - 0.2,
    //   ease: Power1.easeInOut,
    // });
    TweenMax.to(splashContents, duration / 1000 - 1, {
      opacity: 0,
      delay: duration / 1000 - 0.2,
      ease: Power1.easeInOut,
    });
    TweenMax.to(splashContainer, duration / 1000 - 0.5, {
      opacity: 0,
      delay: duration / 1000,
      ease: Power1.easeInOut,
    });
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
