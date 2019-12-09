import React from "react";
import EditTodo from "./EditTodo.js";

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

  return (
    <div>
      {tasks &&
        tasks.map((taskIterator, index) => {
          if (taskIterator.edit) {
            return (
              <EditTodo
                updateTasks={updateTasks}
                toggleEdit={toggleEdit}
                index={index}
                tasks={tasks}
                task={taskIterator.task}
              />
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
