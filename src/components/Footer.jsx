import React from 'react';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';
import image from '../images/lcd.jpg';
import logo from '../images/logo.svg';
import Parallax from 'react-rellax'

import { FlexContainer as Container, H4 } from './shared';

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

const Footer = Styled.footer`
  background: #242424;
  color: #fff;

  padding: 48px 16px;

  @media (min-width: 768px) {
    padding: 48px 0;
  }
`;

const Column = Styled.div`
  flex: 1;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const Logo = Styled.img`
  width: 250px;
  margin: -16px 32px 0 16px;
`;

const Wrap = Styled(Container)`
  align-items: center;
`

const P = Styled.p`
  margin: 16px 0;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 200;
  font-size: 16px;
  line-height: 20px;

  a {
    color: #fff;
  }
`;

const Nav = Styled.div`
  margin: 16px 0;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 200;
  font-size: 16px;
  line-height: 20px;

  a {
    color: #fff;
    display: block;
    margin: 8px 0;
  }
`;

class Feature extends React.Component {

  render() {
    return (
        <Footer>
          <Wrap>
            <Column><Link to="/"><Logo src={logo} alt="Thunder" /></Link></Column>
            <Column>


            </Column>
            <Column>
              <H4>CONTACT</H4>
              <P> Text TESTRIDE to <br />323 673-5954</P>
              <P> Send us an email at
                <br />
                <a href="mailto:sales@thethunderbike.com">sales@thethunderbike.com</a>
              </P>
            </Column>

            <Column>
              <H4>About us</H4>
              <Nav>
                <Link to="/about">About</Link>
                <Link to="/returns">Returns and Cancellations</Link>
                <Link to="/warranty">Warranty</Link>
                <Link to="/privacy">Privacy</Link>
              </Nav>
            </Column>
          </Wrap>
        </Footer>
        )
  }
}

export default Feature;
