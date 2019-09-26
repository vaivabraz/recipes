import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button } from "../common";
import { getRecipes } from "../../redux/selectors/recipesSelectors";
import { RecipeCard } from ".";
import "./recipesStyles.css";

function RecipesListPage(props) {
  return (
    <div className="pageContainer">
      <div style={styles.mainContainer}>
        <div
          style={{
            display: "flex",
            direction: "row",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <h1>Receptai </h1>
          <Button
            style={{ marginRight: 12 }}
            action={() => console.log("oaoaoaoa")}
            text="Prideti nauja recepta"
          />
        </div>
        <div style={styles.listContainer}>
          {props.recipes.map(recipe => (
            <RecipeCard key={recipe.get("id")} recipe={recipe} />
          ))}
        </div>
      </div>
      <div style={styles.sideContainer}>
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

const styles = {
  mainContainer: {
    flex: 5
  },
  sideContainer: {
    flex: 1,
    padding: "120px 10px"
  },
  listContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(210px, auto))"
  }
};
