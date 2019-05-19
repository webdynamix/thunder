import React from 'react';
import Styled from 'styled-components';
import stripes from '../images/stripes.png';
import bg from '../images/scale_bg.png';
import image from '../images/gallery/RedArt.jpg';
import Video from './Video';
import { ButtonInverted } from './shared';

export const largeDevice = () => matchMedia(`screen and (min-width: 768px)`);

const Section = Styled.section`
  position: relative;
  padding-bottom: 150%;
  background: url(${image});
  background-size: cover;

  @media (min-width: 768px) {
    padding-bottom: 56%;
  }
`;

const Bg = Styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: url(${bg}) center;
  background-size: cover;
`;

const Pattern = Styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: url(${stripes}) repeat;
`;

const Content = Styled.div`
  position: absolute;
  bottom: 20%;
  left: 16px;
`;

const H1 = Styled.h1`
  color: rgba(255, 255, 255, 1);
  font-family: futura;
  font-size: 50px;
  line-height: 1;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 90px;
    color: rgba(255, 255, 255, .5);
  }

  @media (min-width: 1250px) {
    font-size: 125px
  }
`;

const Button = Styled(ButtonInverted)`
  margin-top: 32px;
`;

const Headline = Styled.div`
  color: #fff;
  display: inline-block;
  margin: 32px 32px 0 16px;
  font-size: 18px;
`;

class Hero extends React.Component {

  constructor(...args) {
    super(...args);

    this.ref = React.createRef();
    console.log('device', largeDevice().matches)
  }

  render() {
    return (
          <Section ref={this.ref}>
            {
              largeDevice().matches &&
              <Video sectionRef={this.ref} />
            }

            <Bg />
            <Pattern />
            <Content>
              <H1>28 MPH</H1>
              <H1>THUNDER</H1>
              <Headline>HIGH PERFORMANCE ELECTRIC BIKE</Headline>
              <Button href="/store/shop/?add-to-cart=15">Buy Now for $1399</Button>
            </Content>
          </Section>
        )
  }
}

export default Hero;
