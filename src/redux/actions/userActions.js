import * as types from "./actionTypes";

export function loadUser() {
  return {
    type: types.LOAD_USER
  };
}

export function setUserInformation(info) {
  return {
    type: types.SET_USER_INFORMATION,
    info
  };
}
