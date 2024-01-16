import { create, } from 'zustand'
import { devtools, persist, createJSONStorage } from 'zustand/middleware'
import { AppSettingsSlice, createUserSlice, createAppSettingsSlice, UserSlice } from './slices'
import AsyncStorage from '@react-native-async-storage/async-storage';


export type StoreSlices = UserSlice & AppSettingsSlice

export const useStore = create<StoreSlices>()(
    devtools(
        persist(
            (...a) => ({
                ...createUserSlice(...a),
                ...createAppSettingsSlice(...a),
            }),
            { name: 'moonpay-currencies', storage: createJSONStorage(() => AsyncStorage) },
        ),
    ),
)