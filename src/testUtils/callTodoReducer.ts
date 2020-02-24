import todoReducer from "../reducers/byIdReducer";
import initialTodoState from "./intialTodoState.json";
import { TodoActionTypes, TodoState } from "../reducers/types";

const callTodoReducer = (
  state: TodoState = initialTodoState,
  action: TodoActionTypes
) => {
  return todoReducer(state, action);
};

export default callTodoReducer;
