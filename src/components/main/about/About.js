import React from 'react';
import { Link } from 'react-scroll';

import './about.scss';
const About = () => {
  return (
    <div>
      <h1 className='mb-4'>The Bio</h1>
      <p>
      You know the classic story—the kid who just has to know how everything works, taking stuff apart 
      (and maybe not always putting it back together)? Yeah, that was me. My mom was thrilled—especially when 
      I decided her printer needed an “upgrade.” Fast forward, and that same curiosity is what fueled me to 
      dive into coding, where I picked up many of the skills I use as an engineer today.
      </p>
      <p>
     I was the first in my family to attend college, graduating summa cum laude with a Bachelor's 
     in Computer Science and a minor in Applied Mathematics. It was both a challenging and rewarding 
     experience, and I feel fortunate to have had the support of a great group of friends along the way.
      </p>
      <p>
      I'm also passionate about personal finance and investing. My early software projects were investment 
      tools that doubled as my introduction to web development.
        Check out the{' '}
        <Link
          to='projects'
          className='real-link'
          spy={true}
          smooth={true}
          offset={-100}
          duration={1000}
        >
          project section
        </Link>{' '}
        to see some of them!
      </p>
    </div>
  );
};

export default About;
