import React from "react";

function ToDoList({ tasks }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index} className="text-gray-500">
          {task}
        </li>
      ))}
    </ul>
  );
}

export default ToDoList;
