import styles from "../order-feed/order-feed.module.css";
import {IOrders, useAppDispatch, useAppSelector} from "../../types/types";
import {Link, useLocation} from "react-router-dom";
import OrderFeedBox from "../../components/order-feed-box/order-feed-box";
import React, {useEffect} from "react";
import {connect, disconnect} from "../../services/actions/order-feed-action";

export const URL_USER = 'wss://norma.nomoreparties.space/orders?token=';

function ProfileOrders() {

    const dispatch = useAppDispatch();

    const location = useLocation();

    const accessToken = localStorage.getItem('accessToken');

    const token = accessToken?.substring(7, accessToken.length);

    const { orderFeed } = useAppSelector(state => state.orderSlice);


    useEffect(() => {
        dispatch(connect(`${URL_USER}${token}`))
        return () => {dispatch(disconnect())}
    }, [])

    return (
        <section>
            <div className={styles.orders + " burger-ingredients_ingredientsMain__-O+1A custom-scroll"}>
                {orderFeed?.orders?.slice().reverse().map((order: IOrders) => (
                    <Link to={`/profile/orders/${order._id}`} key={order._id} className={styles.link} state={{background : location}}>
                        <OrderFeedBox order={order} />
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default ProfileOrders