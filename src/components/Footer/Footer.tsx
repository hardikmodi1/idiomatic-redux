import React from "react";
import { getFilteredTodosCount } from "../../reducers";
import { connect, ConnectedProps } from "react-redux";
import { getClearCompletedAction } from "../../actions/todosAction";
import Button from "../atoms/Button";
import { CombineReducerType } from "../../reducers/types";
import "./footer.css";

const mapStateToProps = (state: CombineReducerType, { filter }: Props) => ({
  todosCount: getFilteredTodosCount(state, filter)
});

const connector = connect(mapStateToProps, {
  getClearCompletedAction
});

type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props {
  filter: string;
}

const Footer = (props: PropsFromRedux & Props) => {
  const onClick = () => props.getClearCompletedAction();
  return (
    <>
      <span className="padding-top">
        {props.filter} todos: {props.todosCount}
      </span>
      <Button label={"Clear Completed"} onClick={onClick} />
    </>
  );
};

export default connector(Footer);
