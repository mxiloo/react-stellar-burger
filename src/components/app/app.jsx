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
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import Home from "../../pages/home";
import Profile from "../../pages/profile/profile";
import OrderFeed from "../../pages/order-feed/order-feed";
import IngredientDetailsPage from "../../pages/ingredient-details-page/ingredient-details-page";
import NotFound from "../../pages/404-page/not-found";
import IngredientDetailPage from "../../pages/ingredient-details-page/ingredient-details-page";
import Login from "../../pages/login/login";
import Register from "../../pages/register/register";
import {OnlyAuth, OnlyUnAuth} from "../protected-route/protected-route";
import ProfileData from "../../pages/profile-data/profile-data";
import ProfileOrders from "../../pages/prodile-orders/profile-orders";
import ForgotPassword from "../../pages/forgot-password/forgot-password";
import ResetPassword from "../../pages/reset-password/reset-password";


function App() {

    const [item, setItem] = useState(null);
    const isModalOpen = useSelector(store => store.modal.isOpen)

    const isClickIngredient = useSelector(store => store.modal.clickIngredient)
    const isClickOrderList = useSelector(store => store.modal.clickOrder)

    const location = useLocation();
    const background = location.state && location.state.background;

    /*console.log(ingredients)*/
    /* console.log(item)*/

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchIngredients())
    }, [])

    const modalHeader = <h2 className="text text_type_main-large">Детали ингредиента</h2>

    return (
        <div className={styles.app}>
            <AppHeader/>
            <Routes location={background || location}>
                <Route path="/reset-password" element= {<OnlyUnAuth component={<ResetPassword />}/>} />
                <Route path="/forgot-password" element= {<OnlyUnAuth component={<ForgotPassword />}/>} />
                <Route path="/profile" element= {<OnlyAuth component={<Profile />}/>}>
                    <Route path="/profile" element={<ProfileData />} />
                    <Route path="/profile/orders" element={<ProfileOrders />} />
                </Route>
                <Route path="/register" element={<OnlyUnAuth component={<Register />}/>}/>
                <Route path="/login" element={<OnlyUnAuth component={<Login />}/>}/>
                <Route path='/' element={<Home setItem={setItem} />} />
                <Route path='/orderFeed' element={<OrderFeed />} />
                <Route path='/ingredient-details/:id' element={<IngredientDetailPage />} />
                <Route path='*' element={<NotFound />}/>
            </Routes>
            {background && (
                    <Routes>
                        <Route path='/ingredient-details/:id' element={
                            <Modal title={modalHeader}>

                                <IngredientDetailPage />

                            </Modal>
                        } />
                    </Routes>
            )}
            {isClickOrderList && (
                <Routes>
                    <Route path='/order' element={
                        <Modal>

                            <OrderDetails />

                        </Modal>
                    }>
                    </Route>
                </Routes>



            )
            }
        </div>
    );
}

export default App;
