import {RootState} from "../store";

export const userSelector = (store: RootState) => store.user.user;

export const draggedElementsSelector = (store: RootState) => store.burger.ingredients;

export const draggedBunSelector = (store: RootState) => store.burger.bun;

export const isClickOrderListSelector = (store: RootState) => store.modal.clickOrder;
export const isClickOrderFeedSelector = (store: RootState) => store.modal.clickOrderFeed;

export const ingredientsSelector = (store: RootState) => store.ingredients.data;

export const orderNumSelector = (store: RootState) => store.orderNumber.number;

export const isAuthCheckedSelector = (store: RootState) => store.user.isAuthChecked;

export const isLoadingSelector = (store: RootState) => store.preloaderSlice.isLoading

export const orderFeedNumberSelector = (store: RootState) => store.orderFeedNumber.orderFeedNumber