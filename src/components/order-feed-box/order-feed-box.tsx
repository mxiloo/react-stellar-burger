import React from 'react'
import styles from './order-feed-box.module.css'
import { IOrders, TIngredients, useAppSelector } from '../../types/types'
import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components'
import {ingredientsSelector} from "../../services/selectors/selectors";

interface IOrderCard {
    order: IOrders
}

function OrderFeedCard(order: IOrderCard) {

    // console.log(order)

    const ingredients = useAppSelector(ingredientsSelector);

    let orderIng = order.order.ingredients.map((id) =>
        ingredients.find((item) => item._id === id) as TIngredients
    );

    const initValue = 0;
    const sum = orderIng.reduce(
        (sum, ingredient) => sum + ingredient.price * (ingredient.type === "bun" ? 2 : 1), initValue
    );

    return (

        <div className={styles.container}>

            <div className={styles.topBox}>
                <p className="text text_type_digits-default">
                    #{order.order.number}
                </p>

                <p className={styles.date + " text text_type_main-default"}>
                    <FormattedDate date={new Date(order.order.createdAt)} />
                </p>
            </div>

            <p className="text text_type_main-medium">
                {order.order.name}
            </p>

            <div className={styles.bottomContainer}>

                <div className={styles.images}>
                    {orderIng.slice(0, 5).map((element, index) => (
                        <div className={styles.imagesContainer} key={index}
                             style={{zIndex: orderIng.length - index}}>
                            <img className={styles.ingredient} src={element?.image} alt={element?.image} />
                        </div>
                    ))}

                    {orderIng.slice(6, 7).map((element, index) => (
                        <div className={styles.imagesContainerCount} key={index}>
                            <img className={styles.ingredientCount} src={element?.image} alt={element?.image} />
                            <p className={styles.count + " text text_type_digits-default"}>+{orderIng.length - 5}</p>
                        </div>
                    ))}
                </div>

                <div className={styles.sumBox}>
                    <div className='text text_type_digits-default'>
                        {sum}
                    </div>

                    <CurrencyIcon type="primary" />

                </div>


            </div>

        </div>
    )
}

export default OrderFeedCard