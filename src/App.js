import React, { useState, useEffect } from 'react';
import Landing from './components/landing/Landing';
import Parallax from './components/parallax/Parallax';
import ParallaxMobile from './components/parallax/ParallaxMobile';
import LazyLoad from 'react-lazyload';

import logo from './assets/images/react-logo.svg';
import background from './assets/images/landing-background.jpg';
// import mobileBackground from './assets/images/el-capitan-5k.jpg';
import mobileBackground from './assets/images/yosemite-5k.jpg';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    //eslint-disable-next-line
  }, []);
  return (
    <div>
      {/* Splash Screen */}
      {loading && (
        <div className='splash-screen'>
          <img src={logo} className='App-logo' alt='logo' />
          <p className='light-text fixed-bottom text-center h-25'>
            getting things together...
          </p>
        </div>
      )}
      {/* Fade out from black */}
      <div className='fade-in-from-black'></div>
      {/* Use different parallax for mobile screens vs desktop */}
      {window.innerWidth > 768 ? (
        <LazyLoad once={true}>
          <Parallax background={background} speed={0.5} alt='landing backgound'>
            REMOVE ME
            <div style={{ height: '125px' }} />
            REMOVE ME
            <div className='container py-5'>
              <Landing></Landing>
            </div>
          </Parallax>
        </LazyLoad>
      ) : (
        <LazyLoad once={true}>
          <ParallaxMobile
            background={mobileBackground}
            strength={1000}
            blur={{ min: -10, max: 20 }}
          >
            <div className='container py-3 '>
              <Landing></Landing>
            </div>
          </ParallaxMobile>
        </LazyLoad>
      )}
      <div style={{ height: '200px' }} /> <div style={{ height: '200px' }} />{' '}
      <div style={{ height: '200px' }} /> <div style={{ height: '200px' }} />{' '}
      <div style={{ height: '200px' }} /> <div style={{ height: '200px' }} />{' '}
    </div>
  );
}

export default App;
// export default SplashScreen(App);
