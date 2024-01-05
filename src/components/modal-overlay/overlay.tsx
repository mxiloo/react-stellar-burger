import React from 'react'
import styles from './modal-overlay.module.css'

type TOverlay = {
    onClose: () => void
}

function Overlay({onClose}: TOverlay) {
    return (
        <div onClick={onClose} className={styles.overlay}></div>
    )
}

export default Overlay
