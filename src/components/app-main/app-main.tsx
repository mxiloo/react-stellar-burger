import React from 'react'
import BurgerConstructor from '../burger-constructor/burger-constructor'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import styles from './main.module.css'

function AppMain() {

    return (
        <div className={styles.main}>
            <BurgerIngredients  />
            <BurgerConstructor />
        </div>
    )
}

export default AppMain