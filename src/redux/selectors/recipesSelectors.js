const recipesState = state => state.recipes;

export function getRecipes(state) {
  return recipesState(state).get("recipes");
}

export function getCategories(state) {
  return recipesState(state).get("categories");
}

export function getError(state) {
  return recipesState(state).get("error");
}
