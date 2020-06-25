import React, { useState, useEffect, useRef } from 'react';
// import LazyLoad from 'react-lazyload';
import Parallax from '../parallax/Parallax';

import Splash from '../splash/Splash';
import Nav from '../nav/Nav';
import Landing from '../main/landing/Landing';
import About from '../main/about/About';

import landingBackground from '../../assets/images/el-capitan.jpg';

function Home() {
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
      {/* <LazyLoad once={true}> */}
      <Nav duration={loadingTime}></Nav>
      <Parallax
        background={landingBackground}
        speed={0.1}
        alt='landing backgound'
      >
        {/* <Nav duration={loadingTime}></Nav> */}
        <div className=' pb-5 container content' name='landing'>
          <Landing></Landing>
        </div>
      </Parallax>
      {/* </LazyLoad> */}
      <div name='about'>
        <About></About>
      </div>
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

export default Home;
