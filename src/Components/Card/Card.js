import React from "react";

import styles from "./Card.module.scss";

const Card = () => {
    return (
        <div>
            {/* <div className={styles.wrapper}> */}
                <div className={styles["cards-wrap"]}>
                    <div className={styles["card-item"]}>
                        <div className={styles["card-inner"]}>
                            <div className={styles["card-top"]}>
                                <img
                                    src="https://i.imgur.com/qhE9KtV.jpg"
                                    alt="car"
                                />
                            </div>
                            <div className={styles["card-bottom"]}>
                                <div className={styles["card-category"]}>
                                    Travel
                                </div>
                                <div className={styles["card-info"]}>
                                    <p className={styles.title}>
                                        10 Best Things about Travel
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Ad, ab.
                                    </p>
                                </div>
                                <div className={styles["card-creator"]}>
                                    By Alex Kato
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {/* </div> */}
        </div>
    );
};

export default Card;
