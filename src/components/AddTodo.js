import React, { useState } from "react";

const AddTodo = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText("");
    }
  };

  return (
    <form className="new_task_form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="new_task_input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit" className="new_task_submit">
        Add Task
      </button>
    </form>
  );
};

export default AddTodo;