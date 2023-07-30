import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    number: ''
};

export const orderNumberSlice = createSlice({
    name: 'orderNumber',
    initialState,
    reducers: {
        addNumber: (state, action) => {
            state.number = action.payload
        }
    }
});

export const {addNumber} = orderNumberSlice.actions;
export default orderNumberSlice.reducer;