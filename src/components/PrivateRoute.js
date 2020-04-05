import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../redux/selectors/userSelectors";

export const PrivateRoute = ({ ...props }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return isLoggedIn ? <Route {...props} /> : <Redirect to="/login" />;
};
