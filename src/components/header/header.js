//
// Copyright (c) 2018
//

import React, { Component } from 'react';

import swal from 'sweetalert2';

import logo from '../../images/logo.svg';
import './css/header.css';

import { UISref } from '@uirouter/react';

// import DropdownButton from '../buttons/dropdownButton/dropdownButton';

class AppHeader extends Component {

  showMessage(message) {
    swal(message, '', 'warning');
  }

  render() {
    return (
      <header className="header-two-bars">
        <div className="header-first-bar">
          <div className="header-limiter">
            <h1><a href="/"><img src={logo} width="91" height="49" alt="logo"/></a></h1>

            <nav>
              <UISref to="test1">
                <a>Test 1</a>
              </UISref>
            </nav>
            
            <nav>
              <UISref to="test2">
                <a>Test 2</a>
              </UISref>
            </nav>
            
            <nav>
              <UISref to="test3">
                <a>Test 3</a>
              </UISref>
            </nav>
            
            {/* <nav>
              <DropdownButton/>
            </nav> */}
            
            <a className="logout-button" onClick={() => this.showMessage('Login clicked!')}>Login</a>
            <a className="logout-button" onClick={() => this.showMessage('Signup clicked!')}>Sign up</a>
          </div>
        </div>
      </header>
    );
  }
}

export default AppHeader;
