import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './GlobalStyle';
import { ParallaxProvider } from 'react-scroll-parallax';
import App from './App';

const Root = () => (
  <Fragment>
    <GlobalStyle />
    <ParallaxProvider>
      <App />
    </ParallaxProvider>
  </Fragment>
);

ReactDOM.render(<Root />, document.getElementById('thunderApp'));
