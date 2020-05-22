import React from 'react';
// import LazyLoad from 'react-lazyload';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-scroll';
import 'react-lazy-load-image-component/src/effects/opacity.css';

import portrait from '../../assets/images/landing-portrait.jpg';
import resume from '../../assets/resume/currentresume.pdf';
import './landing.scss';

const Landing = () => {
  return (
    <div className='container landing-box py-3'>
      <div className='row '>
        <div className='col-lg-4'>
          <LazyLoadImage
            className='portrait'
            width='100%'
            src={portrait}
            alt={'Deven Swiergiel'}
            effect='opacity'
          ></LazyLoadImage>
        </div>
        <div className='col-lg-8'>
          <p className='text-light'>
            My name is Deven Swiergiel and I like to make stuff. Currently
            working for the government as a Full-Stack Software Developer with
            emphasis on the front end. I have experience working on a team as
            well as by myself developing and deploying enterprise software for
            New York.
          </p>
          <p className='text-light'>
            This website was designed and developed in React as a V2. The
            previous version was made with no frameworks while I was first
            learning web development, and while it may have looked good on the
            outside, it was an absolute dumpster fire on the inside!
          </p>
          <p className='text-light mb-0'>
            Look around to learn more about me and the projects I've worked on.
          </p>

          <div className=' align-items-center mt-3'>
            <Link
              activeClass='active'
              to='contact'
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <button className='btn btn-primary slide-up-button mt-3 mr-3'>
                Contact Me
              </button>
            </Link>
            <a
              href={resume}
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-primary slide-up-button mt-3 mr-3'
            >
              Resume
            </a>
            <a
              href='https://github.com/dSwiergiel'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='btn btn-primary fab fa-github landing-fa-github mt-3 mr-3 '></i>
            </a>
            <a
              href='https://www.linkedin.com/in/deven-swiergiel-155123140/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='btn btn-primary  fab fa-linkedin-in landing-fa-linkedin mt-3 mr-3'></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
