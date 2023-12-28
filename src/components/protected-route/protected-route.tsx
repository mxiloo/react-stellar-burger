import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Navigate, useLocation} from "react-router-dom";
import {setAuthChecked} from "../../services/reducers/user-slice";
import {checkUserAuth} from "../../services/actions/user";
import {isAuthCheckedSelector, userSelector} from "../../services/selectors/selectors";
import {TIsAuthChecked, TUser} from "../../types/types";

type TProps = {
    component: JSX.Element,
    onlyUnAuth: boolean
};

type TComponent = {
    component: JSX.Element
};

const Protected = ({onlyUnAuth = false, component}: TProps) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setAuthChecked(false));
        dispatch(checkUserAuth());
    }, [dispatch]);

    const isAuthChecked = useSelector(isAuthCheckedSelector) as TIsAuthChecked;
    const user = useSelector(userSelector) as TUser;
    const location = useLocation();

    if (!isAuthChecked) {
        return null;
    }

    if (onlyUnAuth && user) {
        const {from} = location.state || {from: {pathname:"/"}};
        return <Navigate to={from} />;
    }

    if (!onlyUnAuth && !user) {
        return <Navigate to="/login" state={{from: location}} />;
    }

    return component;
};

export const OnlyAuth=(props: TComponent) => <Protected onlyUnAuth={false} {...props} />;
export const OnlyUnAuth=(props: TComponent) => <Protected onlyUnAuth={true} {...props} />;