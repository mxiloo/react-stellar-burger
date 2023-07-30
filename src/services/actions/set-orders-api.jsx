import {createAsyncThunk} from "@reduxjs/toolkit";
import {addNumber} from "../reducers/order-number";

export const responseStatus = (res) => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
}

export const setOrder = createAsyncThunk(
    'order/post',
    async (dataId, {dispatch,thunkApi}) => {
        try {
            console.log(dataId)
            const res = await fetch('https://norma.nomoreparties.space/api/orders', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    'ingredients': dataId
                }),
            })
            const number = await responseStatus(res).then(res => res.order.number)
            dispatch(addNumber(number))
        } catch (err) {
            return thunkApi.rejectWithValue('Произошла ошибка')
        }
    }
)

