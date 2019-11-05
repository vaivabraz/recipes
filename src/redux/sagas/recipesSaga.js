import { put, call, takeLeading, all, fork } from "redux-saga/effects";

import * as actionTypes from "../actions/actionTypes";
import {
  getRecipes as callGetRecipes,
  postRecipe as callPostRecipe
} from "../../api/recipesApi";
import * as recipesActions from "../actions/recipesActions";
import { navigateToHomePage } from "./navigationSaga";

export default function* saga() {
  yield all([
    takeLeading(actionTypes.GET_RECIPES, getRecipes),
    takeLeading(actionTypes.POST_RECIPE, postRecipe)
  ]);
}

export function* getRecipes() {
  try {
    const response = yield call(callGetRecipes);
    yield put(recipesActions.setRecipes(response));
  } catch (e) {
    console.log("Error: ", e);
    yield put(recipesActions.setError("Nepavyko parsiusti receptu"));
  }
}

export function* postRecipe(data) {
  try {
    const response = yield call(callPostRecipe, data.recipe);
    console.log("Response: ", response);

    yield fork(getRecipes);
    yield fork(navigateToHomePage);
    yield;
  } catch (e) {
    console.log("Error: ", e);
  }
}
