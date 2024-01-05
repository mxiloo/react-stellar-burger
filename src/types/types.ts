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
    _constId: number,
    __v: number,
    _id: string,
    unicId: string,
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
