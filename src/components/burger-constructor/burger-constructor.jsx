import React from 'react'
import {ConstructorElement, Button, CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './constructor.module.css'
import {element} from "prop-types";

const BurgerConstructor = (props) => {
    const {ingredients, setIsOpen, setIsClickOrderList} = props

    const onClick = () => {
        setIsOpen(true)
        setIsClickOrderList(true)
    }

    return (
        <div className={styles.sectionConstructor}>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <>
                    <div className={styles.bun}>
                        <ConstructorElement
                            type="top"
                            isLocked={true}
                            text="Краторная булка N-200i (верх)"
                            price={200}
                            thumbnail={"https://code.s3.yandex.net/react/code/bun-02-mobile.png"}
                        />
                    </div>
                    <div className={styles.toppingSection + ' custom-scroll'}>
                        {ingredients.map(element => (
                            <div className={styles.topping}>
                                <DragIcon type="primary" />
                                <ConstructorElement
                                    text={element.name}
                                    price={element.price}
                                    thumbnail={element.image}
                                />
                            </div>
                        ))}
                    </div>

                    <div className={styles.bun}>
                        <ConstructorElement
                            type="bottom"
                            isLocked={true}
                            text="Краторная булка N-200i (низ)"
                            price={200}
                            thumbnail={"https://code.s3.yandex.net/react/code/bun-02-mobile.png"}
                        />
                    </div>
                </>
            </div>

            <div className={styles.block}>
                <div className={styles.countBlock}>
                    <p className="text text_type_digits-medium">610</p>
                    <CurrencyIcon type="primary" />
                </div>
                <div className={styles.button}>
                    <Button onClick={onClick} htmlType="button" type="primary" size="large">
                        Оформить заказ
                    </Button>
                </div>

            </div>

        </div>

    )
}


export default BurgerConstructor