import { configureStore } from "@reduxjs/toolkit";
import modalReducer from './reducers/modal-slice';
import ingredientsReducer from './reducers/ingredients-slice';
import orderReducer from './reducers/order-slice';
import constructorReducer from './reducers/constructor-slice';
import burgerReducer from './reducers/burgerSlice';
import orderNumberReducer from './reducers/order-number';
import totalPriceReducer from './reducers/total-price-slice';
import userReducer from './reducers/user-slice';
import itemReducer from "./reducers/item-slice";

export const store = configureStore({
    reducer: {
        modal: modalReducer,
        ingredients: ingredientsReducer,
        order: orderReducer,
        constructorIng: constructorReducer,
        burger: burgerReducer,
        orderNumber: orderNumberReducer,
        total: totalPriceReducer,
        user: userReducer,
        item: itemReducer,
    },
});