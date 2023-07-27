import React from 'react'
import {useState, useEffect} from 'react'
import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";

import AppMain from "../app-main/app-main";
import Modal from '../modal/modal'
import ModalChildren from "../modal-first-children/modal-first-children";
import Orders from "../modal-second-children/modal-second-children";
import {useSelector} from "react-redux";



function App() {

    const [item, setItem] = useState(null);

    const isOpen = useSelector(store => store.modal.isOpen)
    const isClickIngridient = useSelector(store => store.modal.clickIngredient)
    const isClickOrderList = useSelector(store => store.modal.clickOrder)

    return (
        <div className={styles.app}>
            <AppHeader/>
            <AppMain setItem={setItem}/>
            {isOpen && (
                <>
                    <Modal>
                        {
                            isClickIngridient &&
                            <ModalChildren item={item}/> ||
                            isClickOrderList &&
                            <Orders/>
                        }
                    </Modal>
                </>
            )
            }

        </div>
    );
}

export default App;
