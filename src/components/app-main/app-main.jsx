import React, {useState} from 'react'
import BurgerConstructor from '../burger-constructor/burger-constructor'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import styles from './main.module.css'
import {ingredientPropType} from "../../utils/prop-types";
import PropTypes from "prop-types";
import {useDrag} from "react-dnd";


function AppMain({setItem}) {

    return (
        <main className={styles.main}>
            <BurgerIngredients setItem={setItem}/>
            <BurgerConstructor />
        </main>
    )
}

export default AppMain