import React, { useState, useEffect } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import Filter from "./components/Filter";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  // Load todos from local storage on initial render
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storedTodos);
  }, []);

  // Save todos to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Function to add a new todo
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(), // Unique ID based on current timestamp
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]); // Add new todo to the list
  };

  // Function to toggle the completion status of a todo
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Function to delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Filter todos based on the selected filter
  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "pending") return !todo.completed;
    return true; // 'all'
  });

  return (
    // Main container for the app
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
        {/* Filter component to set the filter */}
        <Filter setFilter={setFilter} />
      </div>
      {/* Component to add a new todo */}
      <AddTodo addTodo={addTodo} />
      {/* Conditional rendering based on the presence of todos */}
      {filteredTodos.length > 0 ? (
        <TodoList
          todos={filteredTodos} // Pass filtered todos as a prop
          toggleComplete={toggleComplete} // Pass toggleComplete function as a prop
          deleteTodo={deleteTodo} // Pass deleteTodo function as a prop
        />
      ) : (
        <div className="noTodos">No tasks found!</div>
      )}
    </div>
  );
};

export default App;