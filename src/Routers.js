import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Page/Home';
import Test from './components/Page/Test';

class Routers extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/test" component={Test}/>
        </Switch>
      </div>
    );
  }
}

export default Routers
