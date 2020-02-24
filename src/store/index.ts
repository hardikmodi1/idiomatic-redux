import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { CombineReducerType } from "../reducers/types";
import todoApp from "../reducers";

const store = (state?: CombineReducerType) =>
  createStore(todoApp, state, applyMiddleware(thunk));

export default store;
