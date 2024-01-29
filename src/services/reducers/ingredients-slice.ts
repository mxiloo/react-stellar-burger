import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchIngredients} from "../actions/ingredients-api";
import {TIngredients} from "../../types/types";

type TIngredientsSlice = {
    data: TIngredients[],
    error: string | unknown,
    isLoading: boolean,
    count: number,
}

export const initialState: TIngredientsSlice = {
    data: [],
    error: '',
    isLoading: false,
    count: 0
}

const ingredientsSlice = createSlice({
    name: 'ingredient',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchIngredients.fulfilled.type]: (state, action: PayloadAction<TIngredients[]>) => {
            state.isLoading = false;
            state.error = '';
            state.data = action.payload;
        },
        [fetchIngredients.pending.type]: (state) => {
            state.isLoading = true;
            state.error = '';
        },
        [fetchIngredients.rejected.type]: (state, action: PayloadAction<string | unknown>) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        counter: (state, action: PayloadAction<number>) => {
            state.count = action.payload
        }
    }
})

export default ingredientsSlice.reducer;
