import "./index.css"

import React from "react";
import { useState } from "react";
function Todos() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const AddnewTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };
  const handleTaskRemove = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };
  return (
    <div className="mainComponentDiv">
      <div className="inputData">
      <input
        type="text"
        placeholder="Enter new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        className="inputField"
      />
      <button onClick={AddnewTask} className="AddTaskButton">Add New Task</button>
      </div>
      <div>
        {tasks.map((t, index) => (
          <ul key={index} className="tasksList inputData">
            <li className="task">{t}</li>
            <button onClick={() => handleTaskRemove(index)} className="classRemoveButton">X</button>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default Todos;
