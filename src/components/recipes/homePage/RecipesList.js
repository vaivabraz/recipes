import React from "react";
import PropTypes from "prop-types";
import { RecipeCard } from ".";
import styled from "styled-components";

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, auto));
`;

export default function RecipesList(props) {
  return (
    <List>
      {props.recipes.map(recipe => (
        <RecipeCard key={recipe._id} recipe={recipe} />
      ))}
    </List>
  );
}

RecipesList.propTypes = {
  recipes: PropTypes.array
};
