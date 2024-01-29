import { setAuthChecked, setUser } from "../reducers/user-slice";
import {BASE_URL} from "../../utils/api";
import {checkResponse} from "../../utils/api";
import {store} from "../store";


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

const fetchWithRefresh = async (url: string, options: any) => {
    try {
        const res = await fetch(url, options);
        return await checkResponse(res);
    } catch (err: string | unknown) {
        if ((err as Error).message === "jwt expired") {
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
export const login = (email: string, password: string) => {
    return (dispatch: typeof store.dispatch) => {
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
export const registerUser = (name: string, email: string, password: string) => {
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
    return (dispatch: typeof store.dispatch) => {
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
    return (dispatch: typeof store.dispatch) => {
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
export const forgotPassword = (email: string) => {
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
export const resetPassword = (password: string, token: string) => {
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
export const changeDataUser = (name: string | undefined, email: string | undefined) => {
    return (dispatch: typeof store.dispatch) => {
        return fetch(`${BASE_URL}/auth/user`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                authorization: localStorage.getItem('accessToken') as string
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



