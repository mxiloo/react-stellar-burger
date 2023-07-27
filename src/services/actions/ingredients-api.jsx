import {createAsyncThunk} from "@reduxjs/toolkit";

export const responseStatus = (res) => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
}

export const fetchIngredients = createAsyncThunk(
    'items/get',
    async (_, thunkApi) => {
        try {
            const res = await fetch('https://norma.nomoreparties.space/api/ingredients');
            const base = await res.json();
            return base.data
        } catch (err) {
            return thunkApi.rejectWithValue('Произошла ошибка')
        }
    }
)




