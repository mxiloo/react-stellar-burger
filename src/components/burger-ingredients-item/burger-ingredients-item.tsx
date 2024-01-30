import React, {useMemo} from 'react';
import {CurrencyIcon, Counter} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './item.module.css'
import {isOpenModal, isClickIngredient} from "../../services/reducers/modal-slice";
import {useDrag} from "react-dnd";
import {Link, useLocation} from "react-router-dom";
import {setItem} from "../../services/reducers/item-slice";
import {TIngredients, useAppDispatch, useAppSelector} from "../../types/types";
import {draggedBunSelector, draggedElementsSelector} from "../../services/selectors/selectors";

function Item ({item}: {item: TIngredients}) {

    const draggedElements = useAppSelector(draggedElementsSelector);
    const draggedBuns = useAppSelector(draggedBunSelector);

    const counter = useMemo(() => {
        return item.type === 'bun'
            ? draggedBuns.filter(element => element._id === item._id).length * 2
            : draggedElements.filter(element  => element._id === item._id).length
    }, [draggedBuns, draggedElements]);


    const dispatch = useAppDispatch();
    const onClick = () => {
        /*dispatch(isItem(item))*/
        dispatch(isOpenModal(true))
        dispatch(isClickIngredient(true))
        dispatch(setItem(item))
    };

    const [, dragRef] = useDrag({
        type: 'ingredientItem',
        item: item
    });

    const location = useLocation();

    return (
        <div className={styles.ingredientItem}>
            <Link to={`/ingredient-details/${item._id}`} className={styles.link} state={{background : location}}>
                <button onClick={onClick} type={"button"} className={styles.button}>
                    {counter > 0 && <Counter count={counter} size='default' />}
                    <div className={styles.item} ref={dragRef}>
                        <img src={item.image} alt={item.name} className={styles.itemImage}/>
                        <div className={styles.container}>
                            <span className="text text_type_digits-default">{item.price}</span>
                            <CurrencyIcon type="primary"/>
                        </div>
                        <span className={styles.name + " text text_type_main-default"}>{item.name}</span>
                    </div>
                </button>
            </Link>
        </div>
    )
}

export default Item;
