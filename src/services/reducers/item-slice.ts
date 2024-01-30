import {createSlice} from "@reduxjs/toolkit";

export const initialState = {
    item: null,
}


const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        setItem: (state, action) => {
            state.item = action.payload
        }
    }
})

export const { setItem } = itemSlice.actions;

export default itemSlice.reducer;