import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
    clickIngredient: false,
    clickOrder: false,
    item: {}
}


const modalSlice = createSlice({
    name: 'ingredients',
    initialState,
    reducers: {
        isOpenModal: (state, action) => {
            state.isOpen = action.payload
        },
        isClickIngredient: (state, action) => {
            state.clickIngredient = action.payload
        },
        isClickOrder: (state, action) => {
            state.clickOrder = action.payload
        },
        isItem: (state, action) => {
            state.item = action.payload
        }
    }
})

export const {
    isOpenModal,
    isClickIngredient,
    isClickOrder,
    isItem
} = modalSlice.actions

export default modalSlice.reducer;