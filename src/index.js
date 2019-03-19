import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Normalize } from 'styled-normalize'
import App from './App.jsx';

const Root = () => (
  <Fragment>
    <App />
  </Fragment>
);

ReactDOM.render(<Root />, document.getElementById('thunderApp'));
