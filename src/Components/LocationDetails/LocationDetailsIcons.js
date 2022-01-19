import React from "react";

import styles from "../LocationDetails/LocationDetailsIcons.module.scss";

const LocationDetailsIcons = (props) => {
    return(
    <div className={styles["bonus-container"]}>
        <div className={styles.icon}>
            <i className="fas fa-tree"></i>{" "}
        </div>
        <div className={styles["bonus-description"]}>
            <div>Forest view</div>
            <div>{""}</div>
        </div>
    </div>
    )
}

export default LocationDetailsIcons;