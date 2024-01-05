import React from 'react'
import {ConstructorElement, Button, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './constructor.module.css'
import {useDispatch, useSelector} from "react-redux";
import {isOpenModal, isClickOrder} from "../../services/reducers/modal-slice";

import {setOrder} from "../../services/actions/set-orders-api";
import {useDrop} from "react-dnd";

import {addBun, addIngredient} from "../../services/reducers/burgerSlice";
import {v4 as uuidv4} from "uuid";
import ConstrElement from "../burger-constructor-item/burger-constructor-item";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {TIngredients, TUser} from "../../types/types";
import {
    draggedBunSelector,
    draggedElementsSelector,
    userSelector
} from "../../services/selectors/selectors";

const BurgerConstructor = () => {

    const dispatch = useDispatch()

    const location = useLocation()

    const navigate = useNavigate()

    const user = useSelector(userSelector) as TUser

    const draggedElements = useSelector(draggedElementsSelector) as TIngredients[]

    const draggedBun = useSelector(draggedBunSelector) as TIngredients[]

    let dataId: string[] = [...draggedElements.map(element => element._id), ...draggedBun.map(element => element._id)]

    const [, dropRef] = useDrop<TIngredients, unknown, unknown>({
        accept: "ingredientItem",
        drop(ingredients) {
            const newElement = {...ingredients, _constId: uuidv4()};
            ingredients.type === 'bun' ? dispatch(addBun(newElement)) : (dispatch(addIngredient(newElement)))
        },
    });

    const onClick = () => {
        if (user !== null) {
            dispatch(isOpenModal(true));
            dispatch(isClickOrder(true));
            dispatch(setOrder(dataId));
        } else {
            navigate('/login')
        }
    }

    return (
        <div className={styles.sectionConstructor} ref={dropRef}>
            <div className={styles.bunStyle}>
                <div className={styles.bun}>
                    {draggedBun.map(item => {
                        if (item.type === 'bun') {
                            return (
                                <div className={styles.topping} key={item._constId}>
                                    <ConstructorElement
                                        type="top"
                                        isLocked={true}
                                        text={draggedBun[0].name + ' (верх)'}
                                        price={draggedBun[0].price}
                                        thumbnail={draggedBun[0].image}
                                        key={draggedBun[0]._constId}
                                    />
                                </div>
                            )
                        }
                    })}
                </div>

                <div className={styles.toppingSection + ' custom-scroll'}>
                    {draggedElements.map((element, index) => {
                        if (element.type !== 'bun') {
                            return (
                                <ConstrElement item={element} index={index} key={element._constId}/>
                            )
                        }
                    })}
                </div>

                <div className={styles.bun}>
                    {draggedBun.map(item => {
                        if (item.type === 'bun') {
                            return (
                                <div className={styles.topping} key={item._constId}>
                                    <ConstructorElement
                                        type="bottom"
                                        isLocked={true}
                                        text={draggedBun[0].name + ' (низ)'}
                                        price={draggedBun[0].price}
                                        thumbnail={draggedBun[0].image}
                                        key={draggedBun[0]._constId}
                                    />
                                </div>
                            )
                        }
                    })}
                </div>
            </div>

            <div className={styles.block}>
                <div className={styles.countBlock}>
                    <span className="text text_type_digits-medium">
                       {draggedElements.reduce(function (acc, data) {
                               return acc + data.price;
                           }, 0)
                           + (2 * draggedBun.reduce(function (acc, data) {
                               return acc + data.price;
                           }, 0))}
                    </span>
                    <CurrencyIcon type="primary"/>
                </div>
                <div className={styles.button}>
                    <Button htmlType="submit" type="primary" size="large" onClick={onClick}>
                        <NavLink to='/order' state={{background: location}} className={styles.link}>

                            Оформить заказ

                        </NavLink>
                    </Button>

                </div>
            </div>

        </div>

    )
}


export default BurgerConstructor