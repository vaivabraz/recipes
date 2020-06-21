import * as types from "../actions/actionTypes";
import { Record } from "immutable";

const initalState = Record({
  username: "TestUser",
  categories: [],
  isLoggedIn: false,
  initialized: false,
  loading: false,
});

function setCategories(state, info) {
  return state.set("categories", info.userCategories.sort());
}

function setLogInStatus(state, logInStatus) {
  return state.set("isLoggedIn", logInStatus);
}

function setStartPageInitialized(state, initialized) {
  return state.set("initialized", initialized);
}

function setLoading(state, loading) {
  return state.set("loading", loading);
}

export default function userReducer(state = new initalState(), action) {
  switch (action.type) {
    case types.SET_USER_INFORMATION:
      return setCategories(state, action.info);
    case types.SET_LOG_IN_STATUS:
      return setLogInStatus(state, action.logInStatus);
    case types.SET_START_PAGE_INITIALIZED:
      return setStartPageInitialized(state, action.initialized);
    case types.SET_LOADING:
      return setLoading(state, action.loading);
    default:
      return state;
  }
}
