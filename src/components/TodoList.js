import React from "react";
import TodoItem from "./TodoItem";

// Functional component definition
const TodoList = ({ todos, toggleComplete, deleteTodo }) => {
  return (
    <div>
      {/* Map over the todos array and render a TodoItem for each todo */}
      {todos.map((todo) => (
        <TodoItem
          key={todo.id} // Unique key for each to-do item
          todo={todo} // Pass the todo object as a prop
          toggleComplete={toggleComplete} // Pass the toggleComplete function as a prop
          deleteTodo={deleteTodo} // Pass the deleteTodo function as a prop
        />
      ))}
    </div>
  );
};

export default TodoList;