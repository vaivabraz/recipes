import { put, takeLeading, all } from "redux-saga/effects";

import * as actionTypes from "../actions/actionTypes";
import { push, goBack } from "connected-react-router";

export default function* saga() {
  yield all([
    takeLeading(actionTypes.NAVIGATE_TO_RECIPE_FORM, navigateToRecipeForm),
    takeLeading(actionTypes.NAVIGATE_TO_HOME_PAGE, navigateToRecipeForm)
  ]);
}

export function* navigateToRecipeForm(data) {
  yield put(push("/createRecipe"));
}

export function* navigateToHomePage() {
  yield put(goBack("/"));
}
