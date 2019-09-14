import { fork } from "redux-saga/effects";
import recipes from "./recipesSaga";

export default function* saga() {
  yield fork(recipes);
}
