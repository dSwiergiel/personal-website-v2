import React, { useEffect } from 'react';
import { Parallax, Background } from 'react-parallax';

const ParallaxMobile = ({
  children,
  background,
  strength = '500',
  blur = 0,
  alt = '',
}) => {
  useEffect(() => {
    //eslint-disable-next-line
  }, []);

  return (
    <Parallax
      blur={blur}
      bgImage={background}
      bgImageAlt={alt}
      strength={strength}
    >
      {children}
    </Parallax>
  );
};

export default ParallaxMobile;
