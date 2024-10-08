import React, { useRef, useEffect } from 'react';
import { TimelineLite, Power1 } from 'gsap';
import { Link } from 'react-scroll';
const NavMenu = ({ duration }) => {
  let about = useRef(null);
  let stack = useRef(null);
  let projects = useRef(null);
  // let contact = useRef(null);
  useEffect(() => {
    animateOnload();
    //eslint-disable-next-line
  }, []);

  const animateOnload = () => {
    let t1 = new TimelineLite();

    t1.from(about, duration / 1000 / 18, {
      opacity: 0,
      delay: duration / 1000 / 1.5,
      ease: Power1.easeOut,
    })
      .from(stack, duration / 1000 / 19, {
        opacity: 0,
        x: -10,
        y: -10,
        ease: Power1.easeOut,
      })
      .from(projects, duration / 1000 / 20, {
        opacity: 0,
        x: -10,
        y: -20,
        ease: Power1.easeOut,
      })
      // .from(contact, duration / 1000 / 20, {
      //   opacity: 0,
      //   x: -10,
      //   y: -30,
      //   ease: Power1.easeOut,
      // });
  };

  return (
    <div className=' my-auto d-flex justify-content-between'>
      <div className=' px-2 '>
        <Link
          activeClass='active'
          className="text-decoration-none"
          to='about'
          spy={true}
          smooth={true}
          offset={-100}
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
          className="text-decoration-none"
          to='stack'
          spy={true}
          smooth={true}
          offset={-100}
          duration={1000}
        >
          <h5
            className='mb-0 text-light link'
            ref={(el) => {
              stack = el;
            }}
          >
            Stack
          </h5>
        </Link>
      </div>

      <div className=' px-2 '>
        <Link
          activeClass='active'
          className="text-decoration-none"
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

      {/* <div className=' px-2 '>
        <Link
          activeClass='active'
          className="text-decoration-none"
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
      </div> */}
    </div>
  );
};

export default NavMenu;
