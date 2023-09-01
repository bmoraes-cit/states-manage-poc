import React from "react";
import { useTodoStore } from "../../zustand/todo";
import { useNavigate } from "react-router-dom";
export const FormZustand: React.FC = () => {
  const { changeTaskName, addTask, tasks, taskName } = useTodoStore();
  const navigate = useNavigate();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeTaskName(e.target.value);
  };

  return (
    <div>
      <h1 onClick={() => navigate("/jotai")}>Zustand</h1>
      <input
        value={taskName}
        type="text"
        className="task-name-input"
        name="taskName"
        onChange={handleInputChange}
      />
      <button type="submit" className="btn-add" onClick={addTask}>
        +
      </button>

      <ul>
        {tasks.map((task) => (
          <li key={JSON.stringify(task)}>{task.name}</li>
        ))}
      </ul>
    </div>
  );
};
