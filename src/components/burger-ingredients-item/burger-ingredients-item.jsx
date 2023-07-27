import React, {useState} from 'react';
import {CurrencyIcon, Counter} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './item.module.css'
import {useDispatch} from "react-redux";
import {isOpenModal, isClickIngredient} from "../../services/reducers/modal-slice";
import {useDrag} from "react-dnd";

function Item ({item, setItem}) {
    const dispatch = useDispatch();
    const onClick = () => {
        dispatch(isOpenModal(true))
        dispatch(isClickIngredient(true))
        setItem(item)
    };

    const [, dragRef] = useDrag({
        type: 'ingredientItem',
        item: item
    });

    return (
        <button onClick={onClick} type={"button"} className={styles.button}>
            <>
            <div className={'counter' > 0 ? styles.counterVisible : styles.counter}>
                <Counter count={1} size="default" extraClass="m-1" />
            </div>
            <div className={styles.item} ref={dragRef}>
                <img src={item.image} alt={item.name}/>
                <div className={styles.container}>
                    <span className="text text_type_digits-default">{item.price}</span>
                    <CurrencyIcon type="primary"/>
                </div>
                <span className={styles.name + " text text_type_main-default"}>{item.name}</span>
            </div>
            </>
        </button>
    )
}

export default Item;
