import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import createSagaMiddleware from "redux-saga";
import * as sagas from "./sagas";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";

export const history = createBrowserHistory();

const initSagas = sagaMiddleware => {
  Object.values(sagas).forEach(sagaMiddleware.run.bind(sagaMiddleware));
};

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const middleWares = [
    sagaMiddleware,
    reduxImmutableStateInvariant(),
    routerMiddleware(history)
  ];

  const composables = applyMiddleware(...middleWares);
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
  const store = createStore(
    rootReducer(history),
    initialState,
    composeEnhancers(composables)
  );

  initSagas(sagaMiddleware);
  return store;
}
