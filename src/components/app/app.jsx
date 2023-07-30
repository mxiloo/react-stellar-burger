import React from 'react'
import {useState, useEffect} from 'react'
import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";

import AppMain from "../app-main/app-main";
import IngredientDetails from '../modal/modal'
import ModalChildren from "../modal-first-children/modal-first-children";
import OrderDetails from "../modal-second-children/modal-second-children";
import {useDispatch, useSelector} from "react-redux";
import {fetchIngredients} from "../../services/actions/ingredients-api";



function App() {

    const [item, setItem] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    /*const isOpen = useSelector(store => store.modal.isOpen)*/
    const isClickIngridient = useSelector(store => store.modal.clickIngredient)
    const isClickOrderList = useSelector(store => store.modal.clickOrder)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchIngredients())
    }, [])

    return (
        <div className={styles.app}>
            <AppHeader/>
            <AppMain setItem={setItem} setIsModalOpen={setIsModalOpen}/>
            {isModalOpen && (
                <IngredientDetails setIsModalOpen={setIsModalOpen}>
                    {
                        isClickIngridient &&
                        <ModalChildren item={item}/> ||
                        isClickOrderList &&
                        <OrderDetails/>
                    }
                </IngredientDetails>
            )
            }
        </div>
    );
}

export default App;
