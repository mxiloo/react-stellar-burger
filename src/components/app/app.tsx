import React from 'react'
import {useEffect} from 'react'
import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";

import Modal from '../modal/modal'
import OrderDetails from "../order-details/order-details";
import {useDispatch, useSelector} from "react-redux";
import {fetchIngredients} from "../../services/actions/ingredients-api";
import {Route, Routes, useLocation} from "react-router-dom";
import Home from "../../pages/home";
import Profile from "../../pages/profile/profile";
import OrderFeed from "../../pages/order-feed/order-feed";
import NotFound from "../../pages/404-page/not-found";
import IngredientDetailPage from "../../pages/ingredient-details-page/ingredient-details-page";
import Login from "../../pages/login/login";
import Register from "../../pages/register/register";
import {OnlyAuth, OnlyUnAuth} from "../protected-route/protected-route";
import ProfileData from "../../pages/profile-data/profile-data";
import ProfileOrders from "../../pages/prodile-orders/profile-orders";
import ForgotPassword from "../../pages/forgot-password/forgot-password";
import ResetPassword from "../../pages/reset-password/reset-password";
import {
    isClickOrderFeedSelector,
    isClickOrderListSelector,
    orderFeedNumberSelector
} from "../../services/selectors/selectors";
import {useAppSelector, useAppDispatch} from "../../types/types";
import OrderFeedPage from "../../pages/order-feed-page/order-feed-page";

function App() {

    // const [item, setItem] = useState(null);
    const isClickOrderList = useAppSelector(isClickOrderListSelector)

    const ordedFeedNum = useAppSelector(orderFeedNumberSelector)

    const location = useLocation();
    const background = location.state && location.state.background;

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchIngredients())
    }, [])

    const modalHeader = <p className="text text_type_main-large">Детали ингредиента</p>
    const modalHeaderOrder = <p className=" text text_type_digits-default">#{ordedFeedNum}</p>

    return (
        <div className={styles.app}>
            <AppHeader/>
            <Routes location={background || location}>
                <Route path="/reset-password" element={<OnlyUnAuth component={<ResetPassword/>}/>}/>
                <Route path="/forgot-password" element={<OnlyUnAuth component={<ForgotPassword/>}/>}/>
                <Route path="/profile" element={<OnlyAuth component={<Profile/>}/>}>
                    <Route path="/profile" element={<ProfileData/>}/>
                    <Route path="/profile/orders" element={<ProfileOrders/>}/>
                </Route>
                <Route path="/register" element={<OnlyUnAuth component={<Register/>}/>}/>
                <Route path="/login" element={<OnlyUnAuth component={<Login/>}/>}/>
                <Route path='/' element={<Home/>}/>
                <Route path='/orderFeed' element={<OrderFeed/>}/>
                <Route path='/orderFeed/:id' element={<OrderFeedPage/>}/>
                <Route path="/profile/orders/:id" element={<OrderFeedPage />} />
                <Route path='/ingredient-details/:id' element={<IngredientDetailPage/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
            {background && (
                <Routes>

                    <Route path='/ingredient-details/:id' element={
                        <Modal title={modalHeader}>
                            <IngredientDetailPage/>
                        </Modal>
                    }/>

                    <Route path='orderFeed/:id' element={
                        <Modal title={null}>

                            <OrderFeedPage/>

                        </Modal>
                    }/>

                    <Route path="/profile/orders/:id" element={
                        <Modal title={null}>
                            <OrderFeedPage/>
                        </Modal>
                    } />
                </Routes>
            )}
            {isClickOrderList && (
                <Routes>
                    <Route path='/order' element={
                        <Modal title={null}>

                            <OrderDetails/>

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
