import React, { useState, useEffect } from 'react';
import LazyLoad from 'react-lazyload';

import Splash from './components/splash/Splash';
import Nav from './components/nav/Nav';
import Landing from './components/landing/Landing';
import Parallax from './components/parallax/Parallax';
import mobileBackground from './assets/images/el-capitan.jpg';

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
      {/* <LazyLoad once={true}>
        <div className='landing-background pb-5'>
          <Header></Header>
          <Landing></Landing>
        </div>
      </LazyLoad>
      <div style={{ height: '200px' }} /> <div style={{ height: '200px' }} />{' '} */}
      {/* <LazyLoad once={true}> */}
      <Parallax
        background={mobileBackground}
        speed={0.1}
        alt='landing backgound'
      >
        <Nav duration={loadingTime}></Nav>
        <div className='mb-5 pb-5 container content' name='landing'>
          <Landing></Landing>
        </div>
      </Parallax>
      {/* </LazyLoad> */}
      <div style={{ height: '200px' }} /> <div style={{ height: '200px' }} />{' '}
      <div style={{ height: '200px' }} /> <div style={{ height: '200px' }} />{' '}
      <div style={{ height: '200px' }} /> <div style={{ height: '200px' }} />{' '}
      <div name='about'></div>
      <div style={{ height: '200px' }} /> <div style={{ height: '200px' }} />{' '}
      <div style={{ height: '200px' }} /> <div style={{ height: '200px' }} />{' '}
      <div name='education'></div>
      <div style={{ height: '200px' }} /> <div style={{ height: '200px' }} />{' '}
      <div style={{ height: '200px' }} /> <div style={{ height: '200px' }} />{' '}
      <div name='experience'></div>
      <div style={{ height: '200px' }} /> <div style={{ height: '200px' }} />{' '}
      <div style={{ height: '200px' }} /> <div style={{ height: '200px' }} />{' '}
      <div name='projects'></div>
      <div style={{ height: '200px' }} /> <div style={{ height: '200px' }} />{' '}
      <div style={{ height: '200px' }} /> <div style={{ height: '200px' }} />{' '}
      <div name='contact'></div>
    </div>
  );
}

export default App;
