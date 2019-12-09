import React from "react";

function ListTodo({ tasks, updateTasks }) {
  const toggleEdit = taskIndex => {
    let objectToUpdate = Object.assign({}, tasks[taskIndex], {
      edit: !tasks[taskIndex].edit
    });

    let updatedTasks = [
      ...tasks.slice(0, taskIndex),
      objectToUpdate,
      ...tasks.slice(taskIndex + 1)
    ];

    updateTasks(updatedTasks);
  };

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
    <div>
      {tasks &&
        tasks.map((taskIterator, index) => {
          // POSSIBLY CHANGE THIS TO AN EDIT COMPONENT
          if (taskIterator.edit) {
            return (
              <form onSubmit={() => toggleEdit(index)}>
                <input
                  value={taskIterator.task}
                  onChange={event => handleEdit(event, index)}
                />
                <button type="submit">DONE EDITING</button>
              </form>
            );
          } else {
            return (
              <div key={index}>
                {taskIterator.task}
                <button onClick={() => toggleEdit(index)}>EDIT</button>
              </div>
            );
          }
        })}
    </div>
  );
}

export default ListTodo;
