import React from "react";
import "./styles.css";
import TodoForm from "./components/TodoForm";
import FilterButtons from "./components/FilterButton";
import ShowErrorMessage from "./components/ErrorMessageRenderer";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";

const Filters = ["all", "active", "completed"];

let timeoutId: number;
function App() {
  const [currentFilter, setCurrentFilter] = React.useState<string>("all");
  const [errorMessage, setErrorMessage] = React.useState("");

  const toggleErrorMeesageVisible = React.useCallback((message: string) => {
    setErrorMessage(message);
    //@ts-ignore
    timeoutId = setTimeout(() => setErrorMessage(""), 2000);
  }, []);

  const clearTimeoutId = React.useCallback(() => {
    errorMessage && setErrorMessage("");
    timeoutId && clearTimeout(timeoutId);
  }, [errorMessage]);

  const toggleFilter = React.useCallback((filter: string) => {
    setCurrentFilter(filter);
  }, []);

  return (
    <div className="App">
      <ShowErrorMessage errorMessage={errorMessage} />
      <h1>Todos</h1>
      <div className="container">
        <TodoForm
          toggleErrorMeesageVisible={toggleErrorMeesageVisible}
          clearTimeoutId={clearTimeoutId}
        />
        <div className="flex-center">
          {Filters.map(filter => (
            <FilterButtons
              key={filter}
              toggleFilter={toggleFilter}
              filter={filter}
              active={currentFilter === filter}
            />
          ))}
        </div>
        <TodoList filter={currentFilter} />
        <div className="flex-center">
          <Footer filter={currentFilter} />
        </div>
      </div>
    </div>
  );
}

export default App;
