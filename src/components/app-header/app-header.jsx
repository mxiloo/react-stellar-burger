import React from "react";
import styles from './Header.module.css';
import {BurgerIcon, ListIcon, Logo, ProfileIcon, Tab} from '@ya.praktikum/react-developer-burger-ui-components';


function AppHeader() {
    return (
        <nav className={styles.header}>
            <ul className={styles.ul}>
                <li className={styles.block}>
                    <div className={styles.constructor}>
                        <BurgerIcon type="primary" />
                        <p className="text text_type_main-default">Конструктор</p>
                    </div>
                    <div className={styles.orders}>
                        <ListIcon type="secondary" />
                        <p className="text text_type_main-default">Лента заказов</p>
                    </div>
                </li>
                <li className={styles.image}>
                    <Logo />
                </li>
                <li className={styles.office}>
                    <ProfileIcon type="secondary" />
                    <p className="text text_type_main-default">Личный кабинет</p>
                </li>
            </ul>
        </nav>
    )
}

export default AppHeader;