import { create } from "zustand";

interface TodoStoreProps {
  taskName: string;
  tasks: { name: string; state: boolean }[];
  changeTaskName: (name: string) => void;
  addTask: () => void;
}

export const useTodoStore = create<TodoStoreProps>((set) => ({
  taskName: "",
  tasks: [],
  changeTaskName: (name: string) =>
    set((state) => ({ ...state, taskName: name })),
  addTask: () =>
    set((state) => ({
      tasks: [
        ...state.tasks,
        {
          name: state.taskName,
          state: false,
        },
      ],
      taskName: "",
    })),
}));
