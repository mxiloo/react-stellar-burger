import React from 'react';
import {useParams} from 'react-router-dom';
import IngredientDetails from "../../components/ingredient-details/ingredient-details";
import {ingredientsSelector} from "../../services/selectors/selectors";
import {TIngredients, useAppSelector} from "../../types/types";


function IngredientDetailPage() {

    const {id} = useParams();
    const ingredients = useAppSelector(ingredientsSelector);
    const el: TIngredients | undefined = ingredients.find((item) => item._id === id);

    return <IngredientDetails el={el} />

}

export default IngredientDetailPage