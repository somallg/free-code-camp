import _ from 'lodash';
import React from 'react';
import { Component } from 'react';

import SearchBar from './search_bar';
import SearchResult from './search_result';

import { searchWiki } from '../actions';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: null
    };

    window.parseWikiData = this.parseWikiData.bind(this);
  }

  parseWikiData(data) {
    const result = data[1].map((_, index) => {
      return {
        title: data[1][index],
        description: data[2][index],
        url: data[3][index]
      }
    });

    this.setState({ result });
  }

  render() {
    const search = _.debounce((term) => {
      searchWiki(term);
    }, 200);

    return (
      <div className="app">
        <SearchBar search={search} />
        <SearchResult result={this.state.result} />
      </div>
    );
  }
}
