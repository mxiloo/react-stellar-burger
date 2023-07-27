import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    bun: null,
    ingredients: [],
}

export const burgerSlice = createSlice({
    name: 'burger',
    initialState,
    reducers: {
        addIngredient: (store, action) => {
            store.ingredients.push(action.payload)
        },
        changeIngredients: (store, action) => {
            const {indexForm, indexTo, ingredient} = action.payload;
            store.ingredients.slice(indexForm, 1);
            store.ingredients.slice(indexTo, 0, ingredient);
        }
    }
})

export const {addIngredient, changeIngredients} = burgerSlice.actions;
export default burgerSlice.reducer