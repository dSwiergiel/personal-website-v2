import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-scroll';
import 'react-lazy-load-image-component/src/effects/opacity.css';

import portrait from '../../../assets/images/projects/personal/this-website/landing-portrait.jpg';
import resume from '../../../assets/resume/Deven-Swiergiel_resume.pdf';
import './landing.scss';

const Landing = () => {
  return (
    <div className='container landing-box py-3'>
      <div className='row '>
        <div className='col-lg-3 col-md-3 mb-lg-0 mb-3'>
          <div className='d-flex justify-content-center'>
            <LazyLoadImage
              className='portrait'
              width='100%'
              src={portrait}
              alt={'Deven Swiergiel'}
              effect='opacity'
            ></LazyLoadImage>
          </div>
          <h6 className='mt-3 text-center text-light less-letter-spacing capital-case'>
            6 years full-stack experience
          </h6>
          <hr></hr>
          <h6 className='text-center text-light less-letter-spacing capital-case'>
            Computer Science (B.S)
            <br />
            <small className='d-block'>(Summa Cum Laude)</small>
            <br />
            University At Albany
          </h6>
        </div>
        <div className='col-lg-9  col-md-9'>
          <p className='text-light'>
          Hey there! I'm Deven Swiergiel, and I love turning ideas into reality. I'm a Full-Stack Software Engineer with a passion for the 
          frontend, specializing in crafting sleek, scalable, and modern web applications. 
          {/* Whether it's breathing life into a UI or building a backend that gets the job done, I'm all about creating the best digital experiences possible. */}
          </p>
          <p className='text-light'>
          At the Red Sox, I developed an app-wide offline autosave system, 
          addressing connectivity challenges faced by scouts while traveling. 
          I also led the frontend development of a Roster Summary and Trade Simulation feature to support key decision-making processes. 
          Additionally, I engineered a comprehensive Roster Contracts feature to replace a legacy spreadsheet system, 
          reducing data inconsistencies and improving real-time collaboration.
          </p>
          <p className='text-light mb-0'>
          Previously, I led frontend development at the New York State Government CTO Office, modernizing critical systems like unemployment insurance during the COVID-19 pandemic and developing a screening app used by up to 50,000 state employees. 
          </p>

          <div className=' align-items-center mt-3'>
            {/* <Link
              activeClass='active'
              to='contact'
              spy={true}
              smooth={true}
              offset={0}
              duration={1000}
            >
              <button className='btn btn-primary slide-up-button mt-3 mr-3'>
                Contact Me
              </button>
            </Link> */}
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
