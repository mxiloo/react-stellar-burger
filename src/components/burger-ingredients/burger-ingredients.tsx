import React, {useRef} from "react";
import styles from './burger-ingredients.module.css';
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';
import Item from "../burger-ingredients-item/burger-ingredients-item";

import { useInView } from 'react-intersection-observer';
import {ingredientsSelector} from "../../services/selectors/selectors";
import {useAppSelector} from "../../types/types";

const BurgerIngredients = () => {

    const [current, setCurrent] = React.useState('one');

    const ingredients = useAppSelector(ingredientsSelector);

    const containerRef = useRef(null);
    const bunRef = useRef(null);
    const mainRef = useRef(null);
    const sauceRef = useRef(null);

    const [inViewBunRef, bunIsInView] = useInView({
        threshold: 0.1,
        root: containerRef.current
    });
    const [inViewSauceRef, sauceIsInView] = useInView({
        threshold: 0.3,
        root: containerRef.current
    });
    const [inViewMainRef, mainIsInView] = useInView({
        threshold: 0.5,
        root: containerRef.current
    });

    const sortingArray = (type: string) => {
        return ingredients.filter(element => element.type === type)
    }

    return (
        <div className={styles.section}>
            <h1 className="text text_type_main-large">Соберите бургер</h1>
            <div className={styles.switch}>
                <Tab value="one" active={bunIsInView} onClick={setCurrent}>
                    <a className={styles.href} href={'#bun'}>Булки</a>
                </Tab>
                <Tab value="two" active={sauceIsInView && !bunIsInView && !mainIsInView} onClick={setCurrent}>
                    <a className={styles.href} href={'#sauce'}>Соусы</a>
                </Tab>
                <Tab value="three" active={mainIsInView && !bunIsInView && !sauceIsInView} onClick={setCurrent}>
                    <a className={styles.href} href={'#main'}>Начинки</a>
                </Tab>
            </div>

            <nav ref={containerRef} className={styles.ingredientsMain + ' custom-scroll'}>
                <div className={styles.container} ref={bunRef}>
                    <div ref={inViewBunRef}>
                        <h2 id='bun' className="text text_type_main-medium">Булки</h2>
                        <div className={styles.items} >
                            {sortingArray('bun').map(element => (
                                <Item item={element} key={element._id} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className={styles.container} ref={sauceRef}>
                    <div ref={inViewSauceRef}>
                        <h2 id={'sauce'} className="text text_type_main-medium">Соусы</h2>
                        <div className={styles.items}>
                            {sortingArray('sauce').map(element => (
                                <Item item={element} key={element._id} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className={styles.container} ref={mainRef}>
                    <div ref={inViewMainRef}>
                        <h2 id={'main'} className="text text_type_main-medium">Начинки</h2>
                        <div className={styles.items} >
                            {sortingArray('main').map(element => (
                                <Item item={element} key={element._id} />
                            ))}
                        </div>
                    </div>
                </div>
            </nav>


        </div>
    )
}

export default BurgerIngredients
