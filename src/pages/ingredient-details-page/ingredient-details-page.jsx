import React from 'react';
import {useParams} from 'react-router-dom';
import IngredientDetails from "../../components/ingredient-details/ingredient-details";
import PropTypes from "prop-types";
import {useSelector} from "react-redux";


function IngredientDetailPage() {

    const {id} = useParams();
    console.log(useParams())
    const ingredients = useSelector(store => store.ingredients.data);
    /*console.log(ingredients)*/
    const el = ingredients.find((item) => item._id === id);
    return <IngredientDetails el={el} />

}

IngredientDetailPage.propTypes = {
    el: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string,
    })),
};

export default IngredientDetailPage