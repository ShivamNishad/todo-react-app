import React from "react";

// Functional component definition
const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    // Container div for a single to-do item, with conditional class based on completion status
    <div className={`item ${todo.completed ? "complete" : ""}`}>
      {/* Span element to display the to-do text, with click handler to toggle completion */}
      <span className="text" onClick={() => toggleComplete(todo.id)}>
        {todo.text}
      </span>
      <div className="actions">
        <button className="removeBtn" onClick={() => deleteTodo(todo.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;