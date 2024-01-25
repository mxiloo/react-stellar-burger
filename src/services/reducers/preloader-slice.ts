import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type TLoader = {
    isLoading: boolean
}

const initialState: TLoader = {
    isLoading: false,
}

const preloaderSlice = createSlice({
    name: 'preloader',
    initialState,
    reducers: {
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        }
    }
})

export const {
    setIsLoading
} = preloaderSlice.actions

export default preloaderSlice.reducer;