import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    bun: [],
    ingredients: [],
}



export const burgerSlice = createSlice({
    name: 'burger',
    initialState,

    reducers: {
        addIngredient: (store, action) => {
            store.ingredients.push(action.payload)
        },
        addBun: (store, action) => {
            store.bun = [action.payload];
            // console.log(action.payload)
        },
        changeIngredients: (store, action) => {
            const {indexForm, indexTo} = action.payload;
            store.ingredients.splice(
                indexTo,
                0,
                store.ingredients.splice(indexForm,1)[0]
            )
        },
        deleteIngredient: (state, action) => {
            state.ingredients = [...state.ingredients.filter((item) => item._constId !== action.payload)];
        },
    }
})

export const {addIngredient, changeIngredients, addBun, deleteIngredient} = burgerSlice.actions;
export default burgerSlice.reducer