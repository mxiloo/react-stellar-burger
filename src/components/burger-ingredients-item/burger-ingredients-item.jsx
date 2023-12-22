import React, {useMemo} from 'react';
import {CurrencyIcon, Counter} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './item.module.css'
import {useDispatch, useSelector} from "react-redux";
import {isOpenModal, isClickIngredient} from "../../services/reducers/modal-slice";
import {useDrag} from "react-dnd";
import PropTypes from "prop-types";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import {ingredientPropType} from "../../utils/prop-types";
import {Link, useLocation} from "react-router-dom";

function Item ({item, setItem}) {

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
    };

    const [, dragRef] = useDrag({
        type: 'ingredientItem',
        item: item
    });

    const location = useLocation();
    /*<Link to={{pathname:`/ingredient-details/${item._id}`, state:{background : location}}} className={styles.link}>*/
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

Item.propTypes = {
    item: PropTypes.object.isRequired,
    setItem: PropTypes.func.isRequired
}

export default Item;
