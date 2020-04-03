import * as types from "./actionTypes";

export function logIn() {
  return {
    type: types.LOG_IN,
  };
}

export function setLogInStatus(logInStatus) {
  return {
    type: types.SET_LOG_IN_STATUS,
    logInStatus,
  };
}

export function loadUser() {
  return {
    type: types.LOAD_USER,
  };
}

export function setUserInformation(info) {
  return {
    type: types.SET_USER_INFORMATION,
    info,
  };
}
