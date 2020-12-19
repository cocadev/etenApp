import React, { Component } from 'react';
import Router from './src/router';

import {Provider} from 'react-redux';

import { configureStore } from './src/store';   
const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}