import { combineReducers } from "redux";
import { CombineReducerType } from "./types";
import todoReducer from "./byIdReducer";

const todoApp = combineReducers({
  todos: todoReducer
});

export default todoApp;

// TODO: Provide better typings for filter argument
export const getFilteredTodos = (state: CombineReducerType, filter: string) => {
  const {
    todos: { byId, allIds, activeIds, completedIds }
  } = state;
  console.log(state);
  if (filter === "active") {
    return activeIds.map(id => byId[id]);
  } else if (filter === "completed") {
    return completedIds.map((id: any) => byId[id]);
  }
  return allIds.map((todo: any) => byId[todo]);
};

export const getFilteredTodosCount = (
  state: CombineReducerType,
  filter: string
) => {
  const {
    todos: { byId, allIds, activeIds, completedIds }
  } = state;
  if (filter === "active") {
    return activeIds.map(id => byId[id]).length;
  } else if (filter === "completed") {
    return completedIds.map((id: any) => byId[id]).length;
  }
  return allIds.map((todo: any) => byId[todo]).length;
};
