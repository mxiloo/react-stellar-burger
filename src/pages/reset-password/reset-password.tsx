import styles from "../forgot-password/forgot-password.module.css";
import {Button, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {NavLink, useNavigate} from "react-router-dom";
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {resetPassword} from "../../services/actions/user";

function ResetPassword() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [password, setPassword] = useState('');
    const [code, setCode] = useState('')

    const onChangePassword = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(evt.target.value);
    };

    const onChangeCode = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setCode(evt.target.value);
    };

    const onClick = () => {
        navigate('/login')
        dispatch(resetPassword(password, code))
    }

    return (

        <section className={styles.container}>
            <h2 className='text text_type_main-medium'>Восстановление пароля</h2>

            <PasswordInput
                placeholder={'Введите новый пароль'}
                onChange={onChangePassword}
                value={password}
                name={'password'}
                extraClass="mb-2"
            />

            <Input
                type={'text'}
                placeholder={'Введите код с письма'}
                onChange={onChangeCode}
                value={code}
                name={'code'}
                error={false}
                errorText={'Ошибка'}
                size={'default'}
                extraClass="ml-1"
            />

            <Button htmlType="submit" type="primary" size="medium" onClick={onClick}>Сохранить</Button>

            <div className={styles.box}>
                <span className={`text text_type_main-default text_color_inactive`}>Вспомнили пароль?</span>
                <NavLink className={`text text_type_main-default text_color_inactive`} to='/login'>
                    <Button style={{padding: '0px'}} htmlType="button" type="secondary" size="medium">Войти</Button>
                </NavLink>
            </div>
        </section>

    )
}

export default ResetPassword