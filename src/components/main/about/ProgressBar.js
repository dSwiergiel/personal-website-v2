import React, { useEffect, useRef, Fragment } from 'react';
import { TimelineMax, TweenMax, Power0, Back } from 'gsap';
import * as ScrollMagic from 'scrollmagic';
const ProgressBar = ({ percent, name }) => {
  let bar = useRef(null);
  const controller = new ScrollMagic.Controller();

  useEffect(() => {
    setTimeout(() => {
      animateOnscrol();
    }, 1500);
    //eslint-disable-next-line
  }, []);

  const animateOnscrol = () => {
    let t1 = new TimelineMax();

    t1.to(
      bar,
      1,
      {
        ease: Back.easeInOut,
        width: `${percent}%`,
      },
      0
    );

    //eslint-disable-next-line
    const scene = new ScrollMagic.Scene({
      triggerElement: bar,
      triggerHook: 'onEnter',
    })
      //   .offset(175)
      .setTween(t1)
      .addTo(controller);
  };

  const barContainerStyle = {
    height: '5px',
    width: '100%',
    backgroundColor: 'lightgrey',
  };
  const barStyle = {
    backgroundColor: '#2b3c58',
    height: '5px',
    width: '0%',
  };
  return (
    <div className='mb-3'>
      <small className='mb-2 d-block'>{name}</small>
      <div style={barContainerStyle}>
        <div
          ref={(el) => {
            bar = el;
          }}
          style={barStyle}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
