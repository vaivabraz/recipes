import { fork } from "redux-saga/effects";
import recipes from "./recipesSaga";
import navigationSaga from "./navigationSaga";

export default function* saga() {
  yield fork(navigationSaga);
  yield fork(recipes);
}
