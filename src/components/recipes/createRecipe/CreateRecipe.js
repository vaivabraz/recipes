import React, { useState } from "react";
import { TextInput, Button } from "../../common";
import IngredientLine from "./IngredientLine";
import styled from "styled-components";
import { postRecipe } from "../../../redux/actions/recipesActions";
import { connect } from "react-redux";

const MainContainer = styled.div`
  display: flex;
`;

const LeftContainer = styled.div`
  flex: 5;
  flex-direction: column;
`;

const RightContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 20px;
`;

const AddNewIngredientLine = styled.div`
  padding-left: 20px;
  display: flex;
  align-items: center;
  color: #b3acac;
`;

const ImageContainer = styled.div`
  background-color: rgb(219, 209, 193);
  margin-top: 110px;
  margin-bottom: 30px;
  width: 300px;
  height: 300px;

  justify-content: center;
  display: flex;
  align-items: center;
`;

const ButtonBox = styled.div`
  padding: 40px 20px;
  display: flex;
`;

function CreateRecipe(props) {
  const currentRecipe = props.location.state.recipe;
  const [recipe, setRecipe] = useState({
    id: currentRecipe._id || null,
    title: currentRecipe.title || "",
    preparation: currentRecipe.preparation || "",
    notes: currentRecipe.notes || "",
    summary: currentRecipe.summary || "",
    image: currentRecipe.image || "",
    time: currentRecipe.time || "",
    portions: currentRecipe.portions || null,
    categories: currentRecipe.categories || "",
    ingredients: [
      { product: "", quantity: "", id: 0 },
      { product: "", quantity: "", id: 1 },
      { product: "", quantity: "", id: 2 }
    ]

    // categories: [
    //       "vakariene",
    //       "greitai"
    //     ],
    //   author: "",
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
    props.postRecipe(recipe);
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
      <MainContainer className="flexColumnSmallScreen">
        <LeftContainer>
          <h1>Sukurti recepta</h1>
          <TextInput
            label="pavadinimas"
            name="title"
            value={recipe.title}
            onChange={handleChange}
          />
          <p className="textInputLabel">ingredientai</p>
          {ingredientsList}
          <AddNewIngredientLine className="addNewIngredient">
            <button className="circleButton" onClick={handleAddIngredient}>
              +
            </button>
            <h4>Prideti nauja produkta</h4>
          </AddNewIngredientLine>
          <TextInput
            label="paruosimas"
            name="preparation"
            multiline
            value={recipe.preparation}
            onChange={handleChange}
          />
          <TextInput
            label="pastabos"
            name="notes"
            value={recipe.notes}
            onChange={handleChange}
          />
          <TextInput
            label="trumpai apie recepta"
            name="summary"
            value={recipe.summary}
            onChange={handleChange}
          />
          <TextInput
            label="kiek laiko uztruks"
            inline
            name="time"
            value={recipe.time}
            onChange={handleChange}
          />
          <TextInput
            label="porciju skaicius"
            inline
            type="number"
            name="portions"
            value={recipe.portions}
            onChange={handleChange}
          />
          <TextInput
            label="KATEGORIJOS"
            multiline
            name="categories"
            value={recipe.categories}
            onChange={handleChange}
          />
        </LeftContainer>
        <RightContainer>
          <ImageContainer>
            <h2>IMG</h2>
          </ImageContainer>
        </RightContainer>
      </MainContainer>
      <ButtonBox>
        <Button text="SUKURTI" action={handleSubmit}></Button>
      </ButtonBox>
    </form>
  );
}

const mapDispatchToProps = {
  postRecipe
};

export default connect(
  null,
  mapDispatchToProps
)(CreateRecipe);
