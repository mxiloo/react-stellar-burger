import styles from './login.module.css';
import { EmailInput, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import {useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {login} from "../../services/actions/user";

function Login () {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onChangeEmail = (evt) => {
        setEmail(evt.target.value);
    };
    const onChangePass = (evt) => {
        setPassword(evt.target.value);
    };

    const onClick = () => {
        dispatch(login(email, password));
    };

    return (
        <div className={styles.container}>

            <form className={styles.form}>
                <h2 className='text text_type_main-medium mb-6'>Вход</h2>
                <EmailInput onChange={onChangeEmail} value={email} name={'email'} isIcon={false}/>
                <PasswordInput onChange={onChangePass} value={password} name={'password'} extraClass="mb-2"/>
                <Button htmlType="button" type="primary" size="medium" onClick={onClick}>
                    Войти
                </Button>
            </form>

            <div className={styles.navigation}>
                <div className={styles.new}>
                    <span className="text text_type_main-default text_color_inactive">Вы — новый пользователь?</span>
                    <Link to={'/register'}><Button style={{padding : '0px'}} htmlType="button" type="secondary" size="medium">Зарегистрироваться</Button></Link>
                </div>
                <div className={styles.new}>
                    <span className="text text_type_main-default text_color_inactive">Забыли пароль?</span>
                    <Link to={'/forgot-password'} ><Button style={{padding : '0px'}} htmlType="button" type="secondary" size="medium">Восстановить пароль</Button></Link>
                </div>

            </div>
        </div>
    )
}

export default Login