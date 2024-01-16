import { StateCreator } from "zustand"
import { StoreSlices } from "../../store"

export interface UserSlice {
    currencySortingMethod: | "currencyName"
    | "currencySymbolOrCode"
    | "unsupportedInUs"
    | "testCurrencies"
    | "trending"
    | "shuffle"
    | "initial";
    setCurrencySortingMethod: (method: UserSlice["currencySortingMethod"]) => void;
}

export const createUserSlice: StateCreator<
    StoreSlices,
    [],
    [],
    UserSlice
> = (set) => ({
    currencySortingMethod: 'initial',
    setCurrencySortingMethod: (currencySortingMethod) => set({ currencySortingMethod })
})