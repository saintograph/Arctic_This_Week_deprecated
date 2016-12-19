import React, { Component } from 'react';
import _ from 'lodash';
import {
    View,
    Text,
    Caption,
    ListView,
    Row,
    Subtitle,
} from '@shoutem/ui';
import { observer } from 'mobx-react/native';
import store from '../store/stores';

const News = observer(class News extends Component {

  componentWillMount() {
    store.getNews();
  }

  renderNews(news) {
    return (
      <Row>
        <Subtitle>{_.values(news.title)}</Subtitle>
        <Caption>20 hours ago</Caption>
      </Row>
    );
  }

  render() {
    return (
      <View>
        <ListView
          data={_.toArray(store.allNews)}
          renderRow={news => this.renderNews(news)}
        />
      </View>
    );
  }
});

export default News;

