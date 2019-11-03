import * as types from "./actionTypes";

export function getRecipes() {
  return {
    type: types.GET_RECIPES
  };
}

export function setRecipes(recipes) {
  return {
    type: types.SET_RECIPES,
    recipes
  };
}

export function setError(error) {
  return {
    type: types.SET_ERROR,
    error
  };
}
