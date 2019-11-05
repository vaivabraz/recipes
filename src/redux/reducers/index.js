import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import recipes from "./recipesReducer";

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    recipes
  });

export default rootReducer;
