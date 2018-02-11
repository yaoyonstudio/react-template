import React, { Component } from 'react';
import './style.css';
import Routers from './Routers'

class App extends Component {
  render() {
    return (
      <Routers {...this.props} />
    );
  }
}

export default App;
