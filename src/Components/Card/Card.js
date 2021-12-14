import React from "react";

import styles from "./Card.module.scss";

import forrest from "./static/pexels-taryn-elliott-6861137.jpg";
import middleOfNowhere from "./static/pexels-arthouse-studio-4579021.jpg";
import field from "./static/pexels-rachel-claire-4577786.jpg";

const Card = () => {
    return (
        <>
            <div className={styles["cards-container"]}>
                <div className={styles["card-item"]}>
                    <img
                        className={styles.image}
                        src={forrest}
                        alt="Camper by Devries from Pexels"
                    />
                    <div className={styles["card-heading"]}>In the forrest</div>
                </div>

                <div className={styles["card-item"]}>
                    <img
                        className={styles.image}
                        src={middleOfNowhere}
                        alt="Camper by Devries from Pexels"
                    />
                    <div className={styles["card-heading"]}>In the middle of nowhere</div>
                </div>

                <div className={styles["card-item"]}>
                    <img
                        className={styles.image}
                        src={field}
                        alt="Camper by Devries from Pexels"
                    />
                    <div className={styles["card-heading"]}>In the forrest</div>
                </div>

                <div className={styles["card-item"]}>
                    <img
                        className={styles.image}
                        src={forrest}
                        alt="Camper by Devries from Pexels"
                    />
                    <div className={styles["card-heading"]}>In the forrest</div>
                </div>
            </div>
        </>
    );
};

export default Card;
