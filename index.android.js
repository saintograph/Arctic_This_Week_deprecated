/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  View,
} from 'react-native';
import Header from './components/header';
import News from './components/news';

export default class ArcticThisWeek extends Component {
  render() {
    return (
      <View>
        <Header />
        <News />
      </View>
    );
  }
}


AppRegistry.registerComponent('ArcticThisWeek', () => ArcticThisWeek);
