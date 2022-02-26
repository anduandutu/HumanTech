import { combineReducers } from "redux";
//import * as ReactReduxNotify from "react-redux-notify";
import userReducer from "./userReducer";

const combinedReducers = combineReducers({
  userReducer: userReducer,
});

export default combinedReducers;
