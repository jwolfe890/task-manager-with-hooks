import React from "react";

function AddTodo({ updateTasks, createTask, task, tasks }) {
  const formSubmit = event => {
    event.preventDefault();
    let taskItems = [...tasks];
    taskItems.push(task);
    updateTasks(taskItems);
    createTask({ task: "", edit: false });
  };

  const handleChange = event => {
    let newTask = { task: event.target.value, edit: false };
    createTask(newTask);
  };

  return (
    <div>
      <h1>Add a Task</h1>
      <form onSubmit={formSubmit}>
        <input value={task.task} onChange={event => handleChange(event)} />
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}

export default AddTodo;
