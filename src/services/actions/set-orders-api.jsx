import {createAsyncThunk} from "@reduxjs/toolkit";
import {addNumber} from "../reducers/order-number";
import {BASE_URL} from "./ingredients-api";

export const checkResponse = (res) => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
}

export const setOrder = createAsyncThunk(
    'order/post',
    async (dataId, {dispatch}) => {
            /*console.log(dataId)*/
            const res = await fetch(`${BASE_URL}/orders`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    'ingredients': dataId
                }),
            })
            const number = await checkResponse(res).then(res => res.order.number)
            dispatch(addNumber(number))
    }
)

