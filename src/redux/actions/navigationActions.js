import * as types from "./actionTypes";

export function navigateToRecipeForm(recipe = {}) {
  return {
    type: types.NAVIGATE_TO_RECIPE_FORM,
    recipe
  };
}
