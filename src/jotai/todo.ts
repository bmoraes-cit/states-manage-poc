import { atom } from "jotai";

export type Todo = {
  title: string;
  completed: boolean;
};

export const todosAtom = atom<Todo[]>([]);

export type TodosActions =
  | { type: "add"; payload: string }
  | { type: "remove"; payload: Todo };

export const manageTodosAtom = atom(
  (get) => get(todosAtom),
  (get, set, action: TodosActions) => {
    const typesActions = {
      add: (payload: string) => {
        const newTodoAtom = {
          title: payload,
          completed: false,
        };
        set(todosAtom, [...get(todosAtom), newTodoAtom]);
      },
      remove: (payload: Todo) => {
        set(
          todosAtom,
          get(todosAtom).filter((todoAtom) => todoAtom !== payload)
        );
      },
    };
    
    typesActions[action.type](action.payload);
  }
);
