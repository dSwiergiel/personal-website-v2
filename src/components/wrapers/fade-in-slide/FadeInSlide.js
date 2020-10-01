import React, { useEffect, useRef } from 'react';
import { gsap, TimelineMax, Expo } from 'gsap';
// import * as ScrollMagic from 'scrollmagic';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.core.globals('ScrollTrigger', ScrollTrigger);
}
const FadeInSlide = React.forwardRef(
  ({ children, delay = 1.5, duration = 2 }) => {
    let contentRef = useRef(null);
    // const controller = new ScrollMagic.Controller();

    useEffect(() => {
      // setTimeout(() => {
      // animateOnscrol();
      // }, delay * 1000);
      //eslint-disable-next-line
    }, []);

    // const animateOnscrol = () => {
    //   gsap.from(
    //     contentRef,
    //     {
    //       scrollTrigger: {
    //         start: '1500px 80%',
    //         toggleActions: 'restart none none reverse',
    //         markers: true,
    //       },
    //       duration: duration,
    //       y: 100,
    //       opacity: 0,
    //     },
    //     0
    //   );

    // //eslint-disable-next-line
    // const scene = new ScrollMagic.Scene({
    //   triggerElement: content,
    //   triggerHook: 'onEnter',
    // })
    //   //   .offset(-50)
    //   .setTween(t1)
    //   .addTo(controller);
    // };

    return (
      <div
        ref={(el) => {
          contentRef = el;
        }}
      >
        {children}
      </div>
    );
  }
);

export default FadeInSlide;
