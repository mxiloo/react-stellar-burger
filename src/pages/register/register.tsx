import styles from "./register.module.css";
import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useNavigate} from "react-router-dom";
import React, {useState} from "react";

import {registerUser} from "../../services/actions/user";
import {useAppDispatch} from "../../types/types";

function Register() {

    const dispatch = useAppDispatch()


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const navigate = useNavigate();

    const onChangeName = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setName(evt.target.value)
    }
    const onChangeEmail = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(evt.target.value);
    };
    const onChangePass = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(evt.target.value);
    };

    const onClick = (evt: React.FormEvent) => {
        evt.preventDefault();
        dispatch(registerUser(name, email, password));
        navigate('/');
    };

    return (
        <div>
            <div className={styles.container}>
                {/*onChange={hadleChangeUserData}*/}
                <form className={styles.form} onSubmit={onClick}>
                    <h2 className='text text_type_main-medium mb-6'>Регистрация</h2>
                    <Input onChange={onChangeName} type={'text'} placeholder={'Имя'} value={name} name={'name'}/>
                    <EmailInput onChange={onChangeEmail} value={email} name={'email'} isIcon={false} />
                    <PasswordInput onChange={onChangePass} value={password} name={'password'}/>
                    <Button htmlType="submit" type="primary" size="medium">
                        Зарегистрироваться
                    </Button>
                </form>

                <div className={styles.navigation}>
                    <div className={styles.new}>
                        <span className="text text_type_main-default text_color_inactive">Уже зарегистрированы?</span>
                        <Link to={'/login'}><Button style={{padding : '0px'}} htmlType="button" type="secondary" size="medium">Войти</Button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register