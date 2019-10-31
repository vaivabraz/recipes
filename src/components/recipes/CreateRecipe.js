import React, { useState } from "react";
import { TextInput, Button } from "../common";
import IngredientLine from "./IngredientLine";
import "./css/createRecipe.css";

function CreateRecipe() {
  const [recipe, setRecipe] = useState({
    title: "",
    notes: "",
    ingredients: [
      { product: "", quantity: "", id: 0 },
      { product: "", quantity: "", id: 1 },
      { product: "", quantity: "", id: 2 }
    ]
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

  const handleAddIngredient = () => {
    // event.preventDefault();
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

  const ingredientsList = recipe.ingredients.map(r => (
    <IngredientLine
      key={r.id}
      entry={r}
      onChange={handleIngredientChange}
      onRemove={handleRemoveIngredient}
    />
  ));

  return (
    <form className="pageFlexContainer flexColumn border">
      <div className="createRecipeMainContainer flexColumnSmallScreen">
        <div className="createRecipeLeftContainer ">
          <h1>Sukurti recepta</h1>
          <TextInput
            label="pavadinimas"
            name="title"
            value={recipe.title}
            onChange={handleChange}
          />
          <p className="textInputLabel">ingredientai</p>
          {ingredientsList}
          <div className="addNewIngredient">
            <button className="circleButton" onClick={handleAddIngredient}>
              +
            </button>
            <h4>Prideti nauja produkta</h4>
          </div>
          <TextInput label="paruosimas" multiline />
          <TextInput
            label="pastabos"
            name="notes"
            value={recipe.notes}
            onChange={handleChange}
          />
          <TextInput label="trumpai apie recepta" />
          <TextInput label="kiek laiko uztruks" inline />
          <TextInput label="porciju skaicius" inline type="number" />
          <TextInput label="KATEGORIJOS" multiline />
        </div>
        <div className="createRecipeRightContainer">
          <div className="uploadImageContainer">
            <h2>IMG</h2>
          </div>
        </div>
      </div>
      <div className="recipeSubmitButtonContainer">
        <Button text="SUKURTI" action={() => console.log(recipe)}></Button>
      </div>
    </form>
  );
}

export default CreateRecipe;
