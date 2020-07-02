import { call, select } from "redux-saga/effects";
import { getUsername } from "../selectors/userSelectors";

export function* callApi(fn, body = {}, slug) {
  try {
    const user = yield select(getUsername);
    body.username = user;
    const response = yield call(fn, body, slug);
    return response;
  } catch (e) {
    console.log("Error: ", e);
  }
}
