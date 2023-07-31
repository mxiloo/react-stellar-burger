import React from 'react';
import styles from './ingredient-details.module.css';
import PropTypes from "prop-types";
import {ingredientPropType} from "../../utils/prop-types";
export const modalHeader = <h2 className="text text_type_main-large">Детали ингредиента</h2>

function IngredientDetails ({item}) {
    return (
            <div>
                <div className={styles.container}>
                    <h2 className={styles.header + " text text_type_main-large"}>Детали ингредиента</h2>
                    <img src={item.image_large} alt={item.name} className='mb-4'/>
                    <p className="text text_type_main-medium mb-8">{item.name}</p>
                    <ul className={styles.text}>
                        <li className="text text_type_main-default text_color_inactive">Калории,ккал
                            <p className={styles.number + " text text_type_digits-default"}>{item.calories}</p>
                        </li>

                        <li className="text text_type_main-default text_color_inactive">Белки, г
                            <p className={styles.number + " text text_type_digits-default"}>{item.proteins}</p>
                        </li>

                        <li className="text text_type_main-default text_color_inactive">Жиры, г
                            <p className={styles.number + " text text_type_digits-default"}>{item.fat}</p>
                        </li>

                        <li className="text text_type_main-default text_color_inactive">Углеводы, г
                            <p className={styles.number + " text text_type_digits-default"}>{item.carbohydrates}</p>
                        </li>
                    </ul>
                </div>
            </div>
    )
}

IngredientDetails.prototype = {
    item: ingredientPropType
}

export default IngredientDetails