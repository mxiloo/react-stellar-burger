import React from 'react'
import {useEffect} from 'react'
import ReactDOM from "react-dom";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './modal.module.css'
import Overlay from "../modal-overlay/overlay";
import {useDispatch} from "react-redux";
import {isOpenModal, isClickIngredient, isClickOrder, closeModal} from "../../services/reducers/modal-slice";
import {useNavigate} from "react-router-dom";
import {useParams} from "react-router";

const modalRoot = document.getElementById('react-modals')

function Modal({children, closeModalNavigate, title}) {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onClose = () => {
        dispatch(closeModal(false))
        navigate('/')
    }

    useEffect(() => {
        function closeEsc(e) {
            if (e.key === 'Escape') {
                onClose()
            }
        }
        document.addEventListener('keydown', closeEsc)
        return () => document.removeEventListener('keydown', closeEsc)
    }, []);


    return ReactDOM.createPortal(
        (
            <>
                <div className={styles.modal}>
                        <div className={styles.close + ' mr-10 mt-15'}>
                            {title &&
                                <h2 className="text text_type_main-large">{title}</h2>
                            }
                            <div className={styles.closeIcon}>
                                <CloseIcon type="primary" onClick={onClose} onClose={closeModalNavigate} />
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

