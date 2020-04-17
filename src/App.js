import React from 'react';
import Landing from './components/landing/Landing';
import { Parallax, Background } from 'react-parallax';

import background from './assets/images/landing-background.jpg';
import './style.scss';

function App() {
  return (
    <div className=''>
      <Parallax
        blur={0}
        bgImage={require('./assets/images/landing-background.jpg')}
        bgImageAlt='the cat'
        strength={600}
        className='pb-5'
      >
        <div style={{ height: '150px' }} />
        <Landing></Landing>
      </Parallax>
      <div style={{ height: '200px' }} /> <div style={{ height: '200px' }} />{' '}
      <div style={{ height: '200px' }} /> <div style={{ height: '200px' }} />{' '}
      <div style={{ height: '200px' }} /> <div style={{ height: '200px' }} />
    </div>
  );
}

export default App;
