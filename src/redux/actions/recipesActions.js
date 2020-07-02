import * as types from "./actionTypes";

export function getRecipes() {
  return {
    type: types.GET_RECIPES,
  };
}

export function setRecipes(recipes) {
  return {
    type: types.SET_RECIPES,
    recipes,
  };
}

export function setUserRecipes(recipes) {
  return {
    type: types.SET_USER_RECIPES,
    recipes,
  };
}

export function postRecipe(recipe) {
  return {
    type: types.POST_RECIPE,
    recipe,
  };
}

export function deleteRecipe(slug) {
  return {
    type: types.DELETE_RECIPE,
    slug,
  };
}

export function setError(error) {
  return {
    type: types.SET_ERROR,
    error,
  };
}
