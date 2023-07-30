import React, {useMemo} from 'react';
import {CurrencyIcon, Counter} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './item.module.css'
import {useDispatch, useSelector} from "react-redux";
import {isOpenModal, isClickIngredient} from "../../services/reducers/modal-slice";
import {useDrag} from "react-dnd";

function Item ({item, setItem, setIsModalOpen}) {

    const draggedElements = useSelector(store => store.burger.ingredients);
    const draggedBuns = useSelector(store => store.burger.bun)

    const counter = useMemo(() => {
        return item.type === 'bun'
            ? draggedBuns.filter(element => element._id === item._id).length * 2
            : draggedElements.filter(element  => element._id === item._id).length
    }, [draggedBuns, draggedElements])


    const dispatch = useDispatch();
    const onClick = () => {
        /*dispatch(isItem(item))*/
        dispatch(isOpenModal(true))
        dispatch(isClickIngredient(true))
        setItem(item)
        setIsModalOpen(true)
    };

    const [, dragRef] = useDrag({
        type: 'ingredientItem',
        item: item
    });

    return (
        <button onClick={onClick} type={"button"} className={styles.button}>
            {counter > 0 && <Counter count={counter} size='default' />}
            <div className={styles.item} ref={dragRef}>

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
