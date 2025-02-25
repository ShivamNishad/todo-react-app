import React, { useState } from "react";

// Functional component definition
const AddTodo = ({ addTodo }) => {
  // State hook to manage the input text
  const [text, setText] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (text.trim()) { // Check if input is not empty
      addTodo(text); // Call the addTodo function with the input text
      setText(""); // Reset the input field
    }
  };

  return (
    // Form element with onSubmit event handler
    <form className="new_task_form" onSubmit={handleSubmit}>
      {/* Input field controlled by text state */}
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