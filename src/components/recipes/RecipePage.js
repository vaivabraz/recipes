import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
// import { getRecipeBySlug } from "../../api/recipesApi";

function RecipePage(props) {
  const [recipe, setRecipe] = useState({
    slug: props.match.params.slug,
    id: null,
    title: "",
    author: "",
    date: "",
    portions: null,
    time: null,
    ingredients: [],
    preparation: ""
  });

  useEffect(() => {
    // if (!recipe.id) getRecipeBySlug(recipe.slug);

    setRecipe({
      id: 123123,
      title: "kazkas labai skanaus",
      preparation: `As collected deficient objection by it discovery sincerity curiosity.
      Quiet decay who round three world whole has mrs man. Built the china
      there tried jokes which gay why. Assure in adieus wicket it is. But
      spoke round point and one joy. Offending her moonlight men sweetness see
      unwilling. Often of it tears whole oh balls share an. Oh to talking
      improve produce in limited offices fifteen an. Wicket branch to answer
      do we. Place are decay men hours tiled. If or of ye throwing friendly
      required. Marianne interest in exertion as. Offering my branched
      confined oh dashwood.`
    });
  }, []);

  return (
    <div className="pageContainer">
      <h1>{recipe.title}</h1>
      <p>{recipe.preparation}</p>
    </div>
  );
}

RecipePage.propTypes = {
  match: PropTypes.object
};

export default RecipePage;
