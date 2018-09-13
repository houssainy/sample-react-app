//
// Copyright (c) 2018
//

import React, { Component } from 'react';

import logo from '../../images/logo.svg';
import './css/header.css';

class AppHeader extends Component {
  render() {
    return (
      <header class="header-two-bars">
        <div class="header-first-bar">
          <div class="header-limiter">
            <h1><a href="#"><img src={logo} width="91" height="49" alt="logo"/></a></h1>

            <nav>
              <a href="#">Test 1</a>
            </nav>
            
            <nav>
              <a href="#">Test 2</a>
            </nav>
            
            <nav>
              <a href="#">Test 3</a>
            </nav>
            
            <a class="logout-button">Logout</a>
          </div>
        </div>
      </header>    );
  }
}

export default AppHeader;
