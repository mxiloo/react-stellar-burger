import React, {useEffect, useState} from "react";
import styles from './burger-ingredients.module.css';
import {Counter, Tab} from '@ya.praktikum/react-developer-burger-ui-components';
import Item from "../burger-ingredients-item/burger-ingredients-item";
import {element} from "prop-types";
import {useSelector, useDispatch} from "react-redux";
import {fetchIngredients} from "../../services/actions/ingredients-api";

const BurgerIngredients = (props) => {
    const {setItem} = props;
    const [current, setCurrent] = React.useState('one');

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchIngredients())
    }, [])

    const ingredients = useSelector(store => store.ingredients.data)

    const [counter, setCounter] = useState(0);

    const SortingArray = (type) => {
        return ingredients.filter(element => element.type === type)
    }
    return (
        <div className={styles.section}>
            <h1 className="text text_type_main-large">Соберите бургер</h1>
            <div className={styles.switch}>
                <Tab id='one' value="one" active={current === 'one'} onClick={setCurrent}>
                    <a className={styles.href} href={'#bun'}>Булки</a>
                </Tab>
                <Tab id='two' value="two" active={current === 'two'} onClick={setCurrent}>
                    <a className={styles.href} href={'#sauce'}>Соусы</a>
                </Tab>
                <Tab id='three' value="three" active={current === 'three'} onClick={setCurrent}>
                    <a className={styles.href} href={'#main'}>Начинки</a>
                </Tab>
            </div>

            <nav className={styles.ingredientsMain + ' custom-scroll'}>
                <div className={styles.container}>
                    <h2 id='bun' className="text text_type_main-medium">Булки</h2>
                    <div className={styles.items} >
                        {SortingArray('bun').map(element => (
                            <Item setItem={setItem} item={element} key={element._id} />
                        ))}
                    </div>
                </div>

                <div className={styles.container}>
                    <h2 id={'sauce'} className="text text_type_main-medium">Соусы</h2>
                    <div className={styles.items } >
                        {SortingArray('sauce').map(element => (
                            <Item setItem={setItem} item={element} key={element._id} />
                        ))}
                    </div>
                </div>

                <div className={styles.container}>
                    <h2 id={'main'} className="text text_type_main-medium">Начинки</h2>
                    <div className={styles.items} >
                        {SortingArray('main').map(element => (
                            <Item setItem={setItem} item={element} key={element._id} />
                        ))}
                    </div>
                </div>
            </nav>


        </div>
    )
}

export default BurgerIngredients
