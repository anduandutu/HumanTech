import { createStore, applyMiddleware, compose } from "redux";
import combinedReducers from "../reducers/reducersCombined";
import thunk from "redux-thunk";
import { logger } from "redux-logger";

const composeEnhancer = compose;
const middleware = [logger, thunk];

export const store = createStore(
  combinedReducers,
  composeEnhancer(applyMiddleware(...middleware))
);
