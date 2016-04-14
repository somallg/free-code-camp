import React from 'react';
import { Component } from 'react';

import Click from './click';

export default class App extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Hello world</h1>
        <p>React simple starter with SASS</p>
        <Click />
      </div>
    );
  }
}
