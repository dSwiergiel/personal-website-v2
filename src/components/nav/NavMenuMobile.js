import React, { useEffect, useState, useRef, Fragment } from 'react';
import { TimelineLite, TweenLite, Power1 } from 'gsap/all';
//eslint-disable-next-line
import { Link, animateScroll as scroll } from 'react-scroll';
import Hamburger from './Hamburger';

const NavMobile = ({ duration }) => {
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
          'menu'
        )
        .to(
          '#ham-middle',
          0.3,
          {
            transformOrigin: '50% 50%',
            rotate: 45,
            ease: Power1.easeInOut,
          },
          'menu'
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
          'menu'
        )
        .to(
          '#ham-bottom',
          0.2,
          {
            x: -50,
            opacity: 0,

            ease: Power1.easeInOut,
          },
          'menu'
        )
        .reverse()
    );
    // setMenuAnimation(
    //   new TimelineLite()
    //     .to(
    //       '#ham-top',
    //       0.2,
    //       {
    //         x: 50,
    //         opacity: 0,
    //         ease: Power1.easeInOut,
    //       },
    //       'menu'
    //     )
    //     .to(
    //       '#ham-middle',
    //       0.3,
    //       {
    //         transformOrigin: '50% 50%',
    //         rotate: 45,
    //         ease: Power1.easeInOut,
    //       },
    //       'menu'
    //     )
    //     .to(
    //       '#ham-middle2',
    //       0.3,
    //       {
    //         transformOrigin: '50% 50%',
    //         rotate: -45,
    //         opacity: 1,
    //         ease: Power1.easeInOut,
    //       },
    //       'menu'
    //     )
    //     .to(
    //       '#ham-bottom',
    //       0.2,
    //       {
    //         x: -50,
    //         opacity: 0,
    //         ease: Power1.easeInOut,
    //       },
    //       'menu'
    //     )
    //     .reverse()
    // );
    //eslint-disable-next-line
  }, []);
  const animateHam = () => {
    hamAnimation.reversed() ? hamAnimation.play() : hamAnimation.reverse();
    console.log(document.getElementById('dropdownMenu2'));
  };
  const animateMenu = () => {
    menuAnimation.reversed() ? menuAnimation.play() : menuAnimation.reverse();
  };
  return (
    <Fragment>
      <div className='nav-menu-mobile  '>
        <span onClick={animateHam} className='d-flex justify-content-end'>
          <Hamburger
            height='35px'
            classes='ham'
            duration={duration}
          ></Hamburger>
        </span>
        <div class='px-3 py-3 text-center'>
          <div className=' px-2 '>
            <Link
              activeClass='active'
              to='about'
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <h5
                className=' text-light link'
                ref={(el) => {
                  about = el;
                }}
              >
                About
              </h5>
            </Link>
          </div>
          <hr></hr>
          <div className=' px-2 '>
            <Link
              activeClass='active'
              to='education'
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <h5
                className=' text-light link'
                ref={(el) => {
                  education = el;
                }}
              >
                Education
              </h5>
            </Link>
          </div>
          <hr></hr>
          <div className=' px-2 '>
            <Link
              activeClass='active'
              to='experience'
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <h5
                className=' text-light link'
                ref={(el) => {
                  experience = el;
                }}
              >
                Experience
              </h5>
            </Link>
          </div>
          <hr></hr>
          <div className=' px-2 '>
            <Link
              activeClass='active'
              to='projects'
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <h5
                className='text-light link'
                ref={(el) => {
                  projects = el;
                }}
              >
                Projects
              </h5>
            </Link>
          </div>
          <hr></hr>
          <div className=' px-2 '>
            <Link
              activeClass='active'
              to='contact'
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <h5
                className='mb-0 text-light link'
                ref={(el) => {
                  contact = el;
                }}
              >
                Contact
              </h5>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default NavMobile;
