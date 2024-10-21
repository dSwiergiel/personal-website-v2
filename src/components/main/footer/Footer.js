import React from 'react';

const Footer = () => {
  return (
    <section className='bg-secondary py-3'>
      <small className='d-flex align-items-center justify-content-center mb-0'>
        &#169; {new Date().getFullYear()} Deven Swiergiel. All rights reserved.
      </small>
    </section>
  );
};

export default Footer;
