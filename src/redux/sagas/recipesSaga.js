import { put, call, takeLeading, all, fork } from "redux-saga/effects";

import * as actionTypes from "../actions/actionTypes";
import {
  getRecipesApi,
  getShortRecipesApi,
  postRecipeApi,
  putRecipeApi,
  deleteRecipeApi,
} from "../../api/userRecipesApi";
import * as recipesActions from "../actions/recipesActions";
import { callApi } from "../sagas/utilsSaga";
import { navigateToHomePage } from "./navigationSaga";

export default function* saga() {
  yield all([
    takeLeading(actionTypes.GET_RECIPES, getRecipes),
    takeLeading(actionTypes.POST_RECIPE, postRecipe),
    takeLeading(actionTypes.DELETE_RECIPE, deleteRecipe),
  ]);
}

export function* getRecipes() {
  try {
    const response = yield call(callApi, getShortRecipesApi);
    yield put(recipesActions.setUserRecipes(response));
  } catch (e) {
    console.log("Error: ", e);
    yield put(recipesActions.setError("Nepavyko parsiusti receptu"));
  }
}

export function* getFullRecipes() {
  try {
    const response = yield call(callApi, getRecipesApi);
    yield put(recipesActions.setUserRecipes(response));
  } catch (e) {
    console.log("Error: ", e);
    yield put(recipesActions.setError("Nepavyko parsiusti receptu"));
  }
}

export function* postRecipe(data) {
  try {
    if (data.recipe.slug) {
      const response = yield call(
        callApi,
        putRecipeApi,
        { recipe: data.recipe },
        data.recipe.slug,
      );
      console.log("Response putted: ", response);
    } else {
      const body = { recipe: data.recipe };
      const response = yield call(callApi, postRecipeApi, body);
      console.log("Response posted: ", response);
    }

    yield fork(getRecipes);
    yield fork(navigateToHomePage);
  } catch (e) {
    console.log("Error: ", e);
  }
}

export function* deleteRecipe(data) {
  try {
    yield call(callApi, deleteRecipeApi, {}, data.slug);
    console.log("Recipe deleted");

    yield fork(getRecipes);
    yield fork(navigateToHomePage);
    yield;
  } catch (e) {
    console.log("Error: ", e);
  }
}
