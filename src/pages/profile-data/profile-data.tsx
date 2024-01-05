import React from 'react';
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import styles from './profile-data.module.css'
import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {changeDataUser} from "../../services/actions/user";
import {userSelector} from "../../services/selectors/selectors";
import {TUser} from "../../types/types";


function ProfileData() {

    const dispatch = useDispatch()

    const user = useSelector(userSelector) as TUser

    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [password, setPassword] = useState('')

    const handleChangeData = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(changeDataUser(name, email))
    }

    const handleCancelChanges = (e: React.FormEvent) => {
        e.preventDefault();
        setName(user.name)
        setEmail(user.email)
        setPassword('')
    };

    // console.log(password)

    return (
        <form className={styles.form}>
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
                <Button htmlType="button" type="primary" size="medium" onClick={handleChangeData}>
                    Сохранить
                </Button>
            </div>
        </form>
    )
}

export default ProfileData