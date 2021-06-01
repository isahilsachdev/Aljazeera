import { applyMiddleware, compose, createStore, combineReducers } from "redux";

import { economyReducer } from "./Economy/reducer";
import { coronaReducer } from "./Corona/reducer";
import { opinionReducer } from "./Opinion/reducer";
import { featuresReducer } from "./Features/reducer";


const rootReducer = combineReducers({
  eco: economyReducer,
  corona: coronaReducer,
  opinion: opinionReducer,
  fea: featuresReducer

});

const customMiddleWare = (store) => (next) => (action) => {
  return typeof action === "function"
    ? action(store.dispatch, store.getState)
    : next(action);
};

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const enchancer = composeEnhancers(applyMiddleware(customMiddleWare));

export const store = createStore(rootReducer, enchancer);
