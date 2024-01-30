import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TBun, TBurger, TIngredients} from "../../types/types";

export const initialState: TBurger = {
    bun: [],
    ingredients: [],
}

type TIndex = {
    indexForm: number,
    indexTo: number
}

export const burgerSlice = createSlice({
    name: 'burger',
    initialState,

    reducers: {
        addIngredient: (store, action: PayloadAction<TIngredients>) => {
            store.ingredients.push(action.payload)
            console.log(action.payload)
        },
        addBun: (store, action: PayloadAction<TBun>) => {
            store.bun = [action.payload];
            console.log(action.payload)
        },
        changeIngredients: (store, action: PayloadAction<TIndex>) => {
            const {indexForm, indexTo}: TIndex = action.payload;
            store.ingredients.splice(
                indexTo,
                0,
                store.ingredients.splice(indexForm,1)[0]
            )
        },
        deleteIngredient: (state, action: PayloadAction<string>) => {
            state.ingredients = [...state.ingredients.filter((item) => item._constId !== action.payload)];
        },
    }
})

export const {addIngredient, changeIngredients, addBun, deleteIngredient} = burgerSlice.actions;
export default burgerSlice.reducer