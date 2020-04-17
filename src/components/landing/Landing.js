import React from 'react';
import portrait from '../../assets/images/landing-portrait.jpg';
import './landing.scss';

const Landing = () => {
  return (
    <div className='container'>
      <div className='landing-box'>
        <div className='col-md-4'>
          <img src={portrait} className='portrait' alt='Deven Swiergiel'></img>
        </div>
        <div className='col-md-8'></div>
      </div>
    </div>
  );
};

export default Landing;
