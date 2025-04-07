import React, { useState } from "react";

const ToDoList = () => {
  const [task, setTask] = useState("");
  const [finalTask, setFinalTask] = useState([]);

  const handleData = (e) => {
    let { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleClick = () => {
    if (task.task.trim() === "") return;

    const newTask = {
      text: task.task,
      completed: false,
    };

    setFinalTask([...finalTask, newTask]);
    setTask({ task: "" });
  };

  const handleDelete = (index) => {
    const updatedTasks = finalTask.filter((_, i) => i !== index);
    setFinalTask(updatedTasks);
  };

  const toggleComplete = (index) => {
    const updatedTasks = finalTask.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t
    );
    setFinalTask(updatedTasks);
  };

  return (
    <div className="todo-container">
      <div className="heading">
        <h2>To-Do List</h2>
      </div>
      <div className="list-container">
        <div className="add-task">
          <input
            type="text"
            name="task"
            id="task"
            value={task.task}
            onChange={handleData}
            placeholder="Enter the task..."
          />
          <button onClick={handleClick}>Add Task</button>
        </div>
        <div className="display-task">
          {finalTask.length === 0 ? (
            <p className="empty-state">No tasks yet. Add one above!</p>
          ) : (
            finalTask.map((item, index) => (
              <div className="task-details" key={index}>
                <div className="add-task-details">
                  <input
                    type="checkbox"
                    id={`task-${index}`}
                    checked={item.completed}
                    onChange={() => toggleComplete(index)}
                  />
                  <label
                    htmlFor={`task-${index}`}
                    className={item.completed ? "completed" : ""}
                  >
                    <span>{item.text}</span>
                  </label>
                </div>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
