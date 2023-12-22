import React from 'react';
import styles from './ingredient-details.module.css';
import PropTypes from "prop-types";
import {ingredientPropType} from "../../utils/prop-types";


function IngredientDetails ({el}) {

    return (
            <div>
                <div className={styles.container}>

                    <img src={el?.image_large} alt={el?.name} className='mb-4'/>
                    <p className="text text_type_main-medium mb-8">{el?.name}</p>
                    <ul className={styles.text}>
                        <li className="text text_type_main-default text_color_inactive">Калории,ккал
                            <p className={styles.number + " text text_type_digits-default"}>{el?.calories}</p>
                        </li>

                        <li className="text text_type_main-default text_color_inactive">Белки, г
                            <p className={styles.number + " text text_type_digits-default"}>{el?.proteins}</p>
                        </li>

                        <li className="text text_type_main-default text_color_inactive">Жиры, г
                            <p className={styles.number + " text text_type_digits-default"}>{el?.fat}</p>
                        </li>

                        <li className="text text_type_main-default text_color_inactive">Углеводы, г
                            <p className={styles.number + " text text_type_digits-default"}>{el?.carbohydrates}</p>
                        </li>
                    </ul>
                </div>
            </div>
    )
}

IngredientDetails.propTypes = {
    el: PropTypes.shape({
        _id: PropTypes.string,
        // определите здесь другие ожидаемые свойства
    }),
};

export default IngredientDetails