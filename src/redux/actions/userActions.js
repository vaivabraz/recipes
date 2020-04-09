import * as types from "./actionTypes";

export function logIn(userData) {
  return {
    type: types.LOG_IN,
    userData,
  };
}

export function logOff() {
  return {
    type: types.LOG_OFF,
  };
}

export function logInSavedUser() {
  return {
    type: types.LOG_IN_SAVED_USER,
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
