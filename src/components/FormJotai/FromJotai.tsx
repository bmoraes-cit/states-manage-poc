import React from "react";
import { useAtom } from "jotai";
import { addTaskAtom, taskNameAtom } from "../../jotai/todo";
import { useNavigate } from "react-router-dom";
export const FormJotai: React.FC = () => {
  const [taskName, setTaskName] = useAtom(taskNameAtom);
  const navigate = useNavigate();
  const [tasks, addTask] = useAtom(addTaskAtom);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskName(e.target.value);
  };
  return (
    <div>
      <h1 onClick={() => navigate("/")}>JOTAI</h1>
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
