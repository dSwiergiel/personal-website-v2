import React, { useRef } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
const About = () => {
  let projects = useRef(null);
  return (
    <div className='container py-5 px-4'>
      <div className='row'>
        <div className='col-md-6'>
          <h1 className='mb-4'>About Me</h1>
          <p>
            You've heard the cliche, you know, the one where from an early age
            they have been interested in knowing how things work, even taking
            things apart to find out. Yeah, that was me. I'm quite glad too, as
            many of the skills I've aquired as a developer are self-taught and
            come from this natural interest to learn and create.
          </p>
          <p>
            I'm the first in my entire family(including extened) to ever attend
            college, recently graduating Summa Cum Laude with a Bachelor's
            degree in Computer Science with a Minor in Applied Mathematics. This
            has been both a challenging yet rewarding experience and I just feel
            fortunate to have such a great group of friends who've helped me
            along the way.
          </p>
          <p>
            While I'm quite passionate about software development, I also have a
            great passion for personal finance and investing. Some of my early
            software projects we tools to help with investing, some of which
            generate a small amount of ad revenue each month. See some of them
            in the
            <Link
              to='projects'
              spy={true}
              smooth={true}
              offset={-100}
              duration={1000}
            >
              <a
                class
                ref={(el) => {
                  projects = el;
                }}
              >
                project section!
              </a>
            </Link>
          </p>
        </div>
        <div className='col-md-6'>
          <h1 className='mb-4'>Skills</h1>
        </div>
      </div>
    </div>
  );
};

export default About;
