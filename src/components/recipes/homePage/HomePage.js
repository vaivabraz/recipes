import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button } from "../../common";
import {
  getRecipes,
  getError
} from "../../../redux/selectors/recipesSelectors";

import { navigateToRecipeForm } from "../../../redux/actions/navigationActions";
import { RecipesList, CategoriesList } from ".";
import styled from "styled-components";

const MainContainer = styled.div`
  flex: 5;
`;

const Header = styled.div`
  display: flex;
  direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 5px 20px 30px;
`;

function HomePage(props) {
  return (
    <div className="pageFlexContainer flexColumnSmallScreen">
      <MainContainer>
        {props.error && (
          <div className="error">
            <h3>{props.error}</h3>
          </div>
        )}
        <Header>
          <h1>Receptai </h1>
          <Button
            text="Prideti nauja recepta"
            navigateTo="/createRecipe"
            action={props.navigateToRecipeForm}
          />
        </Header>
        <RecipesList recipes={props.recipes} />
      </MainContainer>
      <CategoriesList categories={props.categories} />
    </div>
  );
}

HomePage.propTypes = {
  recipes: PropTypes.array,
  error: PropTypes.string
};

function mapStateToProps(state) {
  return {
    recipes: getRecipes(state),
    categories: [],
    error: getError(state)
  };
}

const mapDispatchToProps = {
  navigateToRecipeForm
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
