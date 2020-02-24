import todoReducer from "../byIdReducer";
import "@testing-library/jest-dom";
import initialTodoState from "../../testUtils/intialTodoState.json";
import { cleanup } from "@testing-library/react";
import { defaultState } from "../byIdReducer";
import {
  ADD_TODO,
  TOGGLE_COMPLETE,
  CLEAR_COMPLETED
} from "../../constants/todoActionType";
import callTodoReducer from "../../testUtils/callTodoReducer";
import shortid from "shortid";
import { TodoState } from "../types";

afterEach(cleanup);

describe("Todo reducer returns the default state", () => {
  it("Invalid type", () => {
    // @ts-ignore
    const newState = todoReducer(undefined, { type: "SOME_RANDOM_ACTION" });
    expect(newState).toEqual(defaultState);
  });
});

describe("Todo reducer should work with all the types", () => {
  const initialStateTodosLength = initialTodoState.allIds.length;
  it("Add todo action", () => {
    const id = shortid.generate(),
      todo = "Complete the todo app";
    const payload = {
      todo,
      id,
      completed: false,
      active: false
    };
    const newState = callTodoReducer(defaultState, {
      type: ADD_TODO,
      payload
    });
    const { byId, allIds, completedIds, activeIds } = newState;
    expect(allIds).toHaveLength(defaultState.allIds.length + 1);
    expect(activeIds).toHaveLength(defaultState.activeIds.length + 1);
    expect(completedIds).toHaveLength(defaultState.completedIds.length);
    expect(Object.keys(byId)).toHaveLength(defaultState.allIds.length + 1);
    expect(byId).toEqual({
      [id]: payload
    });
  });

  it("toggle todo completed action", () => {
    const toggledId = initialTodoState.allIds[0];
    // dispatch the action to toggle the todo
    let newState = callTodoReducer(undefined, {
      type: TOGGLE_COMPLETE,
      payload: {
        id: toggledId
      }
    });
    const { byId, allIds } = newState;
    const toggledTodo = (initialTodoState as TodoState).byId[toggledId];
    expect(allIds).toContain(toggledId);
    expect(Object.keys(byId)).toHaveLength(initialStateTodosLength);
    expect(byId).toEqual({
      ...initialTodoState.byId,
      [toggledId]: {
        ...toggledTodo,
        completed: !toggledTodo.completed
      }
    });
  });

  it("clear completed action", () => {
    const { byId, allIds } = callTodoReducer(undefined, {
      type: CLEAR_COMPLETED
    });
    let count = 0;
    Object.keys(initialTodoState.byId).map(
      id => !(initialTodoState as TodoState).byId[id].completed && count++
    );
    expect(allIds).toHaveLength(count);
    expect(Object.keys(byId)).toHaveLength(count);
  });
});
