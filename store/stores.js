import { autorun, extendObservable, action, computed } from 'mobx';
import axios from 'axios';
import _ from 'lodash';

class NewsStore {
  constructor() {
    extendObservable(this, {
      allNews: [],
      test: 'tesst',
    });
    this.getNews = action(function getNews() {
      axios.get('http://app.thearcticinstitute.org/wp-json/wp/v2/posts?per_page=5')
      .then((response) => {
        console.log(response.data[0].plaintext);
        this.allNews = response.data;
      });
    });
  }
}

const store = (new NewsStore());
export default store;
