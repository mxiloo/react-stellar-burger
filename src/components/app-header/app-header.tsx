import React from "react";
import styles from './Header.module.css';
import {BurgerIcon, ListIcon, Logo, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {NavLink} from "react-router-dom";

function AppHeader() {

    type TIsActive = {
        isActive: boolean
    }

    const switchClassName = ({isActive}: TIsActive) => (isActive ? `${styles.link_active}` : `${styles.link}`);
    return (

        <header className={styles.header}>
            <ul className={styles.ul}>
                <li className={styles.block}>
                    <NavLink to='/' className={switchClassName}>

                        <div className={styles.container}>
                            <BurgerIcon type="primary"/>
                            <span className={styles.text + " text text_type_main-default"}>
                                Конструктор
                            </span>
                        </div>

                    </NavLink>
                    <NavLink to='/orderFeed' className={switchClassName}>
                        <div className={styles.container}>
                            <ListIcon type="secondary"/>
                            <span className={styles.text + " text text_type_main-default"}>
                                Лента заказов
                            </span>
                        </div>
                    </NavLink>
                </li>
                <li className={styles.image}>
                    <NavLink to='/' className={switchClassName}>
                        <Logo />
                    </NavLink>
                </li>
                <li className={styles.officeContainer}>
                    <NavLink to='/profile' className={switchClassName}>
                        <div className={styles.container}>
                        <ProfileIcon type="secondary" />
                        <span className={styles.text + " text text_type_main-default"}>
                            Личный кабинет
                        </span>
                        </div>
                    </NavLink>

                </li>
            </ul>
        </header>
    )
}

export default AppHeader;