//
// Copyright (c) 2018
//

import React, { Component } from 'react';
import { UIRouter, UIView, pushStateLocationPlugin } from '@uirouter/react';

import router from '../../config/router/router'

import './app.css';

import AppHeader from '../header/header';

class App extends Component {
  render() {
    return (
      <UIRouter plugins={[pushStateLocationPlugin]} states={router.states} config={router.config}>
        <div className="App">
          <AppHeader></AppHeader>
          <UIView/>
        </div>
      </UIRouter>
    );
  }
}

export default App;
