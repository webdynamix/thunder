import React from 'react';
import Styled from 'styled-components';
import image from '../images/lcd.jpg';
import image2 from '../images/wheel.jpg';
import Parallax from 'react-rellax'


const Section = Styled.div`
  background-color: #e7e6ed;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const Side = Styled.div`
  background-size: cover;

  flex: 50% 0 0;
  position: relative;

  @media (min-width: 768px) {
    /* padding-bottom: 50%; */
  }

  @media (min-width: 1250px) {
    /* padding-bottom: 35%; */
  }
`;

const Side1 = Styled(Side)`
  background: url(${image}) bottom;
`;

const Side2 = Styled(Side)`
  background: url(${image2}) center;
`;

const Content = Styled.div`

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, .65);
  color: #fff;

  font-size: 18px;
  font-weight: 200;
  padding: 32px 16px;
  height: 100%;

  @media (min-width: 768px) {
    padding: 64px 32px;
  }

  ul {
    line-height: 32px;
    background: rgba(255, 255, 255, 0.8);
    color: #000;
    border-radius: 10px;
    padding: 20px 0 32px 42px;
    margin: 0;
  }

  @media (min-width: 768px) {
    /* position: absolute; */
  }
`;

const Wrap = Styled.div`
  max-width: 500px;
  margin: auto;
  position: relative;
  padding-top: 16px;

`;

const H3 = Styled.h3`
  font-family: futura;
  margin: 0 0 32px;
  font-size: 32px;
  color: rgba(255, 255, 255, .55);
  text-transform: uppercase;
`;

const SeeAll = Styled.a`
  position: absolute;
  bottom: 16px;
  right: 16px;
  color: #b02020;
  text-decoration: underline;
  font-weight: 400;
  font-size: 14px;
  display: none;
`;

class Feature extends React.Component {

  render() {
    return (
          <Section id="features">
            <Side1>
              <Content>
                <Wrap>
                    <H3>Electronic Features</H3>
                    <ul>
                      <li>World Class 750 Watt Bafang Geared Hub Motor (1,040 Watt Peak)</li>
                        <li>46 Volt Battery 10.4 Ah / 19.2 Ah Extended Range options</li>
                        <li>LCD Advanced Matrix Display</li>
                        <li>Thumb Throttle Included</li>
                        <li>Torque and Cadence Pedal Assist Sensor with 9 levels</li>
                        <li>Internal Controller and wiring, Integrated front/rear lights</li>
                    </ul>
                    <SeeAll>See all</SeeAll>
                </Wrap>
              </Content>
            </Side1>
            <Side2>
              <Content>
                <Wrap>
                  <H3>Mechanical Features</H3>
                  <ul>
                    <li>180 mm Adjustable Disc Brakes</li>
                    <li>Adjustable Air Suspension Fork</li>
                    <li>7 Speed Shimano Cassette Drivetrain</li>
                    <li>Frame designed to be integrated with battery</li>
                    <li>26 x 4.0 Kenda Fat tires</li>
                    <li>Ergonomic grips, handlebar bell included</li>
                  </ul>
                  <SeeAll>See all</SeeAll>
                </Wrap>
              </Content>
            </Side2>

          </Section>
        )
  }
}

export default Feature;
