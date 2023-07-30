import React from 'react';
import styles from './modal-second-children.module.css'
import {useSelector} from "react-redux";


function OrderDetails () {

    const orderNum = useSelector(store => store.orderNumber.number)

    return (
        <div className={styles.OrderSection}>
            <span className={styles.number + " text text_type_digits-large"}>
                {orderNum}
            </span>
            <p className={styles.numberName + " text text_type_main-medium"}>идентификатор заказа</p>
            <div className={styles.img}></div>
            <div className={styles.container}>
                <p className="text text_type_main-small">Ваш заказ начали готовить</p>
                <p className="text text_type_main-default text_color_inactive">Дождитесь готовности на орбитальной станции</p>
            </div>

        </div>
    )
}

export default OrderDetails