import React, { useEffect, useRef } from "react";
import { TimelineMax, Back } from "gsap";
import * as ScrollMagic from "scrollmagic";

const LazyRender = ({ children, delay = 1.5, duration = 2 }) => {
  let content = useRef(null);
  const controller = new ScrollMagic.Controller();

  useEffect(() => {
    setTimeout(() => {
      animateOnscrol();
    }, delay * 1000);
    //eslint-disable-next-line
  }, []);

  const animateOnscrol = () => {
    let t1 = new TimelineMax();

    t1.from(
      content,
      duration,
      {
        ease: Back.easeInOut,
        opacity: 0,
      },
      0
    );

    //eslint-disable-next-line
    const scene = new ScrollMagic.Scene({
      triggerElement: content,
      triggerHook: "onEnter",
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

export default LazyRender;
