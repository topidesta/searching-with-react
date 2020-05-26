import React from "react";
import styled from "styled-components";

const NavContainter = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: flex-end;
`;

const NavLink = styled.button`
  display: ${props =>
    props.showNextLink ? "block" : props.showPrevLink ? "block" : "none"};
  opacity: ${props => (props.loading ? 0.5 : "")};
  color: #555;
  text-decoration: none;
  border: 1px solid #898989;
  padding: 10px 20px;
  margin-right: 10px;
`;

export default props => {
  const {
    showPrevLink,
    showNextLink,
    handlePrevClick,
    handleNextClick,
    loading
  } = props;

  console.log(props);

  return (
    <NavContainter>
      <NavLink
        onClick={handlePrevClick}
        showPrevLink={showPrevLink}
        loading={loading}
      >
        Sebelumnya
      </NavLink>
      <NavLink
        onClick={handleNextClick}
        showNextLink={showNextLink}
        loading={loading}
      >
        Selanjutnya
      </NavLink>
    </NavContainter>
  );
};
