import React, { useState, useEffect, lazy, Suspense } from 'react';

import { BrowserView, MobileView } from 'react-device-detect';
import Parallax from '../wrapers/parallax/Parallax';
import Splash from '../main/splash/Splash';
import Nav from '../main/nav/Nav';
import UnderConstruction from '../main/construction/UnderConstruction';
import landingBackground from '../../assets/images/el-capitan.jpg';
import LazyRender from '../wrapers/lazy-render/LazyRender';

const Landing = lazy(() => import('../main/landing/Landing'));
const About = lazy(() => import('../main/about/About'));
const Stack = lazy(() => import('../main/stack/Stack'));
const Projects = lazy(() => import('../main/projects/Projects'));

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
      {/* <BrowserView>
        <div className='landing-background '>
          <Nav duration={loadingTime}></Nav>
          <div className=' pb-5 container content' name='landing'>
            <Landing></Landing>
          </div>
        </div>
      </BrowserView> */}
      {/* background fixed on mobile devices is disabled due to
       high repaint cost so a parallax plugin is used for mobile
       */}
      {/* <MobileView> */}
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
      {/* </MobileView> */}
      <Suspense fallback={<h1>Still Loading…</h1>}>
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
      </Suspense>

      <Suspense fallback={<h1>Still Loading…</h1>}>
        <div className='bg-warning pt-4' name='projects'>
          <Projects></Projects>
        </div>
      </Suspense>
      <div name='contact'>
        <LazyRender>
          <UnderConstruction></UnderConstruction>
        </LazyRender>
      </div>
    </div>
  );
}

export default Home;
