import React from 'react'
import styles from './modal-overlay.module.css'

function Overlay({onClose}) {
    return (
        <div onClick={onClose} className={styles.overlay}></div>
    )
}

export default Overlay
