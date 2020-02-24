import {
  ADD_TODO,
  CLEAR_COMPLETED,
  TOGGLE_COMPLETE,
  REMOVE_TODO
} from "../constants/todoActionType";

export interface TodoState {
  byId: ById;
  allIds: string[];
  activeIds: string[];
  completedIds: string[];
}

export interface Todo {
  id: string;
  active: boolean;
  completed: boolean;
  todo: string;
}

export interface ById {
  [id: string]: Todo;
}

export interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: Todo;
}

export interface ClearCompletedAction {
  type: typeof CLEAR_COMPLETED;
}

export interface ToggleCompleteAction {
  type: typeof TOGGLE_COMPLETE | typeof REMOVE_TODO;
  payload: { id: string };
}

export type TodoActionTypes =
  | AddTodoAction
  | ClearCompletedAction
  | ToggleCompleteAction;

export interface CombineReducerType {
  todos: TodoState;
}
