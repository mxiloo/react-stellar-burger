import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type TNum = {
    orderFeedNumber: number | undefined | JSX.Element
}

const initialState: TNum = {
    orderFeedNumber: 0,
}

const orderFeedNumberSlice = createSlice({
    name: 'orderFeedNumber',
    initialState,
    reducers: {
        setOrderNumber: (state, action: PayloadAction<number | undefined>) => {
            state.orderFeedNumber = action.payload
        }
    }
})

export const {
    setOrderNumber
} = orderFeedNumberSlice.actions

export default orderFeedNumberSlice.reducer;