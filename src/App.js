import React from 'react';
import Landing from './components/landing/Landing';
import SplashScreen from './components/splash/SplashScreen';
import Parallax from './components/parallax/Parallax';

import background from './assets/images/landing-background.jpg';
import './style.scss';

function App() {
  return (
    <div>
      <div className='fade-in'>
        <Parallax background={background} alt='landing backgound'>
          <div style={{ height: '125px' }} />
          <div className='container py-5'>
            <Landing></Landing>
          </div>
        </Parallax>
      </div>
      <div style={{ height: '200px' }} /> <div style={{ height: '200px' }} />{' '}
      <div style={{ height: '200px' }} /> <div style={{ height: '200px' }} />{' '}
      <div style={{ height: '200px' }} /> <div style={{ height: '200px' }} />{' '}
      <div style={{ height: '200px' }} /> <div style={{ height: '200px' }} />{' '}
    </div>
  );
}

// export default App;
export default SplashScreen(App);
