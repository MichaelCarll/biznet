import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import LandingPage from './components/landingpage'

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