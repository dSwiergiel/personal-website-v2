import React from 'react';
import './splashscreen.scss';
import logo from '../../assets/images/react-logo.svg';

const Splash = () => {
  return (
    <div className='splash-screen'>
      <img src={logo} className='App-logo' alt='logo' />
      <p className='light-text fixed-bottom text-center h-25'>
        getting things together...
      </p>
    </div>
  );
};

export default Splash;
