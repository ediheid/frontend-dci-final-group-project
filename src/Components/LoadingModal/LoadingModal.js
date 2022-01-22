import React from "react";
import styles from "./LoadingModal.module.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const spinner = <FontAwesomeIcon icon={faSpinner} />

const LoadingModal = () => {
    return (
        <div className={styles.loadingModal}>
            <p>Loading ...</p>
            <div className={styles.spinner}>{spinner}</div>
        </div>
    )
}

export default LoadingModal;