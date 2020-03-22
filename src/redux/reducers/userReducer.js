import * as types from "../actions/actionTypes";
import { Record } from "immutable";

const initalState = Record({
  username: "VaivaBraz",
  categories: []
});

function setCategories(state, info) {
  return state.set("categories", info.userCategories);
}

export default function userReducer(state = new initalState(), action) {
  switch (action.type) {
    case types.SET_USER_INFORMATION:
      return setCategories(state, action.info);
    default:
      return state;
  }
}
