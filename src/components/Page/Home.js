import React, { Component } from 'react';
import MyMenu from '../Partial/MyMenu'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render() {
    console.log(process.env)
    return (
      <div className="main Home">
        <MyMenu />
        <div className="content">
          Home Page
        </div>
      </div>
    );
  }
}

export default Home;
