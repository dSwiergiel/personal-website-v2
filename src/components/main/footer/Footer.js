import React from 'react';

const Footer = () => {
  return (
    <div className='bg-secondary py-3'>
      <p className='text-center mb-0'>
        &#169; Deven Swiergiel {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default Footer;
