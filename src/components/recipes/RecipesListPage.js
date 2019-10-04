import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button } from "../common";
import { getRecipes } from "../../redux/selectors/recipesSelectors";
import { RecipeCard } from ".";
import "./css/recipesListPage.css";

function RecipesListPage(props) {
  return (
    <div className="pageFlexContainer flexRow">
      <div className="recipesListPageMainContainer">
        <div className="recipesListPageHeader">
          <h1>Receptai </h1>
          <Button
            action={() => console.log("oaoaoaoa")}
            text="Prideti nauja recepta"
          />
        </div>
        <div className="recipesListPageList">
          {props.recipes.map(recipe => (
            <RecipeCard key={recipe.get("id")} recipe={recipe} />
          ))}
        </div>
      </div>
      <div className="recipesListPageSideContainer">
        <h3 style={{ paddingBottom: "6px" }}>Kategorijos:</h3>
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
      </div>
    </div>
  );
}

RecipesListPage.propTypes = {
  recipes: PropTypes.object
};

function mapStateToProps(state) {
  return {
    recipes: getRecipes(state)
  };
}

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipesListPage);
