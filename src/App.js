import React, { useState, useEffect } from 'react';
import LazyLoad from 'react-lazyload';

import Landing from './components/landing/Landing';
import Parallax from './components/parallax/Parallax';
import Splash from './components/splash/Splash';

// import background from './assets/images/landing-background.jpg';
import mobileBackground from './assets/images/el-capitan.jpg';
// import mobileBackground from './assets/images/yosemite-5k.jpg';

function App() {
  const [loading, setLoading] = useState(true);
  const loadingTime = 3000;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, loadingTime);
    //eslint-disable-next-line
  }, []);
  return (
    <div>
      {/* Splash Screen */}
      {loading && <Splash duration={loadingTime}></Splash>}
      <LazyLoad once={true}>
        <Parallax
          background={mobileBackground}
          speed={0.5}
          alt='landing backgound'
        >
          REMOVE ME
          <div style={{ height: '125px' }} />
          REMOVE ME
          <div className='container py-5'>
            <Landing></Landing>
          </div>
        </Parallax>
      </LazyLoad>
      <div style={{ height: '200px' }} /> <div style={{ height: '200px' }} />{' '}
      <div style={{ height: '200px' }} /> <div style={{ height: '200px' }} />{' '}
      <div style={{ height: '200px' }} /> <div style={{ height: '200px' }} />{' '}
    </div>
  );
}

export default App;
