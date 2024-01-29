import React from 'react';
import {useState} from "react";

import styles from './profile-data.module.css'
import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {changeDataUser} from "../../services/actions/user";
import {userSelector} from "../../services/selectors/selectors";
import {TUser, useAppDispatch, useAppSelector} from "../../types/types";


function ProfileData() {

    const dispatch = useAppDispatch()

    const user = useAppSelector(userSelector) as TUser | null

    // console.log(user)

    const [name, setName] = useState(user && user.name ? user.name : '');
    const [email, setEmail] = useState(user && user.email ? user.email : '');
    const [password, setPassword] = useState('')

    const handleChangeData = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(changeDataUser(name, email))
    }

    const handleCancelChanges = (e: React.FormEvent) => {
        e.preventDefault();
        if (user !== null) {
            setName(user.name);
            setEmail(user.email);
        }
        setPassword('')
    };

    // console.log(password)

    return (
        <form className={styles.form} onSubmit={handleChangeData}>
            <Input
                type={'text'}
                placeholder={'Имя'}
                onChange={e => setName(e.target.value)}
                icon={'EditIcon'}
                value={name}
                name={'name'}
                error={false}
                errorText={'Ошибка'}
                size={'default'}
                extraClass="ml-1"
            />

            <EmailInput
                onChange={e => setEmail(e.target.value)}
                value={email}
                name={'email'}
                placeholder="Логин"
                isIcon={true}
                extraClass="mb-2"
            />
            <PasswordInput
                onChange={e => setPassword(e.target.value)}
                value={password}
                name={'password'}
                icon="EditIcon"
            />

            <div className={`${styles.buttons}`}>
                <Button htmlType="button" type="secondary" size="large" onClick={handleCancelChanges}>
                    Отменить
                </Button>
                <Button htmlType="button" type="primary" size="medium">
                    Сохранить
                </Button>
            </div>
        </form>
    )
}

export default ProfileData