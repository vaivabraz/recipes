const recipesState = (state) => state.recipes;

export function getRecipes(state) {
  return recipesState(state).get("recipes");
}

export function getUserRecipes(state) {
  return recipesState(state).get("shortRecipesList");
}

export function getError(state) {
  return recipesState(state).get("error");
}
