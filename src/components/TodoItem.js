import React from "react";

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <div className={`item ${todo.completed ? "complete" : ""}`}>
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