import React from 'react';
import portrait from '../../assets/images/landing-portrait.jpg';
import './landing.scss';

const Landing = () => {
  return (
    <div className='container landing-box'>
      <div className='row px-2'>
        <div className='col-md-4'>
          <img src={portrait} className='portrait' alt='Deven Swiergiel'></img>
        </div>
        <div className='col-md-8'>
          <p>
            My name is Deven Swiergiel and I like to make stuff. I currently
            work full-time for the government as a Full-Stack Software
            Engineer/Developer. I have experience working on a team as well as
            by myself creating and deploying enterprise software and systems for
            New York State. I enjoy learning new skills and love creating even
            more. This website was designed and created by me. If you'd like,
            explore it to learn more about me!
          </p>
          <button className='slide-up-button'>Contact Me</button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
