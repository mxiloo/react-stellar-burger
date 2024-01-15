import React from 'react';
import styles from './order-feed.module.css'
import {useEffect} from "react";

import {useAppSelector, useAppDispatch, IOrders} from "../../types/types";
import {connect, disconnect} from "../../services/actions/order-feed-action";
import {Link, useLocation} from "react-router-dom";
import OrderFeedBox from "../../components/order-feed-box/order-feed-box";

export const SERVER_URL = 'wss://norma.nomoreparties.space/orders/all';

function OrderFeed() {

    const dispatch = useAppDispatch()

    const location = useLocation();

    const { orderFeed } = useAppSelector(state => state.orderSlice);
    // console.log(orderFeed)
    const numbersRedyOrder = orderFeed?.orders.filter((el) => el.status === "done")

    const numbersInWorkOrder = orderFeed?.orders.filter((el) => el.status === "pending")

    useEffect(() => {
        dispatch(connect(SERVER_URL))
        return () => { dispatch(disconnect()); }
    }, [])

    return (
        <section className={styles.section}>
            <h2 className={styles.h2 + ` text text_type_main-large mt-20 mb-5`}>Лента заказов</h2>
            <div className={styles.content}>
                <div className={styles.ordersBox}>
                    <div className={styles.orders + " burger-ingredients_ingredientsMain__-O+1A custom-scroll"}>
                        {orderFeed?.orders.slice(0, 10).map((order: IOrders) => (
                            <Link to={`/orderFeed/${order._id}`} key={order._id} className={styles.link} state={{background : location}}>
                                <OrderFeedBox order={order} />
                            </Link>
                        ))}
                    </div>
                </div>

                <div className={styles.leftSide}>
                    <div className={styles.topBox}>
                        <div className={styles.done}>
                            <p className="text text_type_main-medium">Готовы:</p>

                            <div className={styles.doneBox}>
                                {numbersRedyOrder?.slice(0, 5).map((el, index) => (
                                    <div className="text text_type_digits-default" key={index}>{el.number}</div>
                                ))}
                            </div>
                        </div>

                        <div className={styles.inWork}>
                            <p className="text text_type_main-medium">В работе:</p>

                            <div className={styles.inWorkOrders}>
                                {numbersInWorkOrder?.map((el, index) => (
                                    <div className="text text_type_digits-default" key={index}>{el.number}</div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div>
                        <p className="text text_type_main-medium">Выполнено за все время:</p>
                        <p className="text text_type_digits-large">{orderFeed?.total}</p>
                    </div>

                    <div>
                        <p className="text text_type_main-medium">Выполнено за сегодня:</p>
                        <p className="text text_type_digits-large">{orderFeed?.totalToday}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OrderFeed