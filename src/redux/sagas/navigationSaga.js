import { put, takeLeading, all } from "redux-saga/effects";

import * as actionTypes from "../actions/actionTypes";
import { push, goBack } from "connected-react-router";

export default function* saga() {
  yield all([
    takeLeading(actionTypes.NAVIGATE_TO_RECIPE_FORM, navigateToRecipeForm),
    takeLeading(actionTypes.NAVIGATE_TO_RECIPE_PAGE, navigateToRecipePage),
    takeLeading(actionTypes.NAVIGATE_TO_HOME_PAGE, navigateToRecipeForm)
  ]);
}

export function* navigateToHomePage() {
  yield put(goBack("/"));
}

export function* navigateToRecipePage(data) {
  const link = "/recipes/" + data.recipe.slug;
  yield put(
    push({
      pathname: link,
      state: { recipe: data.recipe }
    })
  );
}

export function* navigateToRecipeForm(data) {
  const link = "/createRecipe";
  yield put(
    push({
      pathname: link,
      state: { recipe: data.recipe }
    })
  );
}
