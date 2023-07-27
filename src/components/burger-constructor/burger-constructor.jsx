import React, {useCallback, useEffect, useState} from 'react'
import {ConstructorElement, Button, CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './constructor.module.css'
import {useDispatch, useSelector} from "react-redux";
import {isOpenModal, isClickOrder} from "../../services/reducers/modal-slice";
import {fetchIngredients} from "../../services/actions/ingredients-api";
import {setOrder} from "../../services/actions/set-orders-api";
import {useDrop} from "react-dnd";
import {store} from "../../services/store";
import {addIngredient} from "../../services/reducers/burgerSlice";
import { v4 as uuidv4 } from "uuid";
import ConstrElement from "../burger-constructor-item/burger-constructor-item";

const BurgerConstructor = ({setItem}) => {
    const dispatch = useDispatch()

    const draggedElements = useSelector(store => store.burger.ingredients);
    const ingredients = useSelector(store => store.ingredients.data)

    const [, dropRef] = useDrop({
        accept: "ingredientItem",
        drop(ingredients) {
            const newElement = {...ingredients, _constId: uuidv4()}
            dispatch(addIngredient(newElement))
            /*setTimeout(() => console.log(draggedElements), 1000)*/
        },
    });

    const onClick = () => {
        dispatch(isOpenModal(true));
        dispatch(isClickOrder(true));
        dispatch(setOrder())
    }

    return (
        <div className={styles.sectionConstructor} ref={dropRef}>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <>
                    <div className={styles.bun}>
                        {ingredients.map(item => {
                            if (item.type === 'bun') {
                                return (
                                    <div className={styles.topping} >
                                        <ConstructorElement
                                            type="top"
                                            isLocked={true}
                                            text={item.name}
                                            price={item.price}
                                            thumbnail={item.image}
                                            key={item._id}
                                        />
                                    </div>
                                )
                            }
                        })}

                    </div>

                    <div className={styles.toppingSection + ' custom-scroll'} >
                        {draggedElements.map((element, index) => {
                            if (element.type !== 'bun') {
                                return (
                                    <div>
                                        {/*<DragIcon type="primary" />*/}
                                        <ConstrElement setItem={setItem} item={element} index={index} key={element._constId}/>
                                            {/*<ConstructorElement
                                                text={element.name}
                                                price={element.price}
                                                thumbnail={element.image}
                                                key={element._constId}
                                            />*/}

                                    </div>
                                )
                            }
                        })}
                    </div>

                    <div className={styles.bun}>
                        <ConstructorElement
                            type="bottom"
                            isLocked={true}
                            text="Краторная булка N-200i (низ)"
                            price={200}
                            thumbnail={"https://code.s3.yandex.net/react/code/bun-02-mobile.png"}
                        />
                    </div>
                </>
            </div>

            <div className={styles.block}>
                <div className={styles.countBlock}>
                    <p className="text text_type_digits-medium">
                       610
                    </p>
                    <CurrencyIcon type="primary" />
                </div>
                <div className={styles.button}>
                    <Button onClick={onClick} htmlType="submit" type="primary" size="large">
                        Оформить заказ
                    </Button>
                </div>
            </div>

        </div>

    )
}


export default BurgerConstructor