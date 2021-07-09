import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Video from './components/Video'
import Footer from './components/Footer'


function App() {
  return (
    <>
    <Router>
      <Navbar/>
    <Switch>
      <Route exact path='/profile' component={Profile} />
      <Route exact path='/video' component={Video} />
    </Switch>
    <Footer />
  </Router>
    </>
  );
}

export default App;
