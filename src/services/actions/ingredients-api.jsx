import {createAsyncThunk} from "@reduxjs/toolkit";
import {checkResponse} from "./set-orders-api";

export const BASE_URL = 'https://norma.nomoreparties.space/api'

export const fetchIngredients = createAsyncThunk(
    'items/get',
    async (_, thunkApi) => {
            const res = await fetch(`${BASE_URL}/ingredients`);
            const base = await res.json();
            return base.data;
            return checkResponse(res)
    }
)




