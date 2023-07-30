import React, {useState} from 'react'
import BurgerConstructor from '../burger-constructor/burger-constructor'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import styles from './main.module.css'
import {ingredientPropType} from "../../utils/prop-types";
import PropTypes from "prop-types";
import {useDrag} from "react-dnd";


function AppMain({setItem, setIsModalOpen}) {

    return (
        <main className={styles.main}>
            <BurgerIngredients setItem={setItem} setIsModalOpen={setIsModalOpen}/>
            <BurgerConstructor setIsModalOpen={setIsModalOpen}/>
        </main>
    )
}

export default AppMain