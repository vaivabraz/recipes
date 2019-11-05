import { put, takeLeading, all } from "redux-saga/effects";

import * as actionTypes from "../actions/actionTypes";
import { push } from "connected-react-router";

export default function* saga() {
  yield all([
    takeLeading(actionTypes.NAVIGATE_TO_RECIPE_FORM, navigateToRecipeForm)
  ]);
}

export function* navigateToRecipeForm(data) {
  yield put(push("/createRecipe"));
}
