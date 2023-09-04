import React, { KeyboardEvent } from "react";
import { useAtom } from "jotai";
import { Todo, manageTodosAtom } from "../../jotai/todo";
import { useNavigate } from "react-router-dom";
export const FormJotai: React.FC = () => {
  const navigate = useNavigate();
  const [todos, action] = useAtom(manageTodosAtom);

  const remove = (todo: Todo) => action({ type: "remove", payload: todo });

  const add = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;
    const title = e.currentTarget.value;
    e.currentTarget.value = "";
    action({ type: "add", payload: title });
  };

  return (
    <div>
      <h1 onClick={() => navigate("/")}>JOTAI</h1>
      <input type="text" placeholder="Add a new todo" onKeyDown={add} />

      <ul>
        {todos.map((task) => (
          <li key={JSON.stringify(task)}>
            <div>{task.title}</div>
            <div>
              <button onClick={() => remove(task)}>X</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
