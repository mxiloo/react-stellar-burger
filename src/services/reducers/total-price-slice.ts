import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type TTotal = {
    priceTotal: string | unknown
}

const initialState: TTotal = {
    priceTotal: ''
};

export const totalPriceSlice = createSlice({
    name: 'orderNumber',
    initialState,
    reducers: {
        totalPrice: (state, action: PayloadAction<string | unknown>) => {
            state.priceTotal = action.payload
        }
    }
});

export const {totalPrice} = totalPriceSlice.actions;
export default totalPriceSlice.reducer;