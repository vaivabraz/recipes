import { put, takeLeading, all } from "redux-saga/effects";

import * as actionTypes from "../actions/actionTypes";
import { push } from "connected-react-router";

export default function* saga() {
  yield all([
    takeLeading(actionTypes.NAVIGATE_TO_RECIPE_FORM, navigateToRecipeForm),
    takeLeading(actionTypes.NAVIGATE_TO_RECIPE_PAGE, navigateToRecipePage),
    takeLeading(actionTypes.NAVIGATE_TO_HOME_PAGE, navigateToHomePage),
    takeLeading(actionTypes.NAVIGATE_TO_PROFILE_PAGE, navigateToProfile),
  ]);
}

export function* navigateToHomePage() {
  yield put(push("/"));
}

export function* navigateToRecipePage(data) {
  const link = "/recipes/" + data.recipe.slug;
  yield put(
    push({
      pathname: link,
    })
  );
}

export function* navigateToRecipeForm(data) {
  const link = "/createRecipe";
  yield put(
    push({
      pathname: link,
      state: { recipe: data.recipe },
    })
  );
}

export function* navigateToProfile() {
  const link = "/profile";
  yield put(
    push({
      pathname: link,
    })
  );
}
