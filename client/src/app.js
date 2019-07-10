import React from 'react';
import './app.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import LandingPage from './components/landing';

function App() {
  return (
    <Router>
       <Switch>
        <Route exact path="/" render={props=><LandingPage {...props} />} />

       </Switch>
     </Router>
  );
}

export default App;