import { initialState } from './ingredients-slice'
import ingredientsReducer from './ingredients-slice'

export const ingredientsArray = [
    {
        "calories": 643,
        "carbohydrates": 85,
        "fat": 26,
        "image": "https://code.s3.yandex.net/react/code/bun-01.png",
        "image_large": "https://code.s3.yandex.net/react/code/bun-01-large.png",
        "image_mobile": "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
        "name": "Флюоресцентная булка R2-D3",
        "price": 988,
        "proteins": 44,
        "type": "bun",
        "__v": 0,
        "_constId": "c9d99bf6-759b-48d9-936d-1d894685f75e",
        "_id": "643d69a5c3f7b9001cfa093d",
    },
    {
        "_id": "643d69a5c3f7b9001cfa0943",
        "name": "Соус фирменный Space Sauce",
        "type": "sauce",
        "proteins": 50,
        "fat": 22,
        "carbohydrates": 11,
        "calories": 14,
        "price": 80,
        "image": "https://code.s3.yandex.net/react/code/sauce-04.png",
        "image_mobile": "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
        "image_large": "https://code.s3.yandex.net/react/code/sauce-04-large.png",
        "__v": 0
    },
    {
        "_id": "643d69a5c3f7b9001cfa093f",
        "name": "Мясо бессмертных моллюсков Protostomia",
        "type": "main",
        "proteins": 433,
        "fat": 244,
        "carbohydrates": 33,
        "calories": 420,
        "price": 1337,
        "image": "https://code.s3.yandex.net/react/code/meat-02.png",
        "image_mobile": "https://code.s3.yandex.net/react/code/meat-02-mobile.png",
        "image_large": "https://code.s3.yandex.net/react/code/meat-02-large.png",
        "__v": 0
    }]


describe('Запрос ингредиентов', () => {

    test('post test', () => {
        expect(ingredientsReducer(initialState, { type: "items/get/pending" })).toEqual({
            data: [],
            isLoading: true,
            error: '',
            count: 0,
        })
    })
    test('get test', () => {
        expect(ingredientsReducer(initialState, ({ type: 'items/get/fulfilled', payload: ingredientsArray }))).toEqual({
            data: ingredientsArray,
            isLoading: false,
            error: '',
            count: 0,
        })
    })
    test('error test', () => {
        expect(ingredientsReducer(initialState, ({ type: "items/get/rejected", payload: "error" }))).toEqual({
            data: [],
            isLoading: false,
            error: "error",
            count: 0
        })
    })
})