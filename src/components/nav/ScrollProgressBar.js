import React, { useEffect, useState, useRef } from 'react';

const ScrollProgressBar = () => {
  useEffect(() => {
    window.addEventListener('scroll', animateProgressBar);
    //eslint-disable-next-line
  }, []);
  function animateProgressBar() {
    let winScroll = window.pageYOffset;
    let height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;

    document.getElementById('progressBar').style.width = scrolled + '%';
  }
  return <div id='progressBar'></div>;
};

export default ScrollProgressBar;
