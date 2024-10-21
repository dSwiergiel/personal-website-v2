import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

import portrait from '../../../assets/images/projects/personal/this-website/landing-portrait.jpg';
import resume from '../../../assets/resume/Deven_Swiergiel_Resume.pdf';
import './landing.scss';

const Landing = () => {
  return (
    <section className='container landing-box py-3'>
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
            7+ years full-stack experience
          </h6>
          <hr></hr>
          <h6 className='text-center text-light less-letter-spacing capital-case'>
          &gt; Boston Red Sox (2/21-9/24)
            <br />
            &gt; NYS Government (3/17-1/21)
          </h6>
          <hr></hr>
          <h6 className='text-center text-light less-letter-spacing capital-case'>
            Computer Science (B.S.)
            <br />
            <small className='d-block'>University At Albany</small>
          </h6>
        </div>
        <div className='col-lg-9  col-md-9'>
          <p className='text-light'>
          Hey there! I'm Deven Swiergiel, and I love turning ideas into reality. I'm a Full-Stack Software Engineer with a passion for the 
          frontend, specializing in crafting sleek, scalable, and modern web applications. 
          </p>
          <p className='text-light'>
          At the Boston Red Sox, I developed an app-wide offline autosave system, 
          addressing connectivity challenges faced by scouts while traveling. 
          I also led the frontend development of a roster summary and trade simulation feature to support key decision-making processes. 
          Additionally, I engineered a comprehensive roster contracts feature to replace a legacy spreadsheet system, 
          reducing data inconsistencies and improving real-time collaboration.
          </p>
          <p className='text-light mb-0'>
          Previously, I led frontend development at the New York State Government CTO Office, modernizing critical systems like unemployment insurance during the COVID-19 pandemic and developing a screening app used by up to 50,000 state employees daily. 
          </p>

          <div className=' align-items-center mt-3'>
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
    </section>
  );
};

export default Landing;
