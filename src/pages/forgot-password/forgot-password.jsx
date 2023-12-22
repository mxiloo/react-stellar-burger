import styles from './forgot-password.module.css'
import {useState} from "react";
import {Button, EmailInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {forgotPassword} from "../../services/actions/user";

function ForgotPassword() {

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const [email, setEmail] = useState('')

    const onChangeEmail = (evt) => {
        setEmail(evt.target.value);
    };

    const onClick = () => {
        navigate('/reset-password')
        dispatch(forgotPassword(email))
    }

    return (
        <section className={styles.container}>
            <h2 className='text text_type_main-medium'>Восстановление пароля</h2>

            <EmailInput onChange={onChangeEmail} value={email} name={'email'} isIcon={false}/>

            <Button htmlType="submit" type="primary" size="medium" onClick={onClick}>Восстановить</Button>

            <div className={styles.box}>
                <span className={`text text_type_main-default text_color_inactive`}>Вспомнили пароль?</span>
                <NavLink className={`text text_type_main-default text_color_inactive`} to='/login'>
                    <Button style={{padding : '0px'}} htmlType="button" type="secondary" size="medium">Войти</Button>
                </NavLink>
            </div>
        </section>
    )
}

export default ForgotPassword