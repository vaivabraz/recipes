import { put, call, takeLeading, all } from "redux-saga/effects";

import * as actionTypes from "../actions/actionTypes";
import { getRecipes as callGetRecipes } from "../../api/recipesApi";
import * as recipesActions from "../actions/recipesActions";

export default function* saga() {
  yield all([takeLeading(actionTypes.GET_RECIPES, getRecipes)]);
}

export function* getRecipes() {
  try {
    const response = yield call(callGetRecipes);
    yield put(recipesActions.setRecipes(response));
  } catch (e) {
    console.log("response: ", e);
    yield put(recipesActions.setError("Nepavyko parsiusti receptu"));
  }
}
