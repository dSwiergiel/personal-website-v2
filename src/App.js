import React, { useState, useEffect } from 'react';
import LazyLoad from 'react-lazyload';

import Splash from './components/splash/Splash';
import Header from './components/header/Header';
import Landing from './components/landing/Landing';

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
        <div className='landing-background pb-5'>
          <Header></Header>
          <Landing></Landing>
        </div>
      </LazyLoad>
      <div style={{ height: '200px' }} /> <div style={{ height: '200px' }} />{' '}
      <div style={{ height: '200px' }} /> <div style={{ height: '200px' }} />{' '}
      <div style={{ height: '200px' }} /> <div style={{ height: '200px' }} />{' '}
    </div>
  );
}

export default App;
