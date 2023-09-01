import { atom } from "jotai";

export const taskNameAtom = atom("");

interface TaskProps {
  name: string;
  status: boolean;
}

export const tasksAtom = atom<TaskProps[]>([]);

export const addTaskAtom = atom(
  (get) => get(tasksAtom),
  (get, set) => {
    const name = get(taskNameAtom);
    const tasks = get(tasksAtom);
    set(taskNameAtom, "");
    set(tasksAtom, [...tasks, { name: name, status: false }]);
  }
);
