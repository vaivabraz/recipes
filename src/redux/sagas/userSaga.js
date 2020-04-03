import { put, call, takeLeading, all, select, fork } from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes";
import { geUserApi } from "../../api/usersApi";
import { getUsername } from "../selectors/userSelectors";
import { setUserInformation, setLogInStatus } from "../actions/userActions";
import { getRecipes } from "./recipesSaga";
import { navigateToHomePage } from "./navigationSaga";

export default function* saga() {
  yield all([
    takeLeading(actionTypes.LOAD_USER, loadUser),
    takeLeading(actionTypes.LOG_IN, logIn),
  ]);
}

export function* logIn() {
  yield put(setLogInStatus(true));
  yield call(loadUser);
  yield fork(getRecipes);
  yield fork(navigateToHomePage);
}

export function* loadUser() {
  try {
    const user = yield select(getUsername);
    const response = yield call(geUserApi, user);
    yield put(setUserInformation(response));
  } catch (e) {
    console.log("Error: ", e);
  }
}
