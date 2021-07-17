import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './components/Login'
import Profile from './components/Profile'
import Navbar from './components/Navbar'



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/profile' component={Profile} />
        </Switch>
      </Router>
        
    </>
  );
}

export default App;
