import * as types from "../actions/actionTypes";
import { Record, List } from "immutable";

const initialState = Record({
  recipes: [],
  // recipes: List(),
  currentRecipe: null,
  error: null,
});

const Recipe = Record({
  _id: 0,
  title: "",
  summary: "",
  image: "",
  slug: "",
});

function setRecipes(state, recipes) {
  const recipesList = List(recipes.map((r) => new Recipe(r)));
  return state.set("recipes", recipes);
}

function setError(state, error) {
  return state.set("error", error);
}

export default function recipesReducer(state = new initialState(), action) {
  switch (action.type) {
    case types.SET_RECIPES:
      return setRecipes(state, action.recipes);
    case types.SET_ERROR:
      return setError(state, action.error);
    default:
      return state;
  }
}
