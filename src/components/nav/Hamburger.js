import React from 'react';
const Hamburger = ({ fill, height = '30px', classes }) => {
  return (
    <svg
      viewBox='0 0 50 40'
      fill={fill}
      height={height}
      className={classes}
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect id='ham-top' width='30' height='6' rx='4' ry='4' />
      <rect id='ham-middle' y='17' width='50' height='6' rx='4' ry='4' />
      <rect id='ham-bottom' width='30' height='6' rx='4' ry='4' x='20' y='34' />
    </svg>
  );
};

export default Hamburger;
