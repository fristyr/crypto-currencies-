import { StateCreator } from "zustand"
import { StoreSlices } from "../../store"

export interface AppSettingsSlice {
    fishes: number
    addFish: () => void
}

export const createAppSettingsSlice: StateCreator<
    StoreSlices,
    [],
    [],
    AppSettingsSlice
> = (set) => ({
    fishes: 0,
    addFish: () => set((state) => ({ fishes: state.fishes + 1 })),
})