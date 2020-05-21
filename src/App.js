import React, { useState, useEffect } from 'react';
import LazyLoad from 'react-lazyload';

import Splash from './components/splash/Splash';
import Nav from './components/nav/Nav';
import Landing from './components/landing/Landing';
import Parallax from './components/parallax/Parallax';
import mobileBackground from './assets/images/el-capitan.jpg';
import ReadingProgress from './components/nav/ReadingProgressBar';
function App() {
  const [loading, setLoading] = useState(true);
  const loadingTime = 3000;
  const target = React.createRef();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, loadingTime);
    //eslint-disable-next-line
  }, []);
  return (
    <div ref={target}>
      {/* Splash Screen */}
      {loading && <Splash duration={loadingTime}></Splash>}
      {/* <LazyLoad once={true}>
        <div className='landing-background pb-5'>
          <Header></Header>
          <Landing></Landing>
        </div>
      </LazyLoad>
      <div style={{ height: '200px' }} /> <div style={{ height: '200px' }} />{' '} */}
      <Parallax
        background={mobileBackground}
        speed={0.1}
        alt='landing backgound'
      >
        <Nav duration={loadingTime} target={target}></Nav>
        <div className='pb-4 content'>
          <Landing id='landing'></Landing>
        </div>
      </Parallax>
      <div style={{ height: '200px' }} /> <div style={{ height: '200px' }} />{' '}
      <div style={{ height: '200px' }} /> <div style={{ height: '200px' }} />{' '}
    </div>
  );
}

export default App;
