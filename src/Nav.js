import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <div className="header"><h1>Omega Sigma Member Page</h1></div>
        <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu"/>
        <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
          <div className="spinner diagonal part-1"></div>
          <div className="spinner horizontal"></div>
          <div className="spinner diagonal part-2"></div>
        </label>
        <div id="sidebarMenu">
          <ul className="sidebarMenuInner">
            <li>Amanda Frazier<span>Profile</span></li>
            <li><a href="https://vanila.io" target="_blank" rel="noopener noreferrer">Messaging</a></li>
            <li><a href="https://instagram.com/plavookac" target="_blank" rel="noopener noreferrer">Files</a></li>
            <li><a href="https://twitter.com/plavookac" target="_blank" rel="noopener noreferrer">Minutes</a></li>
            <li><a href="https://www.youtube.com/channel/UCDfZM0IK6RBgud8HYGFXAJg" target="_blank" rel="noopener noreferrer">Hours</a></li>
            <li><a href="https://www.linkedin.com/in/plavookac/" target="_blank" rel="noopener noreferrer">Pay</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Nav;
