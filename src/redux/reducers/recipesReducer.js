import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function recipesReducer(state = initialState.recipes, action) {
  switch (action.type) {
    case types.SET_RECIPES:
      return action.recipes;
    default:
      return state;
  }
}
