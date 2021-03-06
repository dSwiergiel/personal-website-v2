import React from 'react';

const Footer = () => {
  return (
    <div className='bg-secondary py-3'>
      <small className='d-flex align-items-center justify-content-center mb-0'>
        &#169; {new Date().getFullYear()} Deven Swiergiel. All rights reserved.
      </small>
    </div>
  );
};

export default Footer;
