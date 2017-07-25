import React, { Component } from 'react';
// import logo from '../assets/logo.png'

class Header extends Component {

  render() {
    return (
      <div className="Header">
        <nav>
          <div className="nav-wrapper deep-purple darken-1">
            <a href="/" className="brand-logo center"><i>News App</i></a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="https://github.com/DevFBatch15Front/Mauricio-Saavedra-FrontEnd/tree/master/RappiReact/news">Github</a></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
