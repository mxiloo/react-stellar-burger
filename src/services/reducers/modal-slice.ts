import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type TModalSlice = {
    isOpen: boolean,
    clickIngredient: boolean,
    clickOrder: boolean,
    clickOrderFeed: boolean,
}

const initialState: TModalSlice = {
    isOpen: false,
    clickIngredient: false,
    clickOrder: false,
    clickOrderFeed: false,
}


const modalSlice = createSlice({
    name: 'ingredients',
    initialState,
    reducers: {
        isOpenModal: (state, action: PayloadAction<boolean>) => {
            state.isOpen = action.payload
        },
        isClickIngredient: (state, action: PayloadAction<boolean>) => {
            state.clickIngredient = action.payload
        },
        isClickOrder: (state, action: PayloadAction<boolean>) => {
            state.clickOrder = action.payload
        },
        isClickOrderFeed: (state, action: PayloadAction<boolean>) => {
            state.clickOrder = action.payload
            console.log(state.clickOrder)
        },

        closeModal: (state, action: PayloadAction<boolean>) => {
            state.isOpen = action.payload
            state.clickIngredient = action.payload
            state.clickOrder = action.payload
            state.clickOrderFeed = action.payload
        }
    }
})

export const {
    isOpenModal,
    isClickIngredient,
    isClickOrder,
    closeModal,
    isClickOrderFeed
} = modalSlice.actions

export default modalSlice.reducer;