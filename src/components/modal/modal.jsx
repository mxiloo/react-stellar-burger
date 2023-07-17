import React from 'react'
import {useEffect} from 'react'
import ReactDOM from "react-dom";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './modal.module.css'
import Overlay from "../modal-overlay/overlay";
import Orders from "../modal-second-children/modal-second-children";
import ModalChildren from "../modal-first-children/modal-first-children";

const modalRoot = document.getElementById('react-modals')

function Modal({setIsOpen, children, setIsClickIngridient, setIsClickOrderList}) {

    const onClose = () => {
        setIsOpen(false)
        setIsClickIngridient(false)
        setIsClickOrderList(false)
    }

    useEffect(() => {
        function closeEsc(e) {
            if(e.key === 'Escape') {
                setIsOpen(false)
            }
        }
        document.addEventListener('keydown', closeEsc)
        return () => document.removeEventListener('keydown', closeEsc)
    }, []);


    return ReactDOM.createPortal(
        (
            <>
                <div className={styles.modal}>
                    <div className={styles.nachinka}>
                        <div className={styles.close + ' mr-10 mt-15'}>
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