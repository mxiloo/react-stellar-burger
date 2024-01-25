import { createReducer } from '@reduxjs/toolkit'
import { wsOpen, wsClose, wsMessage, wsError, wsConnecting } from "../actions/order-feed-action";
import { IOrders, LiveOrder, WebsocketStatus } from '../../types/types';

export type LiveOrderStore = {
    status: WebsocketStatus,
    connectionError: string,
    orderFeed: LiveOrder
}

const initialState: LiveOrderStore = {
    status: WebsocketStatus.OFFLINE,
    connectionError: '',
    orderFeed: null,
};

export const orderFeedSlice = createReducer(initialState, (builder) => {
    builder
        .addCase(wsConnecting, (state) => {
            state.status = WebsocketStatus.CONNECTING;
        })
        .addCase(wsOpen, (state) => {
            state.status = WebsocketStatus.ONLINE;
            state.connectionError = '';
        })
        .addCase(wsClose, (state) => {
            state.status = WebsocketStatus.OFFLINE;
        })
        .addCase(wsError, (state, action) => {
            state.connectionError = action.payload;
        })
        .addCase(wsMessage, (state, action) => {
            state.orderFeed =  action.payload
        })
})
