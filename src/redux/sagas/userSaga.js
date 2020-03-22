import { put, call, takeLeading, all, select } from "redux-saga/effects";

import * as actionTypes from "../actions/actionTypes";
import { geUserApi } from "../../api/usersApi";
import { getUsername } from "../selectors/userSelectors";
import { setUserInformation } from "../actions/userActions";

export default function* saga() {
  yield all([takeLeading(actionTypes.LOAD_USER, loadUser)]);
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
