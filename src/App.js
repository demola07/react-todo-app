import React from "react";
import TodoInput from "./components/TooInput";
import TodoList from "./components/TodoList";
function App() {
  return (
    <div>
      Hello from App component
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
