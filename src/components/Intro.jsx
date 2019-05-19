import React from 'react';
import Styled from 'styled-components';
import image from '../images/bikeGray.jpg';
import Parallax from 'react-rellax'

import { Section, H2 } from './shared';

const Image = Styled.div`
  background: url(${image}) no-repeat top center;
  background-size: 500px 186px;
  height: 200px;
  margin: -20px 0 0;

  @media (min-width: 768px) {
    height: 400px;
    background-size: 1000px 372px;
  }
`;

const Contents = Styled.div`
  text-align: center;
  max-width: 760px;
  margin: 0 auto;
`;

const P = Styled.p`
  font-size: 16px;

`;


class Intro extends React.Component {

  render() {
    return (
          <Section>
            <Contents>
              <H2>Class 3 performance</H2>
              <P>
                A high performance, long range-electric bike, powered by a 750 Watt motor,
                The Thunder bike is capable of Class 3 performance with torque-sensing pedal assist included.

                </P>
            </Contents>
            <Parallax speed={-0.5}><Image /></Parallax>
          </Section>
        )
  }
}

export default Intro;
