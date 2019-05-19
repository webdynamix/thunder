import React from 'react';
import Styled from 'styled-components';
import image from '../images/section.jpg';
import Parallax from 'react-rellax'


const Section = Styled.div`
  position: relative;
  background: url(${image}) no-repeat right center;
  background-size: cover;
  text-align: center;
  padding: 80px 0;
`;

const H2 = Styled.h3`
  text-align: center;
  font-size: 50px;
  margin: 0 0 32px;
`;

const H3 = Styled.h3`
  text-align: center;
  font-size: 20px;
`;

const Icon = Styled.div`

  border: solid black;
   border-width: 0 3px 3px 0;
   display: inline-block;
   padding: 9px;
   transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
`;

class Explore extends React.Component {

  render() {
    return (
          <Section>
            <H2>
              Push the limits. 28 MPH Top Speed <br />
            </H2>
            <H3>
              Expore all features
            </H3>
            <Icon />
          </Section>
        )
  }
}

export default Explore;
