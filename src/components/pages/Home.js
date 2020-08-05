import React, { useState, useEffect } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import Parallax from '../parallax/Parallax';

import Splash from '../splash/Splash';
import Nav from '../nav/Nav';
import Landing from '../main/landing/Landing';
import About from '../main/about/About';
import Stack from '../main/stack/Stack';
import UnderConstruction from '../main/construction/UnderConstruction';

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
      <BrowserView>
        <div className='landing-background'>
          <Nav duration={loadingTime}></Nav>
          <div className=' pb-5 container content ' name='landing'>
            <Landing></Landing>
          </div>
        </div>
      </BrowserView>
      {/* background fixed on mobile devices is disabled due to
       high repaint cost so a parallax plugin is used for mobile
       */}
      <MobileView>
        <Nav duration={loadingTime}></Nav>
        <Parallax
          background={landingBackground}
          speed={0.1}
          alt='landing backgound'
        >
          <div className=' pb-5 container content' name='landing'>
            <Landing></Landing>
          </div>
        </Parallax>
      </MobileView>
      <div className='container py-4 px-4'>
        <div className='row'>
          <div name='about' className='col-lg-6'>
            <About></About>
          </div>
          <div name='stack' className='col-lg-6'>
            <Stack></Stack>
          </div>
        </div>
      </div>
      <div name='education'>
        <UnderConstruction></UnderConstruction>
      </div>
      <div name='projects'></div>
      <div name='contact'></div>
    </div>
  );
}

export default Home;
