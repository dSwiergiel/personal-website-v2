import React, { useState, useEffect } from 'react';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
  isIE,
} from 'react-device-detect';
import Parallax from '../parallax/Parallax';

import Splash from '../splash/Splash';
import Nav from '../nav/Nav';
import Landing from '../main/landing/Landing';
import About from '../main/about/About';
import UnderConstruction from '../construction/UnderConstruction';

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
  if (isIE)
    return <div> IE is not supported. Download Chrome/Opera/Firefox </div>;
  return (
    <div>
      {/* Splash Screen */}
      {loading && <Splash duration={loadingTime}></Splash>}

      <BrowserView>
        <div className='landing-background'>
          <Nav duration={loadingTime}></Nav>

          <div className=' pb-5 container content ' name='landing'>
            <Landing></Landing>
          </div>
        </div>
      </BrowserView>
      <MobileView>
        <Nav duration={loadingTime}></Nav>
        <Parallax
          background={landingBackground}
          speed={0.1}
          alt='landing backgound'>
          <div className=' pb-5 container content' name='landing'>
            <Landing></Landing>
          </div>
        </Parallax>
      </MobileView>

      <div name='about'>
        <About></About>
      </div>
      <div name='education'>
        <UnderConstruction></UnderConstruction>
      </div>
      <div name='experience'></div>
      <div name='projects'></div>
      <div name='contact'></div>
    </div>
  );
}

export default Home;
