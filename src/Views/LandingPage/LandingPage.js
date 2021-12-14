import React from "react";

import styles from "./LandingPage.module.scss";
import backgroundImage from "./static/pexels-matthew-devries-2775231.jpg";
import guestImage from "./static/pexels-taryn-elliott-5581736.jpg";
import hostImage from "./static/pexels-erik-mclean-4300343.jpg";

const LandingPage = () => {
    return (
        <>
            <div className={styles["main-container"]}>
                {/* //  Component */}
                <div className={styles["image-container"]}>
                    <img
                        className={styles["background-image"]}
                        src={backgroundImage}
                        alt="Camper by Devries from Pexels"
                    />
                    <div className={styles.heading}>
                        You don't
                        <br />
                        know who we are?
                        <br />
                        No problem.
                        <div className={styles["about-button"]}>About us</div>
                    </div>
                </div>
                <div className={styles["content-container"]}>
                 
                    {/* //  Carousel Component */}
                    <div>Find your next adventure </div>
                    <div className={styles.carousel}>CAROUSEL</div>

                    {/* //  Info Component */}
                    <div className={styles.info}>
                        <div className={styles["info-guest"]}>
                            <img
                                className={styles["guest-image"]}
                                src={guestImage}
                                alt="Camper by Devries from Pexels"
                            />
                            <div className={styles["heading-guest"]}>
                                Become
                                <br />
                                a guest
                            </div>
                        </div>

                        <div className={styles["info-host"]}>
                            <img
                                className={styles["host-image"]}
                                src={hostImage}
                                alt="Camper by Devries from Pexels"
                            />
                            <div className={styles["heading-host"]}>
                                Become
                                <br />a host
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div>TEST3</div>
                <div>TEST4</div> */}
            </div>
        </>
    );
};

export default LandingPage;
