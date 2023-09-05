import { atom } from "jotai"

const createCountIncDecAtoms = (initialValue: number) => {
    const baseAtom = atom(initialValue);
    const valueAtom = atom((get) => get(baseAtom));
    const incAtom = atom(null, (get, set) => set(baseAtom, (c: number) => c + 1));
    const decAtom = atom(null, (get, set) => set(baseAtom, (c: number) => c - 1));
    return [valueAtom, incAtom, decAtom];
}

export const [countAtom, incCountAtom, decCountAtom] = createCountIncDecAtoms(0);
export const [count2Atom, incCount2Atom, decCount2Atom] = createCountIncDecAtoms(0);