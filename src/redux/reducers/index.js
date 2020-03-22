import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import recipes from "./recipesReducer";
import user from "./userReducer";

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    recipes,
    user
  });

export default rootReducer;
