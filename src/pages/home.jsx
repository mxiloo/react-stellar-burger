import React from 'react';
import AppMain from "../components/app-main/app-main";
import PropTypes from "prop-types";

function Home({setItem}) {
    return (
        <AppMain setItem={setItem}/>
    )
}

Home.propTypes = {
    setItem: PropTypes.func.isRequired
}

export default Home