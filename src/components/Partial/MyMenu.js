import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class MyMenu extends Component {
  render() {
    return (
      <nav className="MyMenu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/test">Test</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default MyMenu;
