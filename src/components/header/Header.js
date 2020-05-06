import React, { useEffect, useState, useRef } from 'react';
import './header.scss';

const Header = () => {
  let header = useRef(null);
  let sticky;
  useEffect(() => {
    sticky = header.offsetTop;
    //eslint-disable-next-line
  }, []);
  //   window.onscroll = function () {
  //     myFunction();
  //   };

  //   function myFunction() {
  //     console.log('Im scrolling');
  //     if (window.pageYOffset > sticky) {
  //       header.classList.add('sticky');
  //     } else {
  //       header.classList.remove('sticky');
  //     }
  //   }
  return (
    <div
      className='container header-container py-4'
      id='header'
      ref={(el) => {
        header = el;
      }}
    >
      <h1 className='header'>
        Deven
        <br />
        Swiergiel
      </h1>
    </div>
  );
};

export default Header;
