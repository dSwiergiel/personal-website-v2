import React, { useRef, useEffect } from 'react';
import { TimelineMax, Power1 } from 'gsap';
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
    let t1 = new TimelineMax();

    t1.from(about, duration / 1000 / 20, {
      opacity: 0,
      delay: duration / 1000 / 1.5,
      ease: Power1.easeOut,
    });
    t1.from(education, duration / 1000 / 20, {
      opacity: 0,
      y: -10,
      ease: Power1.easeOut,
    });
    t1.from(experience, duration / 1000 / 20, {
      opacity: 0,
      y: -20,
      ease: Power1.easeOut,
    });
    t1.from(projects, duration / 1000 / 20, {
      opacity: 0,
      y: -30,
      ease: Power1.easeOut,
    });
    t1.from(contact, duration / 1000 / 20, {
      opacity: 0,
      y: -40,
      ease: Power1.easeOut,
    });
  };

  return (
    <div className=' my-auto d-flex justify-content-between'>
      <div className=' px-2'>
        <h5
          className='mb-0 text-light'
          ref={(el) => {
            about = el;
          }}
        >
          About
        </h5>
      </div>
      <div className=' px-2'>
        <h5
          className='mb-0 text-light'
          ref={(el) => {
            education = el;
          }}
        >
          Education
        </h5>
      </div>
      <div className=' px-2'>
        <h5
          className='mb-0 text-light'
          ref={(el) => {
            experience = el;
          }}
        >
          Experience
        </h5>
      </div>
      <div className=' px-2'>
        <h5
          className='mb-0 text-light'
          ref={(el) => {
            projects = el;
          }}
        >
          Projects
        </h5>
      </div>
      <div className=' px-2'>
        <h5
          className='mb-0 text-light'
          ref={(el) => {
            contact = el;
          }}
        >
          contact
        </h5>
      </div>
    </div>
  );
};

export default NavMenu;
