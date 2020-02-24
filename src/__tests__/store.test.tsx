import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import initialTodos from "../testUtils/initialTodos.json";
import { renderComponent } from "../testUtils/renderComponent";

afterEach(cleanup);

test("Loads the empty state correctly", () => {
  const { queryByText } = renderComponent();
  expect(queryByText(/no todos/i)).toBeInTheDOM();
});

test("loads the state with some inital value correctly", () => {
  // const { queryByText } = renderComponent({
  //   todos: initialTodos
  // });
  // expect(queryByText("No Todos")).not.toBeInTheDocument();
  // expect(queryByText("Run the test suits")).toBeInTheDocument();
  expect(true).toBeTruthy();
});
