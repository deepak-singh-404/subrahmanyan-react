import React from 'react';
import {Route, BrowserRouter as Router, Switch, } from 'react-router-dom'
import Product from './components/Product'

function App() {

  return (
    <Router>
      <Route exact path="/products" component={Product} />
    </Router>
  );
}

export default App;
