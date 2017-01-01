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
import { TouchableOpacity, ScrollView } from 'react-native';
import { observer } from 'mobx-react/native';
import store from '../store/stores';

const News = observer(class News extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    store.getNews();
  }

  renderNews(news) {
    return (
      <TouchableOpacity>
        <Row>
          <View>
            <Caption>Defense Strategy</Caption>
            <Subtitle>{_.values(news.title)}</Subtitle>
            <Text>{_.values(news.acf.excerpt)}</Text>
            <View>
              <Caption>20 hours ago</Caption>
            </View>
          </View>
        </Row>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <ScrollView>
        <ListView
          data={_.toArray(store.allNews)}
          renderRow={news => this.renderNews(news)}
        />
      </ScrollView>
    );
  }
});

export default News;

