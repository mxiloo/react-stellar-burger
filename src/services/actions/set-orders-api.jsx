import {createAsyncThunk} from "@reduxjs/toolkit";
import {responseStatus} from "./ingredients-api";

export const setOrder = createAsyncThunk(
    'order/post',
    async (_, thunkApi) => {
        try {
            const res = await fetch('https://norma.nomoreparties.space/api/orders', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ingredients: ["609646e4dc916e00276b286e","609646e4dc916e00276b2870"]
                }),
            })
            responseStatus(res)
        } catch (err) {
            return thunkApi.rejectWithValue('Произошла ошибка')
        }
    }
)

