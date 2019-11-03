const recipesState = state => state.recipes;

export function getRecipes(state) {
  return recipesState(state).get("recipes");
}

export function getError(state) {
  return recipesState(state).get("error");
}
