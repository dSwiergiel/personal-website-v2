import React, { useEffect } from 'react';
import { jarallax, jarallaxElement, jarallaxVideo } from 'jarallax';

// const Parallax = ({
//   children,
//   background,
//   speed = '-.2',
//   postion = '50%',
//   alt = '',
// }) => {
//   return (
//     <div
//       data-jarallax
//       data-speed={speed}
//       data-img-position={postion}
//       className='jarallax'
//     >
//       <img className='jarallax-img' src={background} alt={alt} />
//       {/* children passes nested JSX wihtin the parent Parallax component */}
//       <div>{children}</div>
//     </div>
//   );
// };

const Parallax = ({
  children,
  background,
  speed = '-.2',
  postion = '50%',
  alt = '',
}) => {
  useEffect(() => {
    jarallax(document.querySelectorAll('.jarallax'), {
      speed: speed,
    });
  }, []);

  return (
    <div>
      <div className='jarallax'>
        <img className='jarallax-img' src={background} alt='' />
        {children}
      </div>
    </div>
  );
};

export default Parallax;
