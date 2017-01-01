import React, { Component } from 'react';
import {
  AppRegistry,
  View,
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import Main from './views/main';
import Header from './components/header';

export default class ArcticThisWeek extends Component {
  render() {
    return (
      <Router>
        <Scene key="root" navBar={Header}>
          <Scene key="main" component={Main} initial />
        </Scene>
      </Router>
    );
  }
}


AppRegistry.registerComponent('ArcticThisWeek', () => ArcticThisWeek);
