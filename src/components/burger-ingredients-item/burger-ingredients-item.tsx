import React, {useMemo} from 'react';
import {CurrencyIcon, Counter} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './item.module.css'
import {useDispatch, useSelector} from "react-redux";
import {isOpenModal, isClickIngredient} from "../../services/reducers/modal-slice";
import {useDrag} from "react-dnd";
import {Link, useLocation} from "react-router-dom";
import {setItem} from "../../services/reducers/item-slice";
import {TIngredients} from "../../types/types";
import {draggedBunSelector, draggedElementsSelector} from "../../services/selectors/selectors";

function Item ({item}: {item: TIngredients}) {

    const draggedElements = useSelector(draggedElementsSelector) as TIngredients[];
    const draggedBuns = useSelector(draggedBunSelector) as TIngredients[];

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
        dispatch(setItem(item))
    };

    const [, dragRef] = useDrag({
        type: 'ingredientItem',
        item: item
    });

    const location = useLocation();
    return (
        <Link to={`/ingredient-details/${item._id}`} className={styles.link} state={{background : location}}>
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
        </Link>
    )
}

export default Item;
