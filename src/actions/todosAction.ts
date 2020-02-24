import {
  ADD_TODO,
  CLEAR_COMPLETED,
  TOGGLE_COMPLETE,
  REMOVE_TODO
} from "../constants/todoActionType";
import shortid from "shortid";
import { TodoActionTypes } from "../reducers/types";

export const getAddTodoAction = (todo: string): TodoActionTypes => {
  return {
    type: ADD_TODO,
    payload: {
      todo,
      id: shortid.generate(),
      completed: false,
      active: false
    }
  };
};

export const getClearCompletedAction = (): TodoActionTypes => {
  return {
    type: CLEAR_COMPLETED
  };
};

export const getRemoveTodoAction = (todoId: string): TodoActionTypes => {
  return {
    type: REMOVE_TODO,
    payload: {
      id: todoId
    }
  };
};

export const getToggleCompleteAction = (todoId: string): TodoActionTypes => {
  return {
    type: TOGGLE_COMPLETE,
    payload: {
      id: todoId
    }
  };
};
