import { configureStore } from "@reduxjs/toolkit";
import modalReducer from './reducers/modal-slice';
import ingredientsReducer from './reducers/ingredients-slice';
import orderReducer from './reducers/order-slice';
import constructorReducer from './reducers/constructor-slice';
import burgerReducer from './reducers/burgerSlice';

export const store = configureStore({
    reducer: {
        modal: modalReducer,
        ingredients: ingredientsReducer,
        order: orderReducer,
        constructorIng: constructorReducer,
        burger: burgerReducer,
    },
});