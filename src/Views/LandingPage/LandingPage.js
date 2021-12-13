import React from "react";

import styles from "../LandingPage/LandingPage.module.scss";

const LandingPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles["about-us"]}>ABOUT US</div>
            <div className={styles.carousel}>Carousel</div>

            <div className={styles.info}>
                <div className={styles["info-guest"]}>GUEST</div>
                <div className={styles["info-host"]}>HOST</div>
            </div>
        </div>
    );
};

export default LandingPage;
