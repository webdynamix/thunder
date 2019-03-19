import React from 'react';
// import { Parallax } from 'react-scroll-parallax';
import Parallax from 'react-rellax'
import Styled from 'styled-components';

const src = 'http://thethunderbike.com/wp-content/uploads/2017/11/cropped-header-1.jpg';

const Image = Styled.img`
width: 100%;
`;

const Poster = () => (
  <div>
  <Parallax speed={3} percentage={0}>
    <Image src={src} />
  </Parallax>
  <Parallax speed={6}>
    Introducing Turbo 1k
  </Parallax>
  </div>
);

export default Poster;
