import {initialState, setAuthChecked, setUser} from './user-slice';
import userReducer from './user-slice';

const state = {email: 'testik222@mail.ru', name: 'testik222'}

describe('test user', () => {
    test('user data', () => {
        expect(userReducer(undefined, setUser(null))).toEqual({
            user: null,
            isAuthChecked: false
        })
    })

    test('user data add', () => {
        expect(userReducer(initialState, setUser(state))).toEqual({
            user: state,
            isAuthChecked: false
        })
    })

    test('set auth', () => {
        expect(userReducer(initialState, (setAuthChecked(true)))).toEqual({
            user: null,
            isAuthChecked: true
        })
    })
})