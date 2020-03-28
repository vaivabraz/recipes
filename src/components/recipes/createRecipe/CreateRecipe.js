import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import CreateRecipeView from "./CreateRecipeView";
import { postRecipe } from "../../../redux/actions/recipesActions";

function CreateRecipe(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dispatch = useDispatch();
  const currentRecipe = props.location.state.recipe;
  const products =
    currentRecipe.ingredients && currentRecipe.ingredients.length > 0
      ? JSON.parse(JSON.stringify(currentRecipe.ingredients))
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
    portions: currentRecipe.portions || "",
    categories: currentRecipe.categories
      ? currentRecipe.categories.map(c => {
          return { value: c, label: c };
        })
      : [],
    ingredients: products
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

  const handleCategoriesChange = props => {
    setRecipe({
      ...recipe,
      categories: props
    });
  };

  const handleSubmit = () => {
    let filteredIngredients = recipe.ingredients.filter(
      i => i.product || i.quantity
    );
    const filteredCategories = recipe.categories.map(i => i.value);
    const finalRecipe = {
      ...recipe,
      ingredients: filteredIngredients,
      categories: filteredCategories
    };
    dispatch(postRecipe(finalRecipe));
  };

  return (
    <CreateRecipeView
      recipe={recipe}
      handleChange={handleChange}
      handleAddIngredient={handleAddIngredient}
      handleIngredientChange={handleIngredientChange}
      handleRemoveIngredient={handleRemoveIngredient}
      handleCategoriesChange={handleCategoriesChange}
      handleSubmit={handleSubmit}
    />
  );
}

export default CreateRecipe;
