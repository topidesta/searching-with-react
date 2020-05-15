import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Search from "./components/Search";

const GlobalStyle = createGlobalStyle`
html {
  min-height: 100%;
}
`;

const ContentWrapper = styled.div`
  font-family: "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif";
`;

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <ContentWrapper>
        <Search />
      </ContentWrapper>
    </React.Fragment>
  );
}

export default App;
