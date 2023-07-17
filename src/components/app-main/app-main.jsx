import React from 'react'
import BurgerConstructor from '../burger-constructor/burger-constructor'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import styles from './main.module.css'
import {ingredientPropType} from "../../utils/prop-types";
import PropTypes from "prop-types";

function AppMain({ingredients, setIsOpen, setIsClickIngridient, setIsClickOrderList, setItem}) {

    return (
        <div className={styles.main}>
            <BurgerIngredients setIsOpen = {setIsOpen} ingredients = {ingredients} setIsClickIngridient={setIsClickIngridient} setItem={setItem}/>
            <BurgerConstructor setIsOpen = {setIsOpen} ingredients = {ingredients} setIsClickOrderList={setIsClickOrderList}/>
        </div>
    )
}

BurgerIngredients.propTypes = {
    ingredients: PropTypes.arrayOf(ingredientPropType).isRequired
};

BurgerConstructor.propTypes = {
    ingredients: PropTypes.arrayOf(ingredientPropType).isRequired
};

export default AppMain