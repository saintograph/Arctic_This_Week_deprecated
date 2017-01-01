import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import News from '../views/news';

const styles = StyleSheet.create({
  viewContainer: {
    marginTop: 250,
  },
});

export default class Main extends Component {
  render() {
    return (
      <View style={styles.viewContainer}>
        <News />
      </View>
    );
  }
}
