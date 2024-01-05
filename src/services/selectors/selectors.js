export const userSelector = (store) => store.user.user;

export const draggedElementsSelector = (store) => store.burger.ingredients;

export const draggedBunSelector = (store) => store.burger.bun;

export const isClickOrderListSelector = (store) => store.modal.clickOrder;

export const ingredientsSelector = (store) => store.ingredients.data;

export const orderNumSelector = (store) => store.orderNumber.number;

export const isAuthCheckedSelector = (store) => store.user.isAuthChecked;