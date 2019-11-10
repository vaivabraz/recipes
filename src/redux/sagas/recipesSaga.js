import { put, call, takeLeading, all, fork } from "redux-saga/effects";

import * as actionTypes from "../actions/actionTypes";
import {
  getRecipesApi,
  postRecipeApi,
  putRecipeApi,
  deleteRecipeApi
} from "../../api/recipesApi";
import * as recipesActions from "../actions/recipesActions";
import { navigateToHomePage } from "./navigationSaga";

export default function* saga() {
  yield all([
    takeLeading(actionTypes.GET_RECIPES, getRecipes),
    takeLeading(actionTypes.POST_RECIPE, postRecipe),
    takeLeading(actionTypes.DELETE_RECIPE, deleteRecipe)
  ]);
}

export function* getRecipes() {
  try {
    const response = yield call(getRecipesApi);
    yield put(recipesActions.setRecipes(response));
  } catch (e) {
    console.log("Error: ", e);
    yield put(recipesActions.setError("Nepavyko parsiusti receptu"));
  }
}

export function* postRecipe(data) {
  try {
    if (data.recipe._id) {
      const response = yield call(putRecipeApi, data.recipe);
      console.log("Response putted: ", response);
    } else {
      const response = yield call(postRecipeApi, data.recipe);
      console.log("Response posted: ", response);
    }

    yield fork(getRecipes);
    yield fork(navigateToHomePage);
    yield;
  } catch (e) {
    console.log("Error: ", e);
  }
}

export function* deleteRecipe(data) {
  try {
    yield call(deleteRecipeApi, data.recipeId);
    console.log("Recipe deleted");

    yield fork(getRecipes);
    yield fork(navigateToHomePage);
    yield;
  } catch (e) {
    console.log("Error: ", e);
  }
}
