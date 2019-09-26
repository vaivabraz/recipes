import * as types from "../actions/actionTypes";
import { Record, List } from "immutable";

const initialState = Record({
  recipes: List(),
  currentRecipe: null
});

const Recipe = Record({
  id: 0,
  title: "",
  summary: "",
  image: "",
  slug: ""
});

function setRecipes(state, recipes) {
  const recipesList = List(recipes.map(r => new Recipe(r)));
  return state.set("recipes", recipesList);
}

export default function recipesReducer(state = new initialState(), action) {
  switch (action.type) {
    case types.SET_RECIPES:
      return setRecipes(state, action.recipes);
    default:
      return state;
  }
}
