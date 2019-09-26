import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import home from './components/Home';
import error from './components/Error';


const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path='/' component={home} />
        <Route path='/' component={error} />
        <Route exact path='/error' component={error} />
      </Switch>
    </div>
  </Router>
);

export default App;
