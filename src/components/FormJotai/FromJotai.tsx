import React from "react";
import { useAtom } from "jotai";
import { addTaskAtom, taskNameAtom } from "../../jotai/todo";
import { useNavigate } from "react-router-dom";
import { theme } from "../../jotai/theme";
import { count2Atom, countAtom, decCount2Atom, decCountAtom, incCount2Atom, incCountAtom } from "../../jotai/counters";

export const FormJotai: React.FC = () => {
  const [appTheme, setAppTheme] = useAtom(theme);
  const [taskName, setTaskName] = useAtom(taskNameAtom);
  const [tasks, addTask] = useAtom(addTaskAtom);
  const [fooCount] = useAtom(countAtom);
  const [, incFoo] = useAtom(incCountAtom);
  const [, decFoo] = useAtom(decCountAtom);
  const [barCount] = useAtom(count2Atom);
  const [, incBar] = useAtom(incCount2Atom);
  const [, decBar] = useAtom(decCount2Atom);
  const navigate = useNavigate();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskName(e.target.value);
  };
  const handleClick = () => setAppTheme(!appTheme);
  const handleIncrease1 = () => incFoo();
  const handleDecrease1 = () => decFoo();
  const handleIncrease2 = () => incBar();
  const handleDecrease2 = () => decBar();

  return (
    <div className={appTheme ? 'dark' : 'light'}>
      <h1 onClick={() => navigate("/")}>JOTAI</h1>
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
        <span>{fooCount}</span>
        <button onClick={handleIncrease1}>increment</button>
        <button onClick={handleDecrease1}>decrement</button>
      </div>
      <div>
        <span>{barCount}</span>
        <button onClick={handleIncrease2}>increment</button>
        <button onClick={handleDecrease2}>decrement</button>
      </div>
    </div>
  );
};
