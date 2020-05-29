import React, { Component } from 'react';
import logo from '../../logo.png';

class Header extends Component {
  render(){
    return (
      <header className="site-header">
        <div className="contain">
          <img className="site-logo" src={logo} alt="Shelfie" />
          <h1 className="site-title">Shelfie</h1>
        </div>
      </header>
    )
  }
}

export default Header
