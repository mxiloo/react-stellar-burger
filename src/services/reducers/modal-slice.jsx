import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
    clickIngredient: false,
    clickOrder: false,
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
        closeModal: (state, action) => {
            state.isOpen = action.payload
            state.clickIngredient = action.payload
            state.clickOrder = action.payload
        }
    }
})

export const {
    isOpenModal,
    isClickIngredient,
    isClickOrder,
    closeModal
} = modalSlice.actions

export default modalSlice.reducer;