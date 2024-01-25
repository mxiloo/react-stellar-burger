import React, { FC, useEffect } from 'react';
import styles from './order-feed-page.module.css';
import {useParams} from 'react-router-dom';
import {TIngredients, useAppDispatch, useAppSelector} from '../../types/types';
import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import {ingredientsSelector} from "../../services/selectors/selectors";
import {v4 as uuidv4} from "uuid";
import {setOrderNumber} from "../../services/reducers/order-feed-number-slice";
import Preloader from "../../components/preloader/preloader";
import {connect, disconnect} from "../../services/actions/order-feed-action";
import {SERVER_URL} from "../order-feed/order-feed";

const OrderFeedPage: FC = () => {

    const {id} = useParams();

    const dispatch = useAppDispatch()

    const { orderFeed } = useAppSelector(state => state.orderSlice);

    const order = orderFeed?.orders?.find((order) => order._id === id);

    const ingredients = useAppSelector(ingredientsSelector);

    useEffect(() => {
        dispatch(connect(SERVER_URL))
        return () => { dispatch(disconnect()); }
    }, [])

    useEffect(() => {
        dispatch(setOrderNumber(order?.number))
    }, [id]);

    let ingredientsOrder = order?.ingredients?.map((element: string) =>
        ingredients.find((item) => item._id === element) as TIngredients
    )

    console.log(ingredientsOrder)


    const initValue = 0;
    const sum = ingredientsOrder?.reduce(
        (sum, ingredient) => sum + ingredient.price * (ingredient.type === "bun" ? 2 : 1), initValue
    );

    if (!ingredientsOrder) {
        return <Preloader />;
    }

    return (

        <div className={styles.section}>

            <div className={styles.content}>
                <p className={styles.number + " text text_type_digits-default"}>#{order?.number}</p>

                <p className={styles.name + " text text_type_main-medium"}>{order?.name}</p>

                <p className={styles.status + " text text_type_main-default"}>
                    {order?.status === 'done' ? "Выполнен" : "В работе"}
                </p>

                <p className={styles.ingredients + " text text_type_main-medium"}>Состав:</p>

                <div className={styles.ingredientBox + ' custom-scroll'}>
                    {ingredientsOrder.map((element) => (
                        <div key={uuidv4()} className={styles.ingredient}>
                            <div className={styles.leftSide}>
                                <img src={element?.image} alt={element?.name} className={styles.img} />
                                <p className={styles.nameIngredient + " text text_type_main-default"}>{element?.name}</p>
                            </div>

                            <p className={styles.priceIngredient + " text text_type_digits-default"}>
                                {element?.type === 'bun' ? `2 x ${element?.price}` : `1 x ${element?.price}`}
                                <CurrencyIcon type="primary" />
                            </p>
                        </div>

                    ))}

                </div>

                <div className={styles.bottomBox}>
                    <p className={styles.date + " text text_type_main-default"}>
                        <FormattedDate date={order?.createdAt ? new Date(order.createdAt) : new Date()} />
                    </p>
                    <p className={styles.price + ' text text_type_digits-default'}>
                        {sum}
                        <CurrencyIcon type="primary"/>
                    </p>
                </div>
            </div>

        </div>

    )
}

export default OrderFeedPage