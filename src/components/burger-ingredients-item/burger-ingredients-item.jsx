import React from 'react';
import {CurrencyIcon, Counter} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './item.module.css'


function Item({item, setIsOpen, setIsClickIngridient, setItem}) {

    const onClick = () => {
        setIsOpen(true)
        setIsClickIngridient(true)
        setItem(item)
    }

    return (
        <button onClick={onClick} type={"button"} className={styles.button}>

            <div className={styles.item}>
                <img src={item.image} alt={item.name}/>
                <div className={styles.container}>
                    <span className="text text_type_digits-default">{item.price}</span>
                    <CurrencyIcon type="primary"/>
                </div>
                <span className={styles.name + " text text_type_main-default"}>{item.name}</span>
            </div>
        </button>
    )
}

export default Item;
