import React from 'react'
import styles from './modal-overlay.module.css'
import PropTypes from "prop-types";

function Overlay({onClose}) {
    return (
        <div onClick={onClose} className={styles.overlay}></div>
    )
}

Overlay.propType = {
    onClose: PropTypes.func.isRequired
}

export default Overlay
