import React from 'react'
import {useEffect} from 'react'
import ReactDOM from "react-dom";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './modal.module.css'
import Overlay from "../modal-overlay/overlay";
import {useDispatch} from "react-redux";
import {isOpenModal, isClickIngredient, isClickOrder, closeModal} from "../../services/reducers/modal-slice";

const modalRoot = document.getElementById('react-modals')

function Modal({children}) {

    const dispatch = useDispatch()

    const onClose = () => {
        dispatch(closeModal(false))
    }

    useEffect(() => {
        function closeEsc(e) {
            if(e.key === 'Escape') {
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
                            <CloseIcon type="primary" onClick={onClose}/>
                        </div>
                    {children}
                </div>
                <Overlay onClose={onClose}/>
            </>
        ), modalRoot
    );
}

export default Modal

