//
// Copyright (c) 2018
//

import React, { Component } from 'react';

import './css/w3.css';

class DropdownButton extends Component {
  toggleMenu() {
    const x = document.getElementById("Demo");
    if (x.className.indexOf("w3-show") === -1) {
        x.className += " w3-show";
    } else { 
      x.className = x.className.replace(" w3-show", "");
    }
  }

  render() {
    return (
      <div className="w3-dropdown-click">
        <button onClick={() => this.toggleMenu()} className="w3-button w3-black">...</button>

        <div id="Demo" className="w3-dropdown-content w3-bar-block w3-card-4 w3-animate-zoom">
          <a href="/" className="w3-bar-item w3-button">Link 1</a>
          <a href="/" className="w3-bar-item w3-button">Link 2</a>
          <a href="/" className="w3-bar-item w3-button">Link 3</a>
        </div>
      </div>
    );
  }
}

export default DropdownButton;
