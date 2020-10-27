import React from 'react';

const Footer = () => {
  return (
    <div className='bg-secondary py-3'>
      <p className='text-center mb-0'>
        &#169; {new Date().getFullYear()} Deven Swiergiel
      </p>
    </div>
  );
};

export default Footer;
