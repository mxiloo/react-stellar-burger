import { createSlice } from "@reduxjs/toolkit";
import {fetchIngredients} from "../actions/ingredients-api";

const initialState = {
    data: [],
    error: '',
    isLoading: false,
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
        }
    }
})

export const {ingredientsUpload, ingredientsUploadError, ingredientsUploading} = ingredientsSlice.actions;
export default ingredientsSlice.reducer;
