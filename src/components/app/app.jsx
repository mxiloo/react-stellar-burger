import React from 'react'
import {useState, useEffect} from 'react'
import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";

import AppMain from "../app-main/app-main";
import Modal from '../modal/modal'
import IngredientDetails from "../ingredient-details/ingredient-details";
import OrderDetails from "../order-details/order-details";
import {useDispatch, useSelector} from "react-redux";
import {fetchIngredients} from "../../services/actions/ingredients-api";



function App() {

    const [item, setItem] = useState(null);
    const isModalOpen = useSelector(store => store.modal.isOpen)

    const isClickIngridient = useSelector(store => store.modal.clickIngredient)
    const isClickOrderList = useSelector(store => store.modal.clickOrder)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchIngredients())
    }, [])

    return (
        <div className={styles.app}>
            <AppHeader/>
            <AppMain setItem={setItem} />
            {isModalOpen && (
                <Modal >
                    {
                        isClickIngridient &&
                        <IngredientDetails item={item}/> ||
                        isClickOrderList &&
                        <OrderDetails/>
                    }
                </Modal>
            )
            }
        </div>
    );
}

export default App;
