import React from "react";
import { render } from "react-dom";
import { ConnectedRouter } from "connected-react-router";
import App from "./components/App";
import "./index.css";
import "./classes.css";
import configureStore, { history } from "./redux/configureStore";
import { Provider as ReduxProvider } from "react-redux";
import { logInSavedUser } from "./redux/actions/userActions";
require("dotenv").config();

const store = configureStore();
render(
  <ReduxProvider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </ReduxProvider>,
  document.getElementById("app")
);

store.dispatch(logInSavedUser());
