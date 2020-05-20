import React, { Component } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Muter from "./Muter";

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

const ResultContainer = styled.div`
  display: flex;
  flex-flow: wrap;
`;

const ResultItem = styled.a`
  position: relative;
  padding: 16px;
  border: 1px solid #898989;
  margin: 16px;
  text-align: center;
  min-width: 200px;
  box-shadow: 2px 2px 2px #898989;
`;

const ImageUser = styled.h6`
  color: #ff7f50;
  font-size: 18px;
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 0;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 5px 10px;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  box-sizing: border-box;
  height: 100%;
`;

const Image = styled.img`
  width: 100%;
  hegith: 200px;
`;

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      results: {},
      loading: false,
      message: "",
      totalResults: 0,
      totalPages: 0,
      currentPageNo: 0
    };
    this.cancel = "";
  }

  getPageCount = (total, denominator) => {
    const divisible = 0 === total % denominator;
    const valueToBeAdded = divisible ? 0 : 1;
    return Math.floor(total / denominator) + valueToBeAdded;
  };

  fetchSearchResult = (updatePageNo = "", query) => {
    const pageNumber = updatePageNo ? `&page=${updatePageNo}` : "";
    const searchUrl = `https://pixabay.com/api/?key=16522686-8c53ea1720bedeab3cfd42477&q=${query}${pageNumber}`;

    // request data with axios
    if (this.cancel) {
      this.cancel.cancel();
    }
    this.cancel = axios.CancelToken.source();

    axios
      .get(searchUrl, {
        cancelToken: this.cancel.token
      })
      .then(res => {
        const total = res.data.total;
        const totalPagesCount = this.getPageCount(total, 20);
        const resultNotFoundMsg = !res.data.hits.length
          ? "Tidak ada Data Tersedia"
          : "";
        this.setState({
          results: res.data.hits,
          message: resultNotFoundMsg,
          loading: false,
          totalResults: total,
          totalPages: totalPagesCount,
          currentPageNo: updatePageNo
        });
      })
      .catch(error => {
        if (axios.isCancel(error) || error) {
          this.setState({
            loading: false,
            message: "Gagal ambil data"
          });
        }
      });
  };

  handleInputChange = e => {
    const query = e.target.value;
    if (!query) {
      this.setState({
        query,
        results: {},
        message: ""
      });
    } else {
      this.setState({ query, loading: true, message: "" }, () => {
        this.fetchSearchResult(1, query);
      });
    }
  };

  renderResult = () => {
    const { results } = this.state;

    if (Object.keys(results).length && results.length) {
      return (
        <ResultContainer>
          {results.map(result => {
            return (
              <ResultItem key={result.id} href={result.previewURL}>
                <ImageUser>{result.user}</ImageUser>
                <ImageWrapper>
                  <Image
                    src={result.previewURL}
                    alt={`${result.username} image`}
                  />
                </ImageWrapper>
              </ResultItem>
            );
          })}
        </ResultContainer>
      );
    }
  };

  render() {
    const { query, loading, message } = this.state;
    return (
      <KontainerWrap>
        <Heading>Live Search React Application</Heading>
        <SearchLabel htmlFor="search-input">
          <Input
            value={query}
            placeholder="Pencarian..."
            onChange={this.handleInputChange}
          />
          <SearchIcon icon={faSearch} />
        </SearchLabel>
        {message && <p className="message">{message}</p>}

        {loading ? <Muter /> : ""}

        {/* RESULT */}
        {this.renderResult()}
      </KontainerWrap>
    );
  }
}

export default Search;
