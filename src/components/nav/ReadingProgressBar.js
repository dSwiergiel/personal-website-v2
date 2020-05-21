import React, { useState, useEffect } from 'react';

const ReadingProgress = ({ target }) => {
  const [scrollProgress, setReadingProgress] = useState(0);
  const scrollListener = () => {
    if (!target.current) {
      return;
    }

    const element = target.current;
    const totalHeight =
      element.clientHeight - element.offsetTop - window.innerHeight;
    const windowScrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    if (windowScrollTop === 0) {
      return setReadingProgress(0);
    }

    if (windowScrollTop > totalHeight) {
      return setReadingProgress(100);
    }

    setReadingProgress((windowScrollTop / totalHeight) * 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollListener);
    return () => window.removeEventListener('scroll', scrollListener);
  });

  const scrollProgressBar = {
    position: 'sticky',
    height: '4px',
    top: '0',
    backgroundColor: '#8b7c59',
    transition: 'ease-out',
    width: `${scrollProgress}%`,
  };
  return <div style={scrollProgressBar} />;
};
export default ReadingProgress;
