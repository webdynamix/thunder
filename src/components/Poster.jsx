import React from 'react';
// import { Parallax } from 'react-scroll-parallax';
import Parallax from 'react-rellax'
import Styled from 'styled-components';

const src = 'http://thethunderbike.com/wp-content/uploads/2017/11/cropped-header-1.jpg';

const Image = Styled.img`
width: 100%;
`;

const Text = Styled.div`
  color: rgba(255, 255, 255, .5);
  text-align: center;
  font-family: Futura;
  font-size: 125px;
`;

const Poster = () => (
  <div>
  <Parallax speed={0}>
    <Image src={src} />
  </Parallax>
  <Parallax speed={5} centered percentage={0}>
    <Text>THUNDER</Text>
  </Parallax>
  </div>
);

export default Poster;
