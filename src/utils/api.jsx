import {setOrder} from "../services/actions/set-orders-api";

export const BASE_URL = 'https://norma.nomoreparties.space/api'

export const checkResponse = (res) => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
}

function request(endpoint, options) {
    return fetch(`${BASE_URL}${endpoint}`, options).then(checkResponse)
}

/*export const makeOrder = (dataId) => {
    return request(`/orders`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            'ingredients': dataId
        }).then(res => res.order.number)
    })
}*/

export const getIngredients = () => request(`/ingredients`).then(base => base.data)






