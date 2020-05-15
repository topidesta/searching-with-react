import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      result: {},
      loading: false,
      message: ""
    };
  }

  render() {
    return (
      <div className="container">
        <h2 className="heading">Live Search React Application</h2>
        <label className="search-label" htmlFor="search-input">
          <input
            type="text"
            value=""
            id="search-input"
            placeholder="Search..."
          />
          <i className="fa fa-search" aria-hidden="true"></i>
        </label>
      </div>
    );
  }
}

export default Search;
