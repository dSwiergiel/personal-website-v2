import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

import './about.scss';
const About = () => {
  return (
    <div>
      <h1 className='mb-4'>About Me</h1>
      <p>
        You've heard the cliche, the one where from an early age they've been
        interested in knowing how things work, even taking things apart to find
        out. That was me, and many of the skills I've acquired as a developer
        are self-taught coming from this natural interest to learn and create!
      </p>
      <p>
        I'm the first in my entire family to attend college and recently
        graduated Summa Cum Laude with a Bachelor's degree in Computer Science
        with a Minor in Applied Mathematics. Its been both a challenging yet
        rewarding experience and I feel fortunate to have such a great group of
        friends who've helped me along the way.
      </p>
      <p>
        I also have a passion for personal finance and investing. Some of my
        early software projects were tools to help with investing. Check out the{' '}
        <Link
          to='projects'
          className='real-link'
          spy={true}
          smooth={true}
          offset={-100}
          duration={1000}>
          project section
        </Link>{' '}
        to see some of them!
      </p>
    </div>
  );
};

export default About;
