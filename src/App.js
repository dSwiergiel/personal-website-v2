import React from 'react';
import Landing from './components/landing/Landing';

import background from './assets/images/landing-background.jpg';
import './style.scss';

function App() {
  return (
    <div className=''>
      <div
        data-jarallax
        data-speed='-.2'
        // data-speed='.1'
        // data-img-position='50% -50px'
        // data-img-position='50%'
        className='jarallax'
      >
        <img
          className='jarallax-img '
          style={{
            boxShadow: '100vw 100vh rgba(0, 0, 0, 0.2) inset ',
          }}
          src={background}
          alt='Deven Swiergiel'
        />
        <div className='container py-5'>
          <div style={{ height: '125px' }} />
          <Landing></Landing>
        </div>
      </div>
      <div style={{ height: '200px' }} /> <div style={{ height: '200px' }} />{' '}
      <div style={{ height: '200px' }} /> <div style={{ height: '200px' }} />{' '}
      <div style={{ height: '200px' }} /> <div style={{ height: '200px' }} />{' '}
    </div>
  );
}

export default App;
