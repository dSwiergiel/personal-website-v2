import React from 'react';
import portrait from '../../assets/images/landing-portrait.jpg';
import './landing.scss';

const Landing = () => {
  return (
    <div className='container landing-box'>
      <div className='row px-2'>
        <div className='col-lg-4 '>
          <img src={portrait} className='portrait' alt='Deven Swiergiel'></img>
        </div>
        <div className='col-lg-8'>
          <p className='light-text'>
            My name is Deven Swiergiel and I like to make stuff. Currently
            working for the government as a Full-Stack Software Developer with
            emphasis on the front end. I have experience working on a team as
            well as by myself creating and deploying enterprise software and
            systems for New York State.
          </p>
          <p className='light-text'>
            This website was designed and created in React by me as a V2. The
            pervious version was made with no frameworks while I was first
            learning web development, and while it may have looked good on the
            outside, it was an absolute dumpster fire on the inside!
          </p>
          <p className='light-text mb-0'>
            Look around a bit to learn more about me and the projects I've
            worked on.
          </p>
          <div className='form-row align-items-center'>
            <button className='slide-up-button mt-3 mr-3'>Contact Me</button>
            <button className='slide-up-button mt-3 mr-3'>Resume</button>
            <a>
              <i className='fab fa-github landing-fa-github mt-3'></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
