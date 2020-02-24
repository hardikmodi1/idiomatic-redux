import React from "react";
import { TodoState, CombineReducerType } from "../reducers/types";
import store from "../store";
import { Provider } from "react-redux";
import App from "../App";
import { render } from "@testing-library/react";

export const renderComponent = (state?: CombineReducerType) =>
  render(
    <Provider store={store(state)}>
      <App />
    </Provider>
  );
