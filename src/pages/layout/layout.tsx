import React from 'react';
import AppHeader from "../../components/app-header/app-header";
import {Outlet} from "react-router-dom";

function Layout () {
    return (
        <div>
            <AppHeader />
            <Outlet />
        </div>
    )
}

export default Layout