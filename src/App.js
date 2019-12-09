import React, { useState } from "react";
import AddTodo from "./AddTodo";
import ListTodo from "./ListTodo";
import "./App.css";

function App() {
  const [newTask, createTask] = useState("");
  const [tasks, updateTasks] = useState([]);

  return (
    <div>
      <AddTodo
        createTask={createTask}
        updateTasks={updateTasks}
        task={newTask}
        tasks={tasks}
      />
      <ListTodo tasks={tasks} updateTasks={updateTasks} />
    </div>
  );
}

export default App;
