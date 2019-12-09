import React from "react";

function EditTodo({ updateTasks, tasks, task, index, toggleEdit }) {
  const handleEdit = (event, taskIndex) => {
    let objectToUpdate = Object.assign({}, tasks[taskIndex], {
      task: event.target.value
    });

    let updatedTasks = [
      ...tasks.slice(0, taskIndex),
      objectToUpdate,
      ...tasks.slice(taskIndex + 1)
    ];

    updateTasks(updatedTasks);
  };

  return (
    <React.Fragment>
      <form onSubmit={() => toggleEdit(index)}>
        <input value={task} onChange={event => handleEdit(event, index)} />
        <button type="submit">DONE EDITING</button>
      </form>
    </React.Fragment>
  );
}

export default EditTodo;
