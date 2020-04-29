import React, { useState, useEffect } from 'react';
import Landing from './components/landing/Landing';
import SplashScreen from './components/splash/SplashScreen';
import Parallax from './components/parallax/Parallax';
import ParallaxMobile from './components/parallax/ParallaxMobile';
import LazyLoad from 'react-lazyload';

import background from './assets/images/landing-background.jpg';

function App() {
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    // setTimeout(() => {
    //   setLoading(true);
    // }, 1);
    //eslint-disable-next-line
  }, []);
  return (
    <div>
      <div className='fade-in-from-black'></div>
      {/* <LazyLoad once={true}>
        <Parallax background={background} speed={0.5} alt='landing backgound'>
          REMOVE ME
          <div style={{ height: '125px' }} />
          REMOVE ME
          <div className='container py-5'>
            <Landing></Landing>
          </div>
        </Parallax>
      </LazyLoad> */}
      <ParallaxMobile
        background={background}
        strength={999}
        blur={{ min: -10, max: 30 }}
      >
        <div className='container py-3 '>
          <Landing></Landing>
        </div>
      </ParallaxMobile>
      <div style={{ height: '200px' }} /> <div style={{ height: '200px' }} />{' '}
      <div style={{ height: '200px' }} /> <div style={{ height: '200px' }} />{' '}
      <div style={{ height: '200px' }} /> <div style={{ height: '200px' }} />{' '}
    </div>
  );
}

// export default App;
export default SplashScreen(App);
