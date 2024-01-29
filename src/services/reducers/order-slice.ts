import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {setOrder} from "../actions/set-orders-api";
import {TIngredients} from "../../types/types";

type TOrderSlice = {
    data: TIngredients[],
    error: string | unknown,
    isLoading: boolean,
    number: string | unknown,
}

export const initialState: TOrderSlice = {
    data: [],
    error: '',
    isLoading: false,
    number: ''
}

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {},
    extraReducers: {
        [setOrder.fulfilled.type]: (state) => {
            state.isLoading = false;
            state.error = '';
        },
        [setOrder.pending.type]: (state) => {
            state.isLoading = true;
            state.error = '';
        },

        [setOrder.rejected.type]: (state, action: PayloadAction<string | unknown>) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export default orderSlice.reducer;