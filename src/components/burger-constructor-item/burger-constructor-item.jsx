import {ConstructorElement, Button, CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from "../burger-constructor/constructor.module.css";
import React, {useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useDrag, useDrop} from "react-dnd";
import {changeIngredients, deleteIngredient} from "../../services/reducers/burgerSlice";

const ConstrElement = ({item, index}) => {

    const burgerArray = useSelector(store => store.burger.ingredients);

    const dispatch = useDispatch();

    // Удаление ингредиента
    const deleteElement = useCallback((_constId) => {
        dispatch(deleteIngredient(_constId))
    })

    const findIndex = (item) => {
        return burgerArray.indexOf(item)
    }

    const [{isDragging}, dragRef] = useDrag({
        type: 'constructorItem',
        item: {ingredient: item},
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    });



    const [, dropRef] = useDrop({
        accept: 'constructorItem',
        drop: ({ingredient}) => {
            if (ingredient._constId === item._constId) return
            dispatch(changeIngredients({
                indexForm: findIndex(ingredient),
                indexTo: index,
            }))
        }
    })
    return (
        <div className={styles.topping + isDragging ? " dragging" : " "} ref={node => dropRef(dragRef(node))}>
            <DragIcon type="primary"/>
            <ConstructorElement
                text={item.name}
                price={item.price}
                thumbnail={item.image}
                key={item._id}
                handleClose={() => deleteElement(item._constId)}
            />
        </div>
    )
}

export default ConstrElement