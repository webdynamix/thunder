import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import Styled from 'styled-components';

const src = 'http://thethunderbike.com/wp-content/uploads/2017/11/cropped-header-1.jpg';

const Image = Styled.img`
width: 100%;
`;

const Banner = () => (
  <ParallaxBanner
    layers={[
        {
            image: src,
            amount: 0.1,
        },
        {
            image: 'https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001',
            amount: 0.3,
        },
    ]}
    style={{
        height: '500px',
    }}
>
    <h1>Banner Children</h1>
</ParallaxBanner>
);

export default Banner;
