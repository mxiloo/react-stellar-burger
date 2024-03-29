import React from 'react';
import styles from './order-details.module.css'
import {useSelector} from "react-redux";
import {orderNumSelector, isLoadingSelector} from "../../services/selectors/selectors";
import Preloader from "../preloader/preloader";
import {useAppSelector} from "../../types/types";

function OrderDetails() {

    const orderNum: string | unknown = useSelector(orderNumSelector);

    const isLoading = useAppSelector(isLoadingSelector);

    return (


        <div className={styles.OrderSection}>
            <span className={styles.number + " text text_type_digits-large"}>
                {orderNum}
            </span>
            <p className={styles.numberName + " text text_type_main-medium"}>идентификатор заказа</p>
            {isLoading ?
                <div>
                    <Preloader/>
                </div> :
                <div className={styles.img}></div>
            }
            <div className={styles.container}>
                <p className="text text_type_main-small">Ваш заказ начали готовить</p>
                <p className="text text_type_main-default text_color_inactive">Дождитесь готовности на орбитальной
                    станции</p>
            </div>
        </div>


    )
}

export default OrderDetails