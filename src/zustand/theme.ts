import { StateCreator } from "zustand";

export interface ThemeSlice {
    theme: boolean;
    switchTheme: () => void;
}

export const createThemeSlice: StateCreator<ThemeSlice> = (set) => ({
    theme: false,
    switchTheme: () => set((state) => ({ theme: !state.theme })),
});
