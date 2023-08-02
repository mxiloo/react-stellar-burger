import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    priceTotal: ''
};

export const totalPriceSlice = createSlice({
    name: 'orderNumber',
    initialState,
    reducers: {
        totalPrice: (state, action) => {
            state.priceTotal = action.payload
        }
    }
});

export const {totalPrice} = totalPriceSlice.actions;
export default totalPriceSlice.reducer;