import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type TOrderNumber = {
    number: string | unknown
}

const initialState: TOrderNumber = {
    number: ''
};

export const orderNumberSlice = createSlice({
    name: 'orderNumber',
    initialState,
    reducers: {
        addNumber: (state, action: PayloadAction<number | unknown>) => {
            state.number = action.payload
        }
    }
});

export const {addNumber} = orderNumberSlice.actions;
export default orderNumberSlice.reducer;