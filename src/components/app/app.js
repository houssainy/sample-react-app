//
// Copyright (c) 2018
//

import React, { Component } from 'react';

import './app.css';

import AppHeader from '../header/header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader></AppHeader>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
