import {createAsyncThunk} from "@reduxjs/toolkit";
import {addNumber} from "../reducers/order-number";
import {BASE_URL} from "../../utils/api";
import {checkResponse} from "../../utils/api";

export const setOrder = createAsyncThunk<void, string[]>(
    'order/post',
    async (dataId, {dispatch}) => {

        // console.log(dataId)

        const res = await fetch(`${BASE_URL}/orders`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                authorization: localStorage.getItem("accessToken") as string
            },
            body: JSON.stringify({
                'ingredients': dataId
            }),
        })
        const number = await checkResponse(res).then(res => res.order.number)
        dispatch(addNumber(number))
    }
)


