import {combineReducers} from "redux";
import modalReducer from "./modal-slice";
import ingredientsReducer from "./ingredients-slice";
import orderReducer from "./order-slice";
import burgerReducer from "./burgerSlice";
import orderNumberReducer from "./order-number";
import totalPriceReducer from "./total-price-slice";
import userReducer from "./user-slice";
import itemReducer from "./item-slice";
import { orderFeedSlice } from "./orderFeed-slice";
import preloaderReducer from "./preloader-slice";
import orderFeedNumberReducer from "./order-feed-number-slice";


const rootSlice = combineReducers({
    modal: modalReducer,
    ingredients: ingredientsReducer,
    order: orderReducer,
    burger: burgerReducer,
    orderNumber: orderNumberReducer,
    total: totalPriceReducer,
    user: userReducer,
    item: itemReducer,
    orderSlice: orderFeedSlice,
    preloaderSlice: preloaderReducer,
    orderFeedNumber: orderFeedNumberReducer,
})

export default rootSlice