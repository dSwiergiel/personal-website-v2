import React from 'react';
import './underconstruction.scss';

const UnderConstruction = () => {
  return (
    <section className='text-center mb-5 container'>
      <h1 className='mb-4'>Under Construction</h1>
      <i className='fas fa-tools under-construction-logo mb-4'></i>
      <p>
        Unfortunately, this part of the site is still in progress but will soon
        feature a projects section where some of my best work will be shown, as
        well as an education and contact section.
      </p>
      <p>Thanks for your patience!</p>
    </section>
  );
};

export default UnderConstruction;
