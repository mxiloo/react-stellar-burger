import orderReducer from './order-slice';
import {initialState} from './order-slice';

describe('Запрос ингредиентов', () => {

    test('post test', () => {
        expect(orderReducer(initialState, { type: "order/post/pending" })).toEqual({
            data: [],
            error: '',
            isLoading: true,
            number: ''
        })
    })
    test('get test', () => {
        expect(orderReducer(initialState, ({ type: 'order/post/fulfilled'}))).toEqual({
            data: [],
            error: '',
            isLoading: false,
            number: ''
        })
    })
    test('error test', () => {
        expect(orderReducer(initialState, ({ type: "order/post/rejected" }))).toEqual({
            data: [],
            error: undefined,
            isLoading: false,
            number: ''
        })
    })
})