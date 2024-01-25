import {createAsyncThunk} from "@reduxjs/toolkit";
import {addNumber} from "../reducers/order-number";
import {BASE_URL} from "../../utils/api";
import {setIsLoading} from "../reducers/preloader-slice";


const checkResponse = (res: Response) => {

    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
}

let token = localStorage.getItem("accessToken") as string

export const setOrder = createAsyncThunk<void, string[]>(
    'order/post',
    async (dataId, {dispatch}) => {

        console.log(dataId)

        const res = await fetch(`${BASE_URL}/orders`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                authorization: token
            },
            body: JSON.stringify({
                'ingredients': dataId
            }),
        })
        const number = await checkResponse(res).then(res => res.order.number)
        dispatch(addNumber(number))
    }
)


