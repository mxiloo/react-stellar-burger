import {ConstructorElement, Button, CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from "../burger-constructor/constructor.module.css";
import React, {useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useDrag, useDrop} from "react-dnd";
import {changeIngredients, deleteIngredient} from "../../services/reducers/burgerSlice";
import {draggedElementsSelector} from "../../services/selectors/selectors";
import {TIngredients, TIngredientsArray} from "../../types/types";

type TConstrElement = {
    item: TIngredients,
    index: number,
}

type TDragItem = {
    ingredient: TIngredients
};

type TCollectedProps = {
    isDragging: boolean
};

const ConstrElement = ({item, index}: TConstrElement) => {

    const burgerArray = useSelector(draggedElementsSelector) as TIngredientsArray

    const dispatch = useDispatch();

    // Удаление ингредиента
    const deleteElement = useCallback((_constId) => {
        dispatch(deleteIngredient(_constId))
        console.log(_constId)
    }, [])

    const findIndex = (item: TIngredients) => {
        return burgerArray.indexOf(item)
    }

    const [{isDragging}, dragRef] = useDrag<TDragItem, unknown, TCollectedProps>({
        type: 'constructorItem',
        item: {ingredient: item},
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    });

    const [, dropRef] = useDrop<TDragItem, unknown, unknown>({
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