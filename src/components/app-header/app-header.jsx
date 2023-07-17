import React from "react";
import styles from './Header.module.css';
import {BurgerIcon, ListIcon, Logo, ProfileIcon, Tab} from '@ya.praktikum/react-developer-burger-ui-components';


function AppHeader() {
    return (
        <nav className={styles.header}>
            <ul className={styles.ul}>
                <li className={styles.block}>
                    <a href={'#'} className={styles.constructor + " text text_type_main-default"}>
                        <BurgerIcon type="primary" />
                        Конструктор
                    </a>
                    <a href={'#'} className={styles.orders + " text text_type_main-default"}>
                        <ListIcon type="secondary" />
                        Лента заказов
                    </a>
                </li>
                <li className={styles.image}>
                    <Logo />
                </li>
                <li className={styles.officeContainer}>
                    <a href={'#'} className={styles.office + " text text_type_main-default"}>
                        <ProfileIcon type="secondary" />
                        Личный кабинет
                    </a>

                </li>
            </ul>
        </nav>
    )
}

export default AppHeader;