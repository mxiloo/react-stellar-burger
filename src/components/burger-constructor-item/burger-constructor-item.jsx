import {ConstructorElement, Button, CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from "../burger-constructor/constructor.module.css";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchIngredients} from "../../services/actions/ingredients-api";
import {useDrag, useDrop} from "react-dnd";
import {changeIngredients} from "../../services/reducers/burgerSlice";

const ConstrElement = ({item, setItem, index}) => {
    setItem(item)

    const burgerArray = useSelector(store => store.burger.ingredients);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchIngredients())
    }, [])


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
        hover({ingredient}) {
            console.log(ingredient._constId === item._constId)
            if (ingredient._constId === item._constId) return

            dispatch(changeIngredients({
                indexForm: findIndex(ingredient),
                indexTo: index,
                ingredient: ingredient,
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
            />
        </div>
    )
}

export default ConstrElement