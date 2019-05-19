import React from 'react';
import Styled from 'styled-components';
import image from '../images/map.jpg';
import { H2, H4, P } from 'components/shared';
import Parallax from 'react-rellax';

const Map = Styled.div`
  background: url(${image}) center;
  background-size: cover;
`;

const Content = Styled.div`
  color: #fff;
  text-align: center;
  padding: 60px 0;

  margin: auto;

  h2 {
    color: rgba(255, 255, 255, 0.7);
  }
`;

const Card = Styled.div`
  background: rgba(255, 255, 255, 0.8);
  color: #000;
  border-radius: 10px;
  padding: 40px;

  max-width: 500px;
  margin: 32px 16px 0;

  p {color: #000}

  a {color: #b02020}

  @media (min-width: 768px) {
    margin: 32px auto 0;
  }
`;

const Demo = () => {
  return (
    <Map id="demo">
    <Content>
        <H2>FREE TEST RIDE</H2>
        <Card>
          <P>
            If you live in or close to Los Angeles you can request to buy and or test ride one of your bikes locally.
            We are currently mobile and offer test rides in Playa del Rey
          </P>

          <H4>To Schedule a test ride</H4>
          <P>
            Text TESTRIDE to 323 673-5954
          </P>

          <P>
            or send us an email to<br />
            <a href="mailto:sales@thethunderbike.com">sales@thethunderbike.com</a>
          </P>
        </Card>
    </Content>
    </Map>
  );
};

export default Demo;
