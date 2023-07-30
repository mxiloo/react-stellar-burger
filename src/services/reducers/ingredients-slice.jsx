import { createSlice } from "@reduxjs/toolkit";
import {fetchIngredients} from "../actions/ingredients-api";

const initialState = {
    data: [],
    error: '',
    isLoading: false,
    count: 0
}

const ingredientsSlice = createSlice({
    name: 'ingredient',
    initialState,
    extraReducers: {
        [fetchIngredients.fulfilled.type]: (state, action) => {
            state.isLoading = false;
            state.error = '';
            state.data = action.payload;
        },
        [fetchIngredients.pending.type]: (state) => {
            state.isLoading = true;
            state.error = '';
        },
        [fetchIngredients.rejected.type]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        counter: (state, action) => {
            state.count = action.payload
        }
    }
})

export const {ingredientsUpload, ingredientsUploadError, ingredientsUploading, counter} = ingredientsSlice.actions;
export default ingredientsSlice.reducer;
