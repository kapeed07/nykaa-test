import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import {
  Home
} from '../container';

export default (
  <Router>
    <Route name="/" component={Home} />
  </Router>
)