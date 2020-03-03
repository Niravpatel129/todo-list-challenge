import React from "react";
import "./App.scss";
import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
    <div className="App">
      <div className="TodoApp">
        <h1>Todo List</h1>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
