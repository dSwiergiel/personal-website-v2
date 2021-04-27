import React, { useState, useEffect, lazy, Suspense } from 'react';

import Splash from '../main/splash/Splash';
import Nav from '../main/nav/Nav';

import LazyRender from '../wrapers/lazy-render/LazyRender';

const Landing = lazy(() => import('../main/landing/Landing'));
const About = lazy(() => import('../main/about/About'));
const Stack = lazy(() => import('../main/stack/Stack'));
const Projects = lazy(() => import('../main/projects/Projects'));
const Contact = lazy(() => import('../main/contact/Contact'));
const Footer = lazy(() => import('../main/footer/Footer'));

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
      <Nav duration={loadingTime}></Nav>
      <div className='pb-5 container content' name='landing'>
        <div class="landing-bg"></div>
        <Landing></Landing>
      </div>

      <Suspense fallback={<h1>Still Loading…</h1>}>
        <div class="bg-white">
          <div className='container  py-4 px-4'>
            <div className='row'>
              <div name='about' className='col-lg-6'>
                <About></About>
              </div>
              <div name='stack' className='col-lg-6'>
                <Stack></Stack>
              </div>
            </div>
          </div>
        </div>

      </Suspense>
      <Suspense fallback={<h1>Still Loading…</h1>}>
        <div className='bg-warning pt-4' name='projects'>
          <Projects></Projects>
        </div>
      </Suspense>
      <Suspense fallback={<h1>Still Loading…</h1>}>
        <div class="bg-white">
          <div className='container py-4' name='contact'>
            <LazyRender delay={0} duration={1}>
              <Contact></Contact>
            </LazyRender>
          </div>
        </div>
      </Suspense>
      <Suspense fallback={<h1>Still Loading…</h1>}>
        <div class="bg-white">
          <LazyRender delay={0} duration={1.2}>
            <Footer></Footer>
          </LazyRender>
        </div>
      </Suspense>
    </div>
  );
}

export default Home;
