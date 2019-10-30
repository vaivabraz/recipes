import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./css/recipeCard.css";

function RecipeCard(props) {
  const { recipe } = props;
  const imageName = recipe.get("image");
  const image = require("../../images/" + "vistiena.jpg");
  // const image = require("../../images/" + imageName);
  const title = recipe.get("title");
  return (
    <Link
      className="border recipeCard animationTransition"
      to={"/recipes/" + recipe.get("slug")}
    >
      <img
        className="border recipeCardImage"
        src={image}
        title={title}
        alt={title}
      />
      <div className="recipeTitleContainer">
        <h3 className="textAlignCenter">{title}</h3>
      </div>
    </Link>
  );
}

RecipeCard.propTypes = {
  recipe: PropTypes.object
};

export default RecipeCard;
