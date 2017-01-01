import React, { Component } from 'react';
import axios from 'axios';
import { Image, StyleSheet } from 'react-native';
import {
    NavigationBar,
    Title,
} from '@shoutem/ui';


const styles = StyleSheet.create({
  image: {
    height: 250,
    alignSelf: 'stretch',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
});

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { headerImage: 'http://placehold.it/850x600' };
  }
  componentWillMount() {
    this.getHeaderImage();
  }

  getHeaderImage() {
    axios.get('http://app.thearcticinstitute.org/wp-json/wp/v2/media?[per_page]=1')
    .then((response) => {
      this.setState({
        headerImage: response.data[0].source_url,
      });
    });
  }

  render() {
    return (
      <Image
        style={styles.image}
        source={{ uri: this.state.headerImage }}
      >
        <NavigationBar
          centerComponent={
            <Title>TITLE</Title>
          }
        />
      </Image>
    );
  }
}
