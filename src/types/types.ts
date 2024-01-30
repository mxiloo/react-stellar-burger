import {RootState, store} from '../services/store'
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export type TUser = {
    email: string,
    name: string
};

export type TIngredients = {
    calories: number,
    carbohydrates: number,
    fat: number,
    image: string,
    image_large: string,
    image_mobile: string,
    name: string,
    price: number,
    proteins: number,
    type: string,
    _constId: string,
    __v: number,
    _id: string,

};

export type TBun = TIngredients;

export type TBurger = {
    bun: TBun[],
    ingredients: TIngredients[]
};

export type TIngredientsArray = [TIngredients];

export type TIsAuthChecked = {
    isAuthChecked: boolean
};

export enum WebsocketStatus {
    CONNECTING = 'CONNECTING...',
    ONLINE = 'ONLINE',
    OFFLINE = 'OFFLINE'
}
export interface INumberOfIngredients {
    ingredients: string
}
export interface IOrders {
    ingredients: string[],
    _id: string,
    status: string,
    number: number,
    createdAt: string,
    updatedAt: string,
    name: string
}
export interface OrderRow {
    success: boolean,
    orders: IOrders[]
    total: number,
    totalToday: number
}

export type LiveOrder = OrderRow | null;