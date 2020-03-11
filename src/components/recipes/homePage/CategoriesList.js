import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export default function CategoriesList(props) {
  return (
    <CategoriesContainer>
      <Header>Kategorijos:</Header>
      <ul>
        {props.categories.map(category => {
          return (
            <li>
              <h5>{category}</h5>
            </li>
          );
        })}
      </ul>
    </CategoriesContainer>
  );
}

CategoriesList.propTypes = {
  categories: PropTypes.array
};

const CategoriesContainer = styled.div`
  flex: 1;
  padding: 95px 0px 0px 30px;
`;

const Header = styled.h3`
  padding-bottom: "6px";
`;
