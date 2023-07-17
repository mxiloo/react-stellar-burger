import React from 'react'
import {useState, useEffect} from 'react'
import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";

import AppMain from "../app-main/app-main";
import Modal from '../modal/modal'
import ModalChildren from "../modal-first-children/modal-first-children";
import Orders from "../modal-second-children/modal-second-children";



function App() {


    const [componnentsArray, setComponnentsArray] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [isClickIngridient, setIsClickIngridient] = useState(false);
    const [isClickOrderList, setIsClickOrderList] = useState(false);
    const [item, setItem] = useState(null);


    const responseStatus = (res) => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
    }
    const getData = () => {
        return (
           fetch('https://norma.nomoreparties.space/api/ingredients')
                .then(responseStatus)
                .then((res) => {
                    setComponnentsArray(res.data)
                })
        )
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className={styles.app}>
            <AppHeader/>
            <AppMain setIsOpen={setIsOpen} ingredients={componnentsArray} setIsClickOrderList={setIsClickOrderList} setIsClickIngridient={setIsClickIngridient} setItem={setItem}/>
            {isOpen && (
                <>
                    <Modal
                        setIsOpen={setIsOpen}
                        setIsClickIngridient={setIsClickIngridient}
                        setIsClickOrderList={setIsClickOrderList}>

                        {isClickIngridient &&
                            <ModalChildren item={item}/> ||
                            isClickOrderList && <Orders/>}
                    </Modal>
                </>
            )
            }

        </div>
    );
}

export default App;
