import * as types from "../actions/actionTypes";
import { Record, List } from "immutable";

const initialState = Record({
  recipes: [],
  currentRecipe: null,
  error: null,
  shortRecipesList: List(),
});

const Recipe = Record({
  title: "",
  image: "",
  slug: "",
});

function setRecipes(state, recipes) {
  return state.set("recipes", recipes);
}

function setUserRecipes(state, recipes) {
  const recipesList = List(recipes.map((r) => new Recipe(r)));
  return state.set("shortRecipesList", recipesList);
}

function setError(state, error) {
  return state.set("error", error);
}

export default function recipesReducer(state = new initialState(), action) {
  switch (action.type) {
    case types.SET_RECIPES:
      return setRecipes(state, action.recipes);
    case types.SET_USER_RECIPES:
      return setUserRecipes(state, action.recipes);
    case types.SET_ERROR:
      return setError(state, action.error);
    default:
      return state;
  }
}
