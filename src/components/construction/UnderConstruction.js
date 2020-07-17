import React, { useEffect, useRef, Fragment } from 'react';
import { TimelineMax, TweenMax, Power0, Back } from 'gsap';
import * as ScrollMagic from 'scrollmagic';
import './underconstruction.scss';

const UnderConstruction = () => {
  let content = useRef(null);
  const controller = new ScrollMagic.Controller();

  useEffect(() => {
    setTimeout(() => {
      animateOnscrol();
    }, 1500);
    //eslint-disable-next-line
  }, []);

  const animateOnscrol = () => {
    let t1 = new TimelineMax();

    t1.from(
      content,
      2,
      {
        ease: Back.easeInOut,
        opacity: 0,
      },
      0
    );

    //eslint-disable-next-line
    const scene = new ScrollMagic.Scene({
      triggerElement: content,
      triggerHook: 'onEnter',
    })
      //   .offset(175)
      .setTween(t1)
      .addTo(controller);
  };

  return (
    <div
      className='text-center mb-5 container'
      ref={(el) => {
        content = el;
      }}>
      <h1 className='mb-4'>Under Construction</h1>
      <i className='fas fa-tools under-construction-logo mb-4'></i>
      <p>
        Unfortunately, this part of the site is still in progress but will soon
        feature a projects section where some of my best work will be shown, as
        well as an education and contact section.
      </p>
      <p>Thanks for your patience!</p>
    </div>
  );
};

export default UnderConstruction;
