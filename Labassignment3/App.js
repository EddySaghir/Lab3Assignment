import React, { useState } from "react";
import ToDoList from "./ToDoList";

function App() {
  const [tasks, setTasks] = useState(["Do laundry", "Go to gym", "Walk dog"]);

  return (
    <div>
      <h1>ToDo List</h1>
      <ToDoList tasks={tasks} />
    </div>
  );
}

export default App;
