import burgerReducer, { initialState, addBun, addIngredient } from "./burgerSlice";

describe('burgerReducer', () => {
    it("test initialState", () => {
        expect(burgerReducer(undefined, {type: "SOME_TYPE"})).toEqual(initialState)
    });

    it("test addBun", () => {
        const payload = [
            {
                _id: "643d69a5c3f7b9001cfa093c",
                name: "Краторная булка N-200i",
                type: "bun",
                proteins: 80,
                fat: 142,
                carbohydrates: 53,
                calories: 420,
                price: 1255,
                image: "https://code.s3.yandex.net/react/code/bun-02.png",
                image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
                image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
                __v: 0,
                _constId: "e1cf775e-7226-4639-80ed-c8ea266b608d"
            },
        ];
        expect(burgerReducer(initialState, addBun(payload[0]))).toEqual({
            ...initialState,
            bun: payload
        })
    });


    it("test addIngredient", () => {
        const payload = [
            {
                _id: "643d69a5c3f7b9001cfa0941",
                name: "Биокотлета из марсианской Магнолии",
                type: "main",
                proteins: 420,
                fat: 142,
                carbohydrates: 242,
                calories: 4242,
                price: 424,
                image: "https://code.s3.yandex.net/react/code/meat-01.png",
                image_mobile: "https://code.s3.yandex.net/react/code/meat-01-mobile.png",
                image_large: "https://code.s3.yandex.net/react/code/meat-01-large.png",
                __v: 0,
                _constId: "494876cf-8e29-4d81-9f29-117d90ed40be"
            },
        ];
        expect(burgerReducer(initialState, addIngredient(payload[0]))).toEqual({
            ...initialState,
            ingredients: payload
        })
    });
})