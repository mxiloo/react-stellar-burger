import { setAuthChecked, setUser } from "../reducers/user-slice";
import {BASE_URL} from "../../utils/api";

const checkResponse = (res) => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
}

// Обновление токена
export const refreshToken = () => {
    return fetch(`${BASE_URL}/auth/token`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            token: localStorage.getItem('refreshToken')
        })
    }).then(checkResponse)
}

const fetchWithRefresh = async (url, options) => {
    try {
        const res = await fetch(url, options);
        return await checkResponse(res);
    } catch (err) {
        if (err.message === "jwt expired") {
            const refreshData = await refreshToken();
            if (!refreshData.success) {
                return Promise.reject(refreshData);
            }
            localStorage.setItem("accessToken", refreshData.accessToken);
            localStorage.setItem("refreshToken", refreshData.refreshToken);
            options.headers.authorization = refreshData.accessToken;
            const res = await fetch(url, options);
            return await checkResponse(res);
        } else {
            return Promise.reject(err);
        }
    }
};

// Вход
export const login = (email, password) => {
    return (dispatch) => {
        return fetch(`${BASE_URL}/auth/login`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
            .then(checkResponse)
            .then((res) => {
                if (res.success) {
                    localStorage.setItem("accessToken", res.accessToken);
                    localStorage.setItem("refreshToken", res.refreshToken);
                    dispatch(setUser(res.user));
                } else {
                    return Promise.reject("Ошибка данных с сервера");
                }
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                dispatch(setAuthChecked(true));
            });
    };
};

// Регистрация пользователя
export const registerUser = (name, email, password) => {
    return () => {
        return fetch(`${BASE_URL}/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",

            },
            body: JSON.stringify({
                'email': `${email}`,
                'password': `${password}`,
                'name': `${name}`
            })
        })
            .then(checkResponse)
            .then((res) => {
                if (res.success) {
                    localStorage.setItem("accessToken", res.accessToken);
                    localStorage.setItem("refreshToken", res.refreshToken);
                    return res;
                } else {
                    return Promise.reject("Ошибка данных с сервера");
                }
            })
            .catch((err) => {
                console.log(err);
            })

            .finally(() => {
                console.log('все норм')
            })
    }
}

// Получение пользователя
export const getUser = () => {
    return (dispatch) => {
        return fetchWithRefresh(`${BASE_URL}/auth/user`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                authorization: localStorage.getItem("accessToken")
            }
        }).then((res) => {
            if (res.success) {
                dispatch(setUser(res.user));
            } else {
                return Promise.reject("Ошибка данных с сервера");
            }
        });
    };
};

// Проверка на наличие пользователя
export const checkUserAuth = () => {
    return (dispatch) => {
        if (localStorage.getItem("accessToken")) {
            dispatch(getUser())
                .catch((error) => {
                    localStorage.removeItem("accessToken");
                    localStorage.removeItem("refreshToken");
                    dispatch(setUser(null));
                })
                .finally(() => dispatch(setAuthChecked(true)));
        } else {
            dispatch(setAuthChecked(true));
            dispatch(setUser(null));
        }
    };
};

// Выход с аккаунта
export const logOut = () => {
    return () => {
        return fetch(`${BASE_URL}/auth/logout`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "token": localStorage.getItem("refreshToken")
            })
        })
            .then(checkResponse)
            .then((res) => {
                localStorage.removeItem("accessToken");
                localStorage.removeItem("refreshToken");
                return res;
            })
    }
}

// Забыли пароль
export const forgotPassword = (email) => {
    return () => {
        return fetch(`${BASE_URL}/password-reset`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "email": email
            })
        })
            .then(checkResponse)
    }
}

// Смена пароля
export const resetPassword = (password, token) => {
    return () => {
        return fetch(`${BASE_URL}/password-reset/reset`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "password": password,
                "token": token
            })
        })
            .then(checkResponse)
    }
}

// Изменение данных в профиле
export const changeDataUser = (name, email) => {
    return (dispatch) => {
        return fetch(`${BASE_URL}/auth/user`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                authorization: localStorage.getItem('accessToken')
            },
            body: JSON.stringify({
                "name": name,
                "email": email
            })
        })
            .then(checkResponse)
            .then((res) => {
                dispatch(setUser(res.user))
            })
    }
}



