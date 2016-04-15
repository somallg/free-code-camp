import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: ''
    }
  }

  onTextChange(e) {
    this.setState(
      { search: e.target.value }
    );
    this.props.search(e.target.value);
  }
  
  handleSubmit(e) {
    e.preventDefault();
    this.props.search(this.state.search);
  }

  render() {
    return (
      <form className="search-bar" onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Type to search"
                 value={this.state.search} onChange={this.onTextChange.bind(this)} />
        </div>
        <button type="submit" className="btn btn-primary">Search</button>
        <a href="https://en.wikipedia.org/wiki/Special:Random" className="btn btn-info" target="_blank">Random</a>
      </form>
    )
  }
}
