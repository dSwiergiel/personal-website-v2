import React, { useEffect, useRef } from 'react';
import { TimelineMax, Power3 } from 'gsap';
import * as ScrollMagic from 'scrollmagic';

const FadeInSlide = ({ children, delay = 0, duration = 1 }) => {
  let content = useRef(null);
  const controller = new ScrollMagic.Controller();

  useEffect(() => {
    animateOnscrol();

    //eslint-disable-next-line
  }, []);

  const animateOnscrol = () => {
    let t1 = new TimelineMax();

    t1.from(
      content,
      duration,
      {
        ease: Power3.easeOut,
        y: 100,
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
      ref={(el) => {
        content = el;
      }}
    >
      {children}
    </div>
  );
};

export default FadeInSlide;
