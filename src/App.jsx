import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Nav from 'components/Nav'
import Footer from 'components/Footer';

import Landing from 'pages/Landing';
import About from 'pages/About';
import Warranty from 'pages/Warranty';
import Returns from 'pages/Returns';
import Privacy from 'pages/Privacy';
import Demo from 'pages/Demo';

function AppRouter() {

  return (
    <Router >
      <Nav />
      <Route path='/' exact component={Landing} />
      <Route path='/demo' component={Demo} />
      <Route path='/about' component={About} />
      <Route path='/warranty' component={Warranty} />
      <Route path='/returns' component={Returns} />
      <Route path='/privacy' component={Privacy} />

      <Footer />
    </Router>

  );
}

export default AppRouter;
