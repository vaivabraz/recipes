import { put, call, takeLeading, all, select, fork } from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes";
import { geUserApi } from "../../api/usersApi";
import { getUsername } from "../selectors/userSelectors";
import * as userActions from "../actions/userActions";
import { getRecipes } from "./recipesSaga";
import { navigateToHomePage } from "./navigationSaga";

export default function* saga() {
  yield all([
    takeLeading(actionTypes.LOAD_USER, loadUser),
    takeLeading(actionTypes.LOG_IN, logIn),
    takeLeading(actionTypes.LOG_OFF, logOff),
    takeLeading(actionTypes.LOG_IN_SAVED_USER, logInSavedUser),
  ]);
}

export function* logIn(data) {
  yield put(userActions.setLoading(true));
  yield put(userActions.setLogInStatus(true));
  localStorage.setItem("loggedInUser", data.userData.username);
  yield call(loadUser);
  yield fork(navigateToHomePage);
  yield fork(getRecipes);
  yield put(userActions.setLoading(false));
}

export function* logOff() {
  yield put(userActions.setLogInStatus(false));
  localStorage.setItem("loggedInUser", "");
}

export function* loadUser() {
  try {
    const user = yield select(getUsername);
    const response = yield call(geUserApi, user);
    yield put(userActions.setUserInformation(response));
  } catch (e) {
    console.log("Error: ", e);
  }
}

export function* logInSavedUser() {
  const loggedUser = localStorage.getItem("loggedInUser");
  if (loggedUser) {
    yield put(userActions.logIn({ username: loggedUser }));
  }
  yield put(userActions.setStartPageInitialized(true));
}
