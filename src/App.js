import React from "react";
import Search from "./components/Search";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html {
  min-height: 100%;
}

.App{
  text-align: center;
  box-shadow:  0 .3rem .3rem rgba(255, 9, 9, 0.562);
  padding: 1rem;
}

button{
  padding: 1rem;
  font-size: 1.2rem;
  background-color: aqua;
}

`;

const ContentWrapper = styled.div`
  font-family: "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif";
  margin-left: auto;
  margin-right: auto;
  max-width: 900px;
  width: 100%;
  padding: 2rem 4rem;
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
