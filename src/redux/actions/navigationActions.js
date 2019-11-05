import * as types from "./actionTypes";

export function navigateToRecipeForm(recipe = {}) {
  return {
    type: types.NAVIGATE_TO_RECIPE_FORM,
    recipe
  };
}

export function navigateToHomePage() {
  return {
    type: types.NAVIGATE_TO_HOME_PAGE
  };
}
