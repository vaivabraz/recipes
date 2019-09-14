import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import createSagaMiddleware from "redux-saga";
import * as sagas from "./sagas";

const initSagas = sagaMiddleware => {
  Object.values(sagas).forEach(sagaMiddleware.run.bind(sagaMiddleware));
};

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const middleWares = [sagaMiddleware, reduxImmutableStateInvariant()];

  const composables = applyMiddleware(...middleWares);
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(composables)
  );

  initSagas(sagaMiddleware);
  return store;
}
