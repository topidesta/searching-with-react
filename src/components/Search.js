import React, { Component } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const KontainerWrap = styled.div`
  margin: 36px auto;
  width: 100%;
  max-width: 800px;
`;

const Heading = styled.h1`
  font-size: 30px;
  padding: 16px 0;
  color: #4444;
  text-align: center;
`;

const SearchLabel = styled.label`
  position: relative;
`;

const Input = styled.input.attrs(props => ({
  type: "text",
  size: props.size || "1em"
}))`
  width: 100%;
  font-size: 36px;
  font-style: italic;
  color: #4444;
  box-sizing: border-box;
  outline: none;
  padding: ${props => props.size};
`;

const SearchIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: -33px;
  font-size: 24px;
  color: #555;
  margin: 1em;
  right: 5px;
`;

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

  handleInputChange = e => {
    const query = e.target.value;
    this.setState({ query, loading: true, message: "" });
  };

  render() {
    const { query } = this.state;
    return (
      <KontainerWrap>
        <Heading>Live Search React Application</Heading>
        <SearchLabel htmlFor="search-input">
          <Input placeholder="Pencarian..." onChange={this.handleInputChange} />
          <SearchIcon icon={faSearch} />
        </SearchLabel>
      </KontainerWrap>
    );
  }
}

export default Search;
