import { configureStore } from "@reduxjs/toolkit";
import {connect, disconnect, wsClose, wsConnecting, wsError, wsMessage, wsOpen} from "./actions/order-feed-action";
import {socketMiddleware} from "./middleware/middleware";
import rootSlice from "./reducers/root-slice";

const wsActions = {
    wsConnect: connect,
    wsDisconnect: disconnect,
    wsConnecting: wsConnecting ,
    onOpen: wsOpen,
    onClose: wsClose,
    onError: wsError,
    onMessage: wsMessage,
};

const liveOrderMiddleware = socketMiddleware(wsActions)

export type RootState = ReturnType<typeof rootSlice>;

export const store = configureStore({
    reducer: rootSlice,

    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(liveOrderMiddleware)
    }
});