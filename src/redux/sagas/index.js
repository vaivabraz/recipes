import { fork } from "redux-saga/effects";
import recipes from "./recipesSaga";
import navigationSaga from "./navigationSaga";
import userSaga from "./userSaga";

export default function* saga() {
  yield fork(navigationSaga);
  yield fork(recipes);
  yield fork(userSaga);
}
