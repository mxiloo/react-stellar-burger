
export const BASE_URL: string = 'https://norma.nomoreparties.space/api';

export const checkResponse = (res: Response) => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
}

function request(endpoint: string, options: RequestInit) {
    return fetch(`${BASE_URL}${endpoint}`, options).then(checkResponse)
}

export const getIngredients = () => request(`/ingredients`, { method: 'GET' }).then(base => base.data)





