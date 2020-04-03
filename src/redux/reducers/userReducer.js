import * as types from "../actions/actionTypes";
import { Record } from "immutable";

const initalState = Record({
  username: "VaivaBraz",
  categories: [],
  isLoggedIn: false
});

function setCategories(state, info) {
  return state.set("categories", info.userCategories.sort());
}

function setLogInStatus(state, logInStatus) {
  return state.set("isLoggedIn", logInStatus);
}

export default function userReducer(state = new initalState(), action) {
  switch (action.type) {
    case types.SET_USER_INFORMATION:
      return setCategories(state, action.info);
    case types.SET_LOG_IN_STATUS:
      return setLogInStatus(state, action.logInStatus);
    default:
      return state;
  }
}
