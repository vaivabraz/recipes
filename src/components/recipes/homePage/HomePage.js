import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button } from "../../common";
import { getRecipes } from "../../../redux/selectors/recipesSelectors";
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
        <Header>
          <h1>Receptai </h1>
          <Button text="Prideti nauja recepta" navigateTo="/createRecipe" />
        </Header>
        <RecipesList recipes={props.recipes} />
      </MainContainer>
      <CategoriesList categories={props.categories} />
    </div>
  );
}

HomePage.propTypes = {
  recipes: PropTypes.object
};

function mapStateToProps(state) {
  return {
    recipes: getRecipes(state),
    categories: []
  };
}

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
