import {initialState, setItem} from './item-slice';
import itemReducer from './item-slice';

export const ingredient = {
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
    }

describe('item test', () => {
    test('item', () => {
        expect(itemReducer(initialState, setItem(ingredient))).toEqual({
            ...initialState,
            item: ingredient
        })
    })
})