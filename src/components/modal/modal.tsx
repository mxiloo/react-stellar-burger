import React from 'react'
import { ReactNode, useEffect} from 'react'
import ReactDOM from "react-dom";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './modal.module.css'
import Overlay from "../modal-overlay/overlay";
import {useDispatch} from "react-redux";
import {closeModal} from "../../services/reducers/modal-slice";
import {useLocation, useNavigate} from "react-router-dom";

const modalRoot = document.getElementById('react-modals') as HTMLElement

type TModal = {
    children: ReactNode,
    title: JSX.Element | null | string
}

function Modal({children, title}: TModal) {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation();

    const onClose = () => {
        dispatch(closeModal(false));
        if (location.pathname.includes("/ingredient-details")) {
            navigate('/');
        } else if (location.pathname.includes("/orderFeed")) {
            navigate('/orderFeed');
        } else if (location.pathname.includes("/profile/orders")) {
            navigate('/profile/orders')
        }
    }

    useEffect(() => {
        function closeEsc(e: KeyboardEvent) {
            if (e.key === 'Escape') {
                onClose()
            }
        }
        document.addEventListener('keydown', closeEsc)
        return () => document.removeEventListener('keydown', closeEsc)
    }, []);


    return ReactDOM.createPortal (
        (
            <>
                <div className={styles.modal}>
                        <div className={styles.close + ' mr-10 mt-15'}>
                            {title &&
                                <h2 className="text text_type_main-large">{title}</h2>
                            }
                            <div className={styles.closeIcon}>
                                <CloseIcon type="primary" onClick={onClose}/>
                            </div>
                        </div>
                    {children}
                </div>
                <Overlay onClose={onClose}/>
            </>
        ), modalRoot
    );
}

export default Modal

