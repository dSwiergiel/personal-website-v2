import React from 'react';
import Landing from './components/landing/Landing';
import { Parallax } from 'react-parallax';

import background from './assets/images/landing-background.jpg';
import './style.scss';

function App() {
  return (
    <div className=''>
      <Parallax
        bgImage={background}
        bgImageAlt='Deven Swiergiel'
        strength={400}
        className='pb-5 '
      >
        <div style={{ height: '100px' }} />
        <Landing></Landing>
      </Parallax>
      <div style={{ height: '200px' }} /> <div style={{ height: '200px' }} />{' '}
      <div style={{ height: '200px' }} /> <div style={{ height: '200px' }} />{' '}
      <div style={{ height: '200px' }} /> <div style={{ height: '200px' }} />
    </div>
  );
}

export default App;
