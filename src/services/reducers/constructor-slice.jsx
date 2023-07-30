/*
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    draggedBuns: [],
    draggedIngredients: [],
};

export const burgerConstructorSlice = createSlice({
    name: "constructorIngredients",
    initialState,

    reducers: {
        addBun: (state, action) => {
            state.draggedBuns = [action.payload];
        },

        addIngredient: (state, action) => {
            state.draggedIngredients = [...state.draggedIngredients, action.payload];
        },

        deleteIngredient: (state, action) => {
            state.draggedIngredients = [
                ...state.draggedIngredients.filter((item) => item._constId !== action.payload)];
        },
    },

});

export const { addBun, addIngredient, deleteIngredient } =
    burgerConstructorSlice.actions;
export default burgerConstructorSlice.reducer*/
