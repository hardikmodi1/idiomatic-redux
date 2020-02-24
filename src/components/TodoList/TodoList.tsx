import React from "react";
import { Todo, CombineReducerType } from "../../reducers/types";
import { getFilteredTodos } from "../../reducers";
import { connect, ConnectedProps } from "react-redux";
import {
  getToggleCompleteAction,
  getRemoveTodoAction
} from "../../actions/todosAction";
import CheckBoxInput from "../atoms/CheckboxInput";
import "./todoList.css";

const mapStateToProps = (state: CombineReducerType, { filter }: Props) => {
  return { todos: getFilteredTodos(state, filter) };
};

const connector = connect(mapStateToProps, {
  getToggleCompleteAction,
  getRemoveTodoAction
});
type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props {
  filter: string;
}

const TodoList = (props: Props & PropsFromRedux) => {
  const { todos } = props;
  console.log(todos);
  return (
    <div className="listContainer">
      {todos.length === 0 ? (
        <div className="center">No Todos</div>
      ) : (
        <ul className="collection">
          {todos.map((todo: Todo) => {
            return (
              <li data-testid="todo" className="collection-item" key={todo.id}>
                <div className="todoContainer">
                  <span>
                    <CheckBoxInput
                      className="margin-right"
                      id={todo.id}
                      data-testid="checkbox-complete"
                      checked={todo.completed}
                      onChange={props.getToggleCompleteAction}
                    />
                    <label htmlFor={todo.id}>{todo.todo}</label>
                  </span>
                  <span
                    onClick={() => props.getRemoveTodoAction(todo.id)}
                    className="remove"
                  >
                    X
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default connector(TodoList);
