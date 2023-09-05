import React from "react";
import { useTodoStore } from "../../zustand/todo";
import { useNavigate } from "react-router-dom";
import { ThemeSlice, createThemeSlice } from "../../zustand/theme";
import { CounterSlice, createCounterSlice } from "../../zustand/counters";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useBoundStore = create<ThemeSlice & CounterSlice>()(persist((...a) => ({
  ...createThemeSlice(...a),
  ...createCounterSlice(...a),
}), { name: "themecounter" }));

export const FormZustand: React.FC = () => {
  const { changeTaskName, addTask, tasks, taskName } = useTodoStore();
  const navigate = useNavigate();
  const appTheme = useBoundStore((state) => state.theme);
  const switchTheme = useBoundStore((state) => state.switchTheme);
  const count = useBoundStore((state) => state.count);
  const increaseCounter = useBoundStore((state) => state.increaseCounter);
  const decreaseCounter = useBoundStore((state) => state.decreaseCounter);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeTaskName(e.target.value);
  };
  const handleClick = () => switchTheme();
  const handleIncrease = () => increaseCounter();
  const handleDecrease = () => decreaseCounter();

  return (
    <div className={appTheme ? 'dark' : 'light'}>
      <h1 onClick={() => navigate("/jotai")}>Zustand</h1>
      <input
        value={taskName}
        type="text"
        className="task-name-input"
        name="taskName"
        onChange={handleInputChange}
      />
      <button type="submit" className={(appTheme ? 'dark' : 'light') + " btn-add"} onClick={addTask}>
        +
      </button>

      <ul>
        {tasks.map((task) => (
          <li key={JSON.stringify(task)}>{task.name}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Change Theme</button>
      <div>
        <span>{count}</span>
        <button onClick={handleIncrease}>increment</button>
        <button onClick={handleDecrease}>decrement</button>
      </div>
    </div>
  );
};
