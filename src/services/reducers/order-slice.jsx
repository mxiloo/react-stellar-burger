import { createSlice } from "@reduxjs/toolkit";
import { setOrder } from "../actions/set-orders-api";

const initialState = {
    data: [],
    error: '',
    isLoading: false,
}

const orderSlice = createSlice({
    name: 'order',
    initialState,
    extraReducers: {
        [setOrder.fulfilled.type]: (state, action) => {
            state.isLoading = false;
            state.error = '';
        },
        [setOrder.pending.type]: (state) => {
            state.isLoading = true;
            state.error = '';
        },

        [setOrder.rejected.type]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export default orderSlice.reducer;