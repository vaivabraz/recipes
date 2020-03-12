import React from "react";
import { TextInput, Button } from "../../common";
import IngredientLine from "./IngredientLine";
import styled from "styled-components";
import { ReactComponent as AddIcon } from "../../common/icons/add.svg";

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

function CreateRecipeView(props) {
  const ingredientsList = props.recipe.ingredients.map(r => (
    <IngredientLine
      key={r.id}
      entry={r}
      onChange={props.handleIngredientChange}
      onRemove={props.handleRemoveIngredient}
    />
  ));
  const title = props.recipe._id ? "Redaguoti receptą" : "Sukurti receptą";
  const buttonText = props.recipe._id ? "Išsaugoti receptą" : "Sukurti receptą";
  return (
    <form className="pageFlexContainer flexColumn border">
      <MainContainer className="flexColumnSmallScreen">
        <LeftContainer>
          <h1>{title}</h1>
          <TextInput
            label="pavadinimas"
            name="title"
            value={props.recipe.title}
            onChange={props.handleChange}
          />
          <p className="textInputLabel">ingredientai</p>
          {ingredientsList}
          <AddNewIngredientLine className="addNewIngredient">
            <button
              className="circleButton"
              onClick={props.handleAddIngredient}
            >
              <AddIcon />
            </button>
            <h4>Prideti nauja produkta</h4>
          </AddNewIngredientLine>
          <TextInput
            label="paruosimas"
            name="preparation"
            multiline
            value={props.recipe.preparation}
            onChange={props.handleChange}
          />
          <TextInput
            label="pastabos"
            name="notes"
            value={props.recipe.notes}
            onChange={props.handleChange}
          />
          <TextInput
            label="trumpai apie recepta"
            name="summary"
            value={props.recipe.summary}
            onChange={props.handleChange}
          />
          <TextInput
            label="kiek laiko uztruks"
            inline
            name="time"
            value={props.recipe.time}
            onChange={props.handleChange}
          />
          <TextInput
            label="porciju skaicius"
            inline
            type="number"
            name="portions"
            value={props.recipe.portions}
            onChange={props.handleChange}
          />
          <TextInput
            label="KATEGORIJOS"
            multiline
            name="categories"
            value={props.recipe.categories}
            onChange={props.handleChange}
          />
        </LeftContainer>
        <RightContainer>
          <ImageContainer>
            <h2>IMG</h2>
          </ImageContainer>
        </RightContainer>
      </MainContainer>
      <ButtonBox>
        <Button text={buttonText} action={props.handleSubmit}></Button>
      </ButtonBox>
    </form>
  );
}

export default CreateRecipeView;
