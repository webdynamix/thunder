import React from 'react';
import Styled from 'styled-components';

export const Section = Styled.section`
  position: relative;

  padding: 80px 0 0;
  background-color: #e7e6ed;
`;

export const H2 = Styled.h2`
  font-size: 18px;
  text-transform: uppercase;
  font-family: futura;
  color: #555;
  margin: 0;
  display: block;

  @media (min-width: 768px) {
    font-size: 50px;
  }
`;

export const H3 = Styled.h3`
  font-family: futura;
  font-size: 25px;
  margin: 48px 0 16px;
`;

export const H4 = Styled.h4`
  font-size: 18px;
  margin: 16px 0 16px;
`;

export const P = Styled.p`
  margin: 16px 0;
  color: #555;
`

export const Button = Styled.a`
  border-radius: 30px;
  height: 60px;
  line-height: 57px;
  border: 1px solid rgb(0, 0, 0);
  color: rgb(0, 0, 0);
  padding: 0 60px;
  font-size: 19px;
  display: inline-block;
  cursor: pointer;
  transition: all .5s;
  background: rgba(255, 255, 255, 0.5);
  text-decoration: none;

  &:hover {
    color: #fff;
    background: #b02020;
  }
`;

export const ButtonInverted = Styled(Button)`
  background: rgba(176,32,32, 0.8);
  color: rgba(255, 255, 255, 0.7);
`;

export const Container = Styled.div`
  max-width: 1250px;
  margin: auto;
`;

export const FlexContainer = Styled.div`
  max-width: 1250px;
  margin: auto;

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const ContentWrap = Styled.div`
  padding: 80px 32px;
  max-width: 900px;
  margin: auto;
  min-height: 500px;
`;

export const Ul = Styled.ul`
color: #555;

li {
  margin: 7px 0;
}
`
