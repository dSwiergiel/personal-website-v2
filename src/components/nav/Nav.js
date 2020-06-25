import React, { useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { TimelineMax, TweenMax, Power0, Power1 } from 'gsap';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';
import * as ScrollMagic from 'scrollmagic';
import useWindowDimensions from '../../hooks/WindowDimensions';
import NavMenu from './NavMenu';
import NavMenuMobile from './NavMenuMobile';
import ScrollProgressBar from './ScrollProgressBar';

import './nav.scss';

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

const Nav = ({ duration }) => {
  const { width } = useWindowDimensions();
  let nav = useRef(null);
  let name = useRef(null);
  let header = useRef(null);
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

    //eslint-disable-next-line
    const scene = new ScrollMagic.Scene({
      triggerHook: 'onLeave',
      duration: '20%',
    })
      .setTween(t1)
      .addTo(controller);
  };

  const animateOnLoad = () => {
    TweenMax.from(name, duration / 1000 / 3, {
      opacity: 0,
      x: -200,
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
      <ScrollProgressBar />
      <div className=' container  header-container py-3 '>
        <div className=' row mb-0 ' ref={header}>
          <Link
            activeClass='active'
            to='landing'
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
          >
            <h3
              className='col-3 header text-light mb-0 link '
              ref={(el) => {
                name = el;
              }}
            >
              Deven
              <br />
              Swiergiel
            </h3>
          </Link>
          {width > 1035 ? (
            <div className='col my-auto'>
              <NavMenu duration={duration}></NavMenu>
            </div>
          ) : (
            <div className='col my-auto d-inline-flex justify-content-end'>
              <NavMenuMobile
                duration={duration}
                header={header}
              ></NavMenuMobile>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
