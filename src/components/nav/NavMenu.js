import React, { useRef, useEffect } from 'react';
import { TimelineLite, Power1 } from 'gsap';
import { Link } from 'react-scroll';
const NavMenu = ({ duration }) => {
  let about = useRef(null);
  let education = useRef(null);
  let experience = useRef(null);
  let projects = useRef(null);
  let contact = useRef(null);
  useEffect(() => {
    animateOnload();
    //eslint-disable-next-line
  }, []);

  const animateOnload = () => {
    let t1 = new TimelineLite();

    t1.from(about, duration / 1000 / 20, {
      opacity: 0,
      delay: duration / 1000 / 1.5,
      ease: Power1.easeOut,
    });
    t1.from(education, duration / 1000 / 20, {
      opacity: 0,
      x: -10,
      y: -10,
      ease: Power1.easeOut,
    });
    t1.from(experience, duration / 1000 / 20, {
      opacity: 0,
      x: -10,
      y: -20,
      ease: Power1.easeOut,
    });
    t1.from(projects, duration / 1000 / 20, {
      opacity: 0,
      x: -10,
      y: -30,
      ease: Power1.easeOut,
    });
    t1.from(contact, duration / 1000 / 20, {
      opacity: 0,
      x: -10,
      y: -30,
      ease: Power1.easeOut,
    });
  };

  return (
    <div className=' my-auto d-flex justify-content-between'>
      <div className=' px-2 '>
        <Link
          activeClass='active'
          to='about'
          spy={true}
          smooth={true}
          offset={-60}
          duration={1000}
        >
          <h5
            className='mb-0 text-light link'
            ref={(el) => {
              about = el;
            }}
          >
            About
          </h5>
        </Link>
      </div>
      <div className=' px-2 '>
        <Link
          activeClass='active'
          to='education'
          spy={true}
          smooth={true}
          offset={-100}
          duration={1000}
        >
          <h5
            className='mb-0 text-light link'
            ref={(el) => {
              education = el;
            }}
          >
            Education
          </h5>
        </Link>
      </div>
      <div className=' px-2 '>
        <Link
          activeClass='active'
          to='experience'
          spy={true}
          smooth={true}
          offset={-100}
          duration={1000}
        >
          <h5
            className='mb-0 text-light link'
            ref={(el) => {
              experience = el;
            }}
          >
            Experience
          </h5>
        </Link>
      </div>
      <div className=' px-2 '>
        <Link
          activeClass='active'
          to='projects'
          spy={true}
          smooth={true}
          offset={-100}
          duration={1000}
        >
          <h5
            className='mb-0 text-light link'
            ref={(el) => {
              projects = el;
            }}
          >
            Projects
          </h5>
        </Link>
      </div>
      <div className=' px-2 '>
        <Link
          activeClass='active'
          to='contact'
          spy={true}
          smooth={true}
          offset={-100}
          duration={1000}
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
  );
};

export default NavMenu;
