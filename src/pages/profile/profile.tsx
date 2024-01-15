import React from 'react';
import {NavLink, Outlet, useNavigate} from "react-router-dom";
import {Button} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './profile.module.css'
import {logOut} from "../../services/actions/user";
import {useDispatch} from "react-redux";

function Profile() {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const onClick = () => {
        navigate('/')
        dispatch(logOut())
    }

    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <div className={styles.navigation}>
                    <div className={styles.textBox}>
                        <NavLink to='/profile'
                                 className={({isActive}) => isActive ?
                                     `${styles.link_active} text text_type_main-medium` :
                                     `${styles.link} text text_type_main-medium`}>
                <span>
                    Профиль
                </span>
                        </NavLink>
                    </div>

                    <div className={styles.textBox}>
                        <NavLink to='/profile/orders'
                                 className={({isActive}) => isActive ?
                                     `${styles.link_active} text text_type_main-medium` :
                                     `${styles.link} text text_type_main-medium`}>
                <span>
                    История заказов
                </span>
                        </NavLink>
                    </div>

                    <div className={styles.textBox}>
                        <Button htmlType='reset' className={styles.exit} onClick={onClick}>
                <span className={`${styles.textBtn} text text_type_main-medium`}>
                    Выход
                </span>
                        </Button>
                    </div>

                    <span className={`${styles.text} text text_type_main-default text_color_inactive mt-20`}>
                        В этом разделе вы можете <br/> изменить свои персональные данные
                    </span>

                </div>
                <Outlet/>
            </div>


        </div>
    )
}

export default Profile