import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "../../common";
import {
  getUserRecipes,
  getError,
} from "../../../redux/selectors/recipesSelectors";
import { getCategories } from "../../../redux/selectors/userSelectors";
import { navigateToRecipeForm } from "../../../redux/actions/navigationActions";
import { RecipesList, CategoriesList } from ".";
import styled from "styled-components";

function HomePage(props) {
  const recipes = useSelector(getUserRecipes);
  const categories = useSelector(getCategories);
  const error = useSelector(getError);

  const dispatch = useDispatch();
  const handleRecipePress = useCallback(() => {
    dispatch(navigateToRecipeForm());
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pageFlexContainer flexColumnSmallScreen">
      <MainContainer>
        {props.error && (
          <div className="error">
            <h3>{error}</h3>
          </div>
        )}
        <Header>
          <h1>Receptai </h1>
          <Button
            text="Prideti nauja recepta"
            navigateTo="/createRecipe"
            action={handleRecipePress}
          />
        </Header>
        <RecipesList recipes={recipes} />
      </MainContainer>
      <CategoriesList categories={categories} />
    </div>
  );
}

export default HomePage;

const MainContainer = styled.div`
  flex: 5;
`;

const Header = styled.div`
  display: flex;
  direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 5px 0px 30px;
`;
