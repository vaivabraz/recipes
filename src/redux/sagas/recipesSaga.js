import { put, call, takeLeading, all } from "redux-saga/effects";

import * as actionTypes from "../actions/actionTypes";
import { getRecipes as callGetRecipes } from "../../api/recipesApi";
import * as recipesActions from "../actions/recipesActions";

export default function* saga() {
  yield all([takeLeading(actionTypes.GET_RECIPES, getRecipes)]);
}

export function* getRecipes() {
  const response = yield call(callGetRecipes);
  yield put(recipesActions.setRecipes(response));
}
