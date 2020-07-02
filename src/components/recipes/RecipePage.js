import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { navigateToRecipeForm } from "../../redux/actions/navigationActions";
import { deleteRecipe } from "../../redux/actions/recipesActions";
import { getRecipeBySlugApi } from "../../api/userRecipesApi";
import { getUsername } from "../../redux/selectors/userSelectors";
import RecipePageView from "./RecipePageView";

const Title = styled.h1`
  padding: 40px;
  align-self: center;
`;

function RecipePage(props) {
  const [loading, setLoading] = useState(true);
  const [recipe, setRecipe] = useState(null);

  const username = useSelector(getUsername);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchData();
  }, []);

  async function fetchData() {
    const response = await getRecipeBySlugApi(
      { username },
      props.match.params.slug,
    );
    setRecipe(response);
    setLoading(false);
  }

  const handleEdit = () => {
    dispatch(navigateToRecipeForm(recipe));
  };

  const handleDelete = () => {
    dispatch(deleteRecipe(recipe.slug));
  };
  return (
    <div className="pageFlexContainer border">
      {loading ? (
        <Title className="alignCenter">KRAUNAS</Title>
      ) : (
        <RecipePageView
          recipe={recipe}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
}

RecipePage.propTypes = {
  match: PropTypes.object,
};

export default RecipePage;
