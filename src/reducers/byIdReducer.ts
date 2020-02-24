import {
  ADD_TODO,
  TOGGLE_COMPLETE,
  CLEAR_COMPLETED,
  REMOVE_TODO
} from "../constants/todoActionType";
import { TodoState, TodoActionTypes } from "./types";
import update from "immutability-helper";

export const defaultState: TodoState = {
  byId: {},
  allIds: [],
  activeIds: [],
  completedIds: []
};

const todoReducer = (state = defaultState, action: TodoActionTypes) => {
  switch (action.type) {
    case ADD_TODO:
      return update(state, {
        byId: {
          [action.payload.id]: { $set: action.payload }
        },
        allIds: { $push: [action.payload.id] },
        activeIds: { $push: [action.payload.id] }
      });

    case TOGGLE_COMPLETE:
      const todo = state.byId[action.payload.id];
      if (todo.completed) {
        const index = state.completedIds.findIndex(
          id => id === action.payload.id
        );
        if (index !== -1) {
          return update(state, {
            byId: {
              [action.payload.id]: {
                completed: { $set: false }
              }
            },
            activeIds: { $push: [action.payload.id] },
            completedIds: { $splice: [[index, 1]] }
          });
        }
        return state;
      } else {
        const index = state.activeIds.findIndex(id => id === action.payload.id);
        if (index !== -1) {
          return update(state, {
            byId: {
              [action.payload.id]: {
                completed: { $set: true }
              }
            },
            completedIds: { $push: [action.payload.id] },
            activeIds: { $splice: [[index, 1]] }
          });
        }
        return state;
      }

    case CLEAR_COMPLETED:
      return update(state, {
        allIds: allIds => allIds.filter(id => !state.byId[id].completed),
        byId: {
          $unset: state.completedIds
        },
        completedIds: { $splice: [[0, state.completedIds.length]] }
      });

    case REMOVE_TODO:
      const completedTodoIndex = state.completedIds.findIndex(
        id => id === action.payload.id
      );
      const activeTodoIndex = state.activeIds.findIndex(
        id => id === action.payload.id
      );
      const allTodoIndex = state.allIds.findIndex(
        id => id === action.payload.id
      );
      return update(state, {
        byId: {
          $unset: [action.payload.id]
        },
        completedIds:
          completedTodoIndex === -1
            ? { $push: [] }
            : { $splice: [[completedTodoIndex, 1]] },
        allIds:
          allTodoIndex === -1
            ? { $push: [] }
            : { $splice: [[allTodoIndex, 1]] },
        activeIds:
          activeTodoIndex === -1
            ? { $push: [] }
            : { $splice: [[activeTodoIndex, 1]] }
      });

    default:
      return state;
  }
};

export default todoReducer;
