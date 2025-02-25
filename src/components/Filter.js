import React from "react";

// Functional component definition
const Filter = ({ setFilter }) => {
  return (
    // Container div for filter buttons
    <div className="filter">
      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("completed")}>Completed</button>
      <button onClick={() => setFilter("pending")}>Pending</button>
    </div>
  );
};

export default Filter;