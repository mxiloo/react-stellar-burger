import modalReducer from './modal-slice';
import {initialState, isOpenModal, isClickIngredient, isClickOrder, isClickOrderFeed, closeModal} from './modal-slice';

const state = true

describe('test modal', () => {
    it('modal open test', () => {
        expect(modalReducer(initialState, isOpenModal(state))).toEqual({
            ...initialState,
            isOpen: state
        })
    })
    it('isClickIngredient test', () => {
        expect(modalReducer(initialState, isClickIngredient(state))).toEqual({
            ...initialState,
            clickIngredient: state
        })
    })
    it('isClickOrder test', () => {
        expect(modalReducer(initialState, isClickOrder(state))).toEqual({
            ...initialState,
            clickOrder: state
        })
    })
    it('isClickOrderFeed test', () => {
        expect(modalReducer(initialState, isClickOrderFeed(state))).toEqual({
            ...initialState,
            clickOrder: state
        })
    })
    it('close modal test', () => {
        expect(modalReducer(initialState, closeModal(state))).toEqual({
            ...initialState,
            isOpen: state,
            clickIngredient: state,
            clickOrder: state,
            clickOrderFeed: state,
        })
    })
})