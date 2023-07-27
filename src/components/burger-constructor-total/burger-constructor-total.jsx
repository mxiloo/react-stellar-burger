
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchIngredients} from "../../services/actions/ingredients-api";
import {isClickOrder, isOpenModal} from "../../services/reducers/modal-slice";
import {setOrder} from "../../services/actions/set-orders-api";
import styles from "../burger-constructor/constructor.module.css";
import {Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";


const TotalPrice = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchIngredients())
    }, [])

    const {draggedBuns, draggedIngredients} = useSelector(store => store.constructorIng)
    const onClick = () => {
        dispatch(isOpenModal(true));
        dispatch(isClickOrder(true));
        dispatch(setOrder([...draggedBuns, ...draggedIngredients]))
    }
    return (
        <div className={styles.block}>
            <div className={styles.countBlock}>
                <span className="text text_type_digits-medium">
                    {
                        draggedIngredients.reduce(function (acc, data) { return acc + data.price; }, 0)
                        +
                        (2 * draggedBuns.reduce(function (acc, data) { return acc + data.price; }, 0))
                    }
                </span>
                <CurrencyIcon type="primary" />
            </div>
            <div className={styles.button}>
                <Button onClick={onClick} htmlType="submit" type="primary" size="large">
                    Оформить заказ
                </Button>
            </div>
        </div>
    )
}

export default TotalPrice


