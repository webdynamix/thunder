import React from 'react';
import Styled from 'styled-components';
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';

import ShoppingBag from '../images/shoppingBag';

const NavWrap = Styled.header`
  position: fixed;
  background: rgba(255, 255, 255, 0.9);
  right: 0;
  top: 0;
  left: 0;
  z-index: 10000;
  display: flex;
  height: 35px;
  color: #3c3950;

  @media (min-width: 768px) {
    display: flex;
    height: 60px;
    background: rgba(255, 255, 255, 0.9);
  }

  a {
    font-size: 18px;
    font-weight: 700;
    font-family: 'Montserrat', sans-serif;
    padding: 0 24px;
    color: #3c3950;
    cursor: pointer;
    text-decoration: none;
    white-space: nowrap;

    &:hover {
      text-decoration: underline;
    }

    @media (min-width: 768px) {
      color: #3c3950;

      &:hover {
        color: #b02020;
      }
    }
  }
`;

const Container = Styled.div`
  max-width: 1200px;
  margin: auto;
  display: none;
  align-items: center;

  flex: 1;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const Cart = Styled.a`
  line-height: 14px;
  margin-right: 16px;
  padding: 0 !important;

  white-space: normal !important;

  @media (min-width: 768px) {
    line-height: 24px;
    background-position: calc(100% - 10px) 6px;
    padding: 8px 40px 8px 24px !important;
  }

`;

const Right = Styled.div`
  align-items: center;
  display: flex;

  a {
    font-size: 14px;
  }

  justify-content: flex-end;
  flex: 100%;

  @media (min-width: 768px) {
    flex: 1;
  }
`;


const scrollTo = (id) => {
  console.log('scroolto', id)
  setTimeout(() => {
    const element = document.getElementById(id);
    if (!element) return;

    element.scrollIntoView({

    });
  }, 0)
}

class Nav extends React.Component {

  componentDidUpdate(prev) {


    if (this.props.location.pathname !== prev.location.pathname) {

      window.scrollTo(0, 0)
    }
  }

  render() {
    return (
      <NavWrap>
        <Container>
          <Link to='/' onClick={() => { scrollTo('features'); }}>Features</Link>
          <Link to='/' onClick={() => { scrollTo('demo'); }}>Test Ride</Link>
          <Link to='/' onClick={() => { scrollTo('gallery'); }}>Gallery</Link>
          <a href="/store/shop/?add-to-cart=15">Purchase</a>


        </Container>
        <Right>
          <a href="/store/my-account/">My Account</a>
          <Cart href="/store/cart/"><ShoppingBag /></Cart>
        </Right>

      </NavWrap>
    );
  }
}

export default withRouter(Nav);
