import React, { useState } from "react";
import CreateRecipeView from "./CreateRecipeView";
import { postRecipe } from "../../../redux/actions/recipesActions";
import { connect } from "react-redux";

function CreateRecipe(props) {
  const currentRecipe = props.location.state.recipe;
  const products =
    currentRecipe.ingredients && currentRecipe.ingredients.length > 0
      ? currentRecipe.ingredients
      : [
          { product: "", quantity: "", id: 0 },
          { product: "", quantity: "", id: 1 },
          { product: "", quantity: "", id: 2 }
        ];
  const [recipe, setRecipe] = useState({
    _id: currentRecipe._id || null,
    title: currentRecipe.title || "",
    preparation: currentRecipe.preparation || "",
    notes: currentRecipe.notes || "",
    summary: currentRecipe.summary || "",
    image: currentRecipe.image || "",
    time: currentRecipe.time || "",
    portions: currentRecipe.portions || null,
    categories: currentRecipe.categories || "",
    ingredients: products

    // categories: [
    //       "vakariene",
    //       "greitai"
    //     ],
    //   date: "",
    //   slug: props.match.params.slug,
  });

  const handleChange = ({ target }) => {
    const updateRecipe = {
      ...recipe,
      [target.name]: target.value
    };
    setRecipe(updateRecipe);
  };

  const handleIngredientChange = ({ target }, id) => {
    const oldLine = recipe.ingredients.find(i => i.id === id);
    const newLine = Object.assign(oldLine, {
      [target.name]: target.value
    });
    const updateIngredients = recipe.ingredients.map(i =>
      i.id === id ? newLine : i
    );
    setRecipe({
      ...recipe,
      ingredients: updateIngredients
    });
  };

  const handleRemoveIngredient = (event, productId) => {
    event.preventDefault();
    let newArr = recipe.ingredients.filter(i => i.id !== productId);
    setRecipe({
      ...recipe,
      ingredients: newArr
    });
  };

  const handleAddIngredient = event => {
    event.preventDefault();
    let newArr = recipe.ingredients;

    const maxId =
      newArr.length > 0
        ? newArr.reduce(function(prev, current) {
            return prev.id > current.id ? prev.id : current.id;
          })
        : 0;

    newArr.push({
      product: "",
      quantity: "",
      id: maxId + 1
    });
    setRecipe({
      ...recipe,
      ingredients: newArr
    });
  };

  const handleSubmit = () => {
    recipe.ingredients = recipe.ingredients.filter(
      i => i.product || i.quantity
    );
    props.postRecipe(recipe);
  };

  return (
    <CreateRecipeView
      recipe={recipe}
      handleChange={handleChange}
      handleAddIngredient={handleAddIngredient}
      handleIngredientChange={handleIngredientChange}
      handleRemoveIngredient={handleRemoveIngredient}
      handleSubmit={handleSubmit}
    />
  );
}

const mapDispatchToProps = {
  postRecipe
};

export default connect(null, mapDispatchToProps)(CreateRecipe);
