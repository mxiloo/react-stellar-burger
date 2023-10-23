import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Navigate, useLocation} from "react-router-dom";
import {setAuthChecked} from "../../services/reducers/user-slice";
import {checkUserAuth} from "../../services/actions/user";

const Protected = ({ onlyUnAuth = false, component }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setAuthChecked(false));
        dispatch(checkUserAuth());
    }, [dispatch]);

    const isAuthChecked = useSelector((store) => store.user.isAuthChecked);
    const user = useSelector((store) => store.user.user);
    const location = useLocation();

    if (!isAuthChecked) {
        return null;
    }

    if (onlyUnAuth && user) {
        const { from } = location.state || { from: { pathname: "/" } };
        return <Navigate to={from} />;
    }

    if (!onlyUnAuth && !user) {
        return <Navigate to="/login" state={{ from: location }} />;
    }

    return component;
};

export const OnlyAuth = (props) => <Protected onlyUnAuth={false} {...props} />;
export const OnlyUnAuth = (props) => <Protected onlyUnAuth={true} {...props} />;