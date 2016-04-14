import React, { Component } from 'react';

class Click extends Component {
  constructor() {
    super();

    this.state = { counter: 1 };
  }

  handleClick() {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    const { counter } = this.state;

    return (
      <a className="btn btn-primary"
        onClick={this.handleClick.bind(this)}>
        You have clicked <strong>{counter}</strong> times.
      </a>
    )
  }
}

export default Click;
