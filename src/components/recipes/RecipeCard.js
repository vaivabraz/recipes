import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function RecipeCard(props) {
  const { recipe } = props;
  const imageName = recipe.get("image");
  const image = require("../../images/" + imageName);
  const title = recipe.get("title");
  return (
    <Link
      className="border recipeCard"
      style={styles.card}
      to={"/recipes/" + recipe.get("slug")}
    >
      <img
        className="border"
        src={image}
        style={styles.image}
        title={title}
        alt={title}
      />
      <div style={styles.titleContainer}>
        <h3 style={styles.title}>{title}</h3>
      </div>
    </Link>
  );
}

RecipeCard.propTypes = {
  recipe: PropTypes.object
};

export default RecipeCard;

const styles = {
  card: {
    display: "flex",
    flexDirection: "column",
    margin: "12px",
    padding: "12pxs",
    justifyContent: "center",
    alignItems: "center",
    height: "auto"
  },
  image: {
    maxWidth: "92%",
    margin: "18px"
  },
  titleContainer: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    padding: "6px",
    paddingBottom: "12px"
  },
  title: {
    textAlign: "center"
  }
};
