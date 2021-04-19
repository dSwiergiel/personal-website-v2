import React, { useEffect, useRef } from 'react';
import useWindowDimensions from '../../../hooks/WindowDimensions';
import { TimelineMax, Back } from 'gsap';
import * as ScrollMagic from 'scrollmagic';
const ProgressBar = ({ percent, offset, name }) => {
  let bar = useRef(null);
  const { width } = useWindowDimensions();
  const controller = new ScrollMagic.Controller();

  useEffect(() => {
    setTimeout(() => {
      animateOnscrol();
    }, 1500);
    //eslint-disable-next-line
  }, []);

  const animateOnscrol = () => {
    let t1 = new TimelineMax();

    t1.defaultOverwrite = false;

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
      .offset(offset)
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
    <div className={`${width > 991 ? 'mb-4' : 'mb-3'}`}>
      <div style={barContainerStyle}>
        <div
          ref={(el) => {
            bar = el;
          }}
          style={barStyle}
        />
      </div>
      <small className='mb-2 d-block'>{name}</small>
    </div>
  );
};

export default ProgressBar;
