import React, { Fragment } from 'react';
import Styled from 'styled-components';
import bg from '../images/lightBg.jpg';
import image from '../images/bikeGray.jpg';
import thunder1K from '../images/thunder1k.jpg';
import Parallax from 'react-rellax'

import { FlexContainer, Section, H2, Button } from './shared';

export const largeDevice = () => matchMedia(`screen and (min-width: 768px)`);

const Item = Styled.div`
flex: 1;
margin: 0 32px;

&::after {
  content: '';
  display: block;
  height: 0px;
  box-shadow:0px 0px 15px 2px #000;
  margin: 0 30px;
}
`;

const Contents = Styled.div`
  text-align: center;
  max-width: 760px;
  margin: 0 auto 32px;
`;

const Img = Styled.img`
  display: block;
  width: 100%;
`;

const Details = Styled.div`
  padding: 0 0 80px;
`;

const Detail = Styled.div`
  text-align: center;
  flex: 1;

`;

const Detail2 = Styled.div`
  text-align: center;
  flex: 1;


  padding-bottom: 32px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 32px;

  @media (min-width: 768px) {
    border-bottom: 0 solid #eee;
    margin-bottom: 0;
  }
`;

const H3 = Styled.h3`
font-family: futura;
font-size: 25px;
margin: 48px 0 16px;
`;

const P = Styled.p`
  color: #555;
  margin: 16px 0 32px;
`;

class Compare extends React.Component {

  render1k() {
    return (
      <Detail>
        <Item>
          <Img src={thunder1K} />
        </Item>
        <H3>THUNDER 1k</H3>
        <P>1000 Watts of raw power 32MPH top speed.
        <br />Available for Pre-orders</P>
        <Button href="/store/shop/?add-to-cart=332">Pre-order for $1399</Button>
      </Detail>
    )
  }

  renderPro() {
    return (
      <Detail2>
        <Item>
          <Img src={image} />
        </Item>
        <H3>THUNDER PRO</H3>
        <P>World class 750W high performance motor.
        <br />28MPH top speed.</P>
        <Button href="/store/shop/?add-to-cart=15">Buy now for $1399</Button>
      </Detail2>
    )
  }

  render() {
    console.log('is large', largeDevice())
    return (
        <Section>
          <Contents><H2>Compare</H2></Contents>
          <Details>
            <FlexContainer>
              {
                largeDevice().matches ?
                <Fragment>
                 {this.render1k()}
                 {this.renderPro()}
                </Fragment> :
                <Fragment>
                  {this.renderPro()}
                 {this.render1k()}
                </Fragment>
              }

            </FlexContainer>
          </Details>
        </Section>
        )
  }
}

export default Compare;
