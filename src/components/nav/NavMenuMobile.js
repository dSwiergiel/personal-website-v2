import React, { useEffect, useState, useRef, Fragment } from 'react';
import { TimelineLite, TweenLite, Power1 } from 'gsap/all';
//eslint-disable-next-line
import { Link, animateScroll as scroll } from 'react-scroll';
import Hamburger from './Hamburger';

const NavMobile = ({ duration, header }) => {
  let menu = useRef(null);
  let menuOptionsContainer = useRef(null);
  let about = useRef(null);
  let education = useRef(null);
  let experience = useRef(null);
  let projects = useRef(null);
  let contact = useRef(null);
  const [hamAnimation, setHamAnimation] = useState(
    new TimelineLite({ paused: true })
  );
  const [menuAnimation, setMenuAnimation] = useState(
    new TimelineLite({ paused: true })
  );
  const [menuOptionsAnimation, setMenuOptionsAnimation] = useState(
    new TimelineLite({ paused: true })
  );
  useEffect(() => {
    setHamAnimation(
      new TimelineLite()
        .to(
          '#ham-top',
          0.2,
          {
            x: 50,
            opacity: 0,
            ease: Power1.easeInOut,
          },
          'ham'
        )
        .to(
          '#ham-middle',
          0.3,
          {
            transformOrigin: '50% 50%',
            rotate: 45,
            ease: Power1.easeInOut,
          },
          'ham'
        )
        .to(
          '#ham-middle2',
          0.3,
          {
            transformOrigin: '50% 50%',
            rotate: -45,
            opacity: 1,
            ease: Power1.easeInOut,
          },
          'ham'
        )
        .to(
          '#ham-bottom',
          0.2,
          {
            x: -50,
            opacity: 0,

            ease: Power1.easeInOut,
          },
          'ham'
        )
        .reverse()
    );
    setMenuAnimation(
      new TimelineLite()
        .from(
          menuOptionsContainer,
          0.4,
          {
            backgroundColor: 'rgba(0,0,0,0)',
            display: 'none',
            ease: Power1.easeInOut,
          },
          'menu'
        )
        .from(
          menuOptionsContainer,
          {
            height: 0,
            ease: Power1.easeInOut,
          },
          'menu'
        )
        .to(menuOptionsContainer, 0, {
          display: 'block',
          ease: Power1.easeInOut,
        })
        .reverse()
    );
    setMenuOptionsAnimation(
      new TimelineLite()
        .from(about, 0.1, {
          x: 50,
          opacity: 0,
          ease: Power1.easeInOut,
        })
        .from(education, 0.1, {
          x: 50,
          opacity: 0,
          ease: Power1.easeInOut,
        })
        .from(experience, 0.1, {
          x: 50,
          opacity: 0,
          ease: Power1.easeInOut,
        })
        .from(projects, 0.1, {
          x: 50,
          opacity: 0,
          ease: Power1.easeInOut,
        })
        .from(contact, 0.1, {
          x: 50,
          opacity: 0,
          ease: Power1.easeInOut,
        })

        .reverse()
    );
    //eslint-disable-next-line
  }, []);
  const animateHam = () => {
    animateMenu();
    animateMenuOptions();
    hamAnimation.reversed() ? hamAnimation.play() : hamAnimation.reverse();
  };
  const animateMenu = () => {
    menuAnimation.reversed() ? menuAnimation.play() : menuAnimation.reverse();
  };
  const animateMenuOptions = () => {
    menuOptionsAnimation.reversed()
      ? menuOptionsAnimation.play()
      : menuOptionsAnimation.reverse();
  };
  return (
    <Fragment>
      <div
        className='nav-menu-mobile  '
        ref={(el) => {
          menu = el;
        }}
      >
        <span onClick={animateHam} className='d-flex justify-content-end link'>
          <Hamburger
            height='35px'
            classes='ham'
            duration={duration}
          ></Hamburger>
        </span>
        <div
          className='px-3 py-3 text-center mobile-options-container'
          ref={(el) => {
            menuOptionsContainer = el;
          }}
          style={{
            width: `${header.current ? header.current.offsetWidth - 30 : 0}px`,
          }}
        >
          <div
            className=' mx-4 '
            ref={(el) => {
              about = el;
            }}
          >
            <Link
              activeClass='active'
              to='about'
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <h5 className=' text-light link'>About</h5>
            </Link>
            <hr></hr>
          </div>
          <div
            className='  mx-4 '
            ref={(el) => {
              education = el;
            }}
          >
            <Link
              activeClass='active'
              to='education'
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <h5 className=' text-light link'>Education</h5>
            </Link>
            <hr></hr>
          </div>
          <div
            className='  mx-4 '
            ref={(el) => {
              experience = el;
            }}
          >
            <Link
              activeClass='active'
              to='experience'
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <h5 className=' text-light link'>Experience</h5>
            </Link>
            <hr></hr>
          </div>
          <div
            className=' mx-4'
            ref={(el) => {
              projects = el;
            }}
          >
            <Link
              activeClass='active'
              to='projects'
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <h5 className='text-light link'>Projects</h5>
            </Link>
            <hr></hr>
          </div>
          <div
            className='  mx-4 '
            ref={(el) => {
              contact = el;
            }}
          >
            <Link
              activeClass='active'
              to='contact'
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <h5 className='mb-0 text-light link'>Contact</h5>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default NavMobile;
