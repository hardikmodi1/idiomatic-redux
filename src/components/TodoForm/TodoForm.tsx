import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { getAddTodoAction } from "../../actions/todosAction";
import Button from "../atoms/Button";
import TextInput from "../atoms/TextInput";

const connector = connect(null, {
  getAddTodoAction
});

type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props {
  toggleErrorMeesageVisible: (message: string) => void;
  clearTimeoutId: () => void;
}

const TodoForm = (props: Props & PropsFromRedux) => {
  const [todo, setTodo] = React.useState("");

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (todo.trim() === "") {
      props.toggleErrorMeesageVisible("Todo can not be empty 😿 ");
    } else {
      props.getAddTodoAction(todo);
    }
    setTodo("");
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.clearTimeoutId();
    setTodo(e.target.value);
  };

  return (
    <div>
      <form>
        <TextInput value={todo} placeholder="Add todo" onChange={onChange} />
        <Button label="ADD" onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default connector(TodoForm);
