import { StateCreator } from "zustand";

export interface CounterSlice {
    count: number;
    increaseCounter: () => void;
    decreaseCounter: () => void;
}

export const createCounterSlice: StateCreator<CounterSlice> = (set) => ({
    count: 0,
    increaseCounter: () => set((state) => ({ count: state.count + 1 })),
    decreaseCounter: () => set((state) => ({ count: state.count - 1 })),
});