import * as types from "./actionTypes";

export function navigateToRecipeForm(recipe = {}) {
  return {
    type: types.NAVIGATE_TO_RECIPE_FORM,
    recipe,
  };
}

export function navigateToRecipePage(recipe) {
  return {
    type: types.NAVIGATE_TO_RECIPE_PAGE,
    recipe,
  };
}

export function navigateToHomePage() {
  return {
    type: types.NAVIGATE_TO_HOME_PAGE,
  };
}

export function navigateToProfile() {
  return {
    type: types.NAVIGATE_TO_PROFILE_PAGE,
  };
}
