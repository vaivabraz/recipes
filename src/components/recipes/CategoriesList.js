import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const CategoriesContainer = styled.div`
  flex: 1;
  padding: 95px 0px 0px 30px;
`;

const Header = styled.h3`
  padding-bottom: "6px";
`;

export default function CategoriesList(props) {
  return (
    <CategoriesContainer>
      <Header>Kategorijos:</Header>
      <ul>
        <li>
          <h5>pusryčiai</h5>
        </li>
        <li>
          <h5>pietūs</h5>
        </li>
        <li>
          <h5>vakarienė</h5>
        </li>
        <li>
          <h5>gėrimai</h5>
        </li>
      </ul>
    </CategoriesContainer>
  );
}

CategoriesList.propTypes = {
  recipes: PropTypes.object
};
