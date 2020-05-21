import React, { useEffect, useState, useRef } from 'react';
import NavMenu from './NavMenu';
import NavMenuMobile from './NavMenuMobile';
import ReadingProgress from './ReadingProgressBar';
import useWindowDimensions from '../../hooks/WindowDimensions';
import { TimelineMax, TweenMax, Power0, Power1 } from 'gsap';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';
import * as ScrollMagic from 'scrollmagic';
import './nav.scss';
ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

const Nav = ({ duration, target }) => {
  const { width } = useWindowDimensions();
  let nav = useRef(null);
  let name = useRef(null);
  const controller = new ScrollMagic.Controller();

  useEffect(() => {
    animateNavOnscrol();
    animateOnLoad();
    //eslint-disable-next-line
  }, []);

  const animateNavOnscrol = () => {
    let t1 = new TimelineMax();

    t1.to(nav, {
      // background: '#2b3c58',
      background: '#252f3f',
      ease: Power0.easeInOut,
      filter: 'drop-shadow(0 0 3mm rgba(0, 0, 0,1))',
    });

    const scene = new ScrollMagic.Scene({
      triggerHook: 'onLeave',
      duration: '10%',
    })
      .setTween(t1)
      .addTo(controller);
  };

  const animateOnLoad = () => {
    TweenMax.from(name, duration / 1000 / 3, {
      opacity: 0,
      x: -300,
      delay: duration / 1000 - (duration / 1000) * 0.5,
      ease: Power1.out,
    });
  };

  return (
    <div
      id='nav'
      className='sticky'
      ref={(el) => {
        nav = el;
      }}
    >
      <ReadingProgress target={target} />

      {/* <div id='progressBar'></div> */}

      <div className=' container  header-container py-3 '>
        <h1 className='header row mb-0 '>
          <div
            className='col-3'
            ref={(el) => {
              name = el;
            }}
          >
            Deven
            <br />
            Swiergiel
          </div>
          {width > 1010 ? (
            <div className='col my-auto '>
              <NavMenu duration={duration}></NavMenu>
            </div>
          ) : (
            <div className='col my-auto d-inline-flex justify-content-end'>
              <NavMenuMobile duration={duration}></NavMenuMobile>
            </div>
          )}
        </h1>
      </div>
    </div>
  );
};

export default Nav;
