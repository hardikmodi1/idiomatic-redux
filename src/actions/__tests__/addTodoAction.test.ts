import {
  getAddTodoAction,
  getClearCompletedAction,
  getToggleCompleteAction
} from "../todosAction";
import {
  ADD_TODO,
  CLEAR_COMPLETED,
  TOGGLE_COMPLETE
} from "../../constants/todoActionType";

describe("todos actions", () => {
  it("returns add todo action", () => {
    const todo = "Return todo action";
    expect(getAddTodoAction(todo)).toEqual(
      expect.objectContaining({
        type: ADD_TODO
      })
    );
  });

  it("returns clear completed action", () => {
    expect(getClearCompletedAction()).toEqual({
      type: CLEAR_COMPLETED
    });
  });

  it("returns toggle completed action", () => {
    const todo_id = "awQuertiwovhg";
    expect(getToggleCompleteAction(todo_id)).toEqual({
      type: TOGGLE_COMPLETE,
      payload: {
        id: todo_id
      }
    });
  });
});
