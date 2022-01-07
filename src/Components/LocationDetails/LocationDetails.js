import React, { useContext } from "react";

import { AppContext } from "../../App";

// ? Stylesheet
import styles from "../LocationDetails/LocationDetails.module.scss";

// ? All Component and View imports
import Search from "../Search/Search";
import Navbar from "../Navbar/Navbar";
import Button from "../../UI/Button/Button";

// ? All Images
import mainImage from "../LocationDetails/static/pexels-mali-maeder-109679.jpg";
import florian from "../LocationDetails/static/pexels-anna-shvets-5262378.jpg";

const LocationDetails = () => {
    const SearchContext = useContext(AppContext);

    return (
        <>
            <Navbar />
            {/* // !!! NOTE: Search bar is conditionally rendered onClick of magnifying glass in Navbar.js !!! */}
            {/* {SearchContext.openSearch ? <Search /> : null} */}
            {/* // !! */}
            <Search />

            <div className={styles["main-container"]}>
                <div className={styles["content-container"]}>
                    <img
                        className={styles["title-image"]}
                        src={mainImage}
                        alt="Forest by mali maeder from Pexels
"
                    />
                    {/* // !! Title of location */}
                    <div className={styles.heading}>
                        Lonely place in the middle of black forest
                    </div>
                    {/* // !! Address */}
                    <div className={styles.location}>
                        Feldberg, Baden-Würtemberg, Germany
                    </div>
                    <hr className={styles.hr} />
                    {/* // !! Info */}
                    <div className={styles.info}>
                        This is a rare find. Lucky you!
                    </div>
                    <hr className={styles.hr} />
                    <div className={styles["intro-container"]}>
                        {/* // !! Title + host + intro */}
                        <div className={styles.heading}>
                            Lonely place <br /> hosted by Florian
                        </div>

                        <div>
                            <img
                                className={styles["host-image"]}
                                src={florian}
                                alt="Blond man with yellow flowers"
                            />
                        </div>
                    </div>
                    {/* // !! Title + host + intro */}
                    <div className={styles["intro-details"]}>
                        <div>1 caravan</div>
                        <div>forrest</div>
                        <div>no wifi</div>
                        <div>no shower</div>
                        <div>animals allowed</div>
                    </div>
                    <hr className={styles.hr} />

                    {/* // !! Nice to have */}
                    <div className={styles["bonus-container"]}>
                        <div className={styles.icon}>
                            <i class="fas fa-shuttle-van"></i>
                        </div>
                        <div className={styles["bonus-description"]}>
                            <div>Entire home</div>
                            <div>You'll have the place to yourself.</div>
                        </div>
                    </div>

                    <div className={styles["bonus-container"]}>
                        <div className={styles.icon}>
                            <i class="fas fa-door-closed"></i>
                        </div>
                        <div className={styles["bonus-description"]}>
                            <div>Self check-in</div>
                            <div>Check yourself in.</div>
                        </div>
                    </div>

                    <div className={styles["bonus-container"]}>
                        <div className={styles.icon}>
                            <i class="fas fa-mobile-alt"></i>
                        </div>
                        <div className={styles["bonus-description"]}>
                            <div>Great communication experience</div>
                            <div>The host replays in less then 1 hour.</div>
                        </div>
                    </div>

                    <div className={styles["bonus-container"]}>
                        <div className={styles.icon}>
                            <i class="far fa-calendar-times"></i>
                        </div>
                        <div className={styles["bonus-description"]}>
                            <div>Free cancellation for 48 hours</div>
                            <div>{""}</div>
                        </div>
                    </div>

                    <hr className={styles.hr} />

                    <div className={styles["detailed-description"]}>
                        Lemon drops candy canes marshmallow cake apple pie.
                        Toffee wafer bear claw jujubes liquorice chupa chups
                        cotton candy gummies. Apple pie cookie jujubes jujubes
                        pastry halvah. <br />
                        <br /> Toffee candy canes chocolate cake sesame snaps
                        marzipan oat cake bear claw chocolate. Jelly-o macaroon
                        bear claw apple pie oat cake halvah. Chupa chups sesame
                        snaps brownie marshmallow topping sesame snaps pie.{" "}
                        <div className={styles["modal-description-link"]}>
                            Show more >
                        </div>
                    </div>

                    <hr className={styles.hr} />

                    <div className={styles.heading}>What this place offers</div>

                    <div className={styles["bonus-container"]}>
                        <div className={styles.icon}>
                            <i class="fas fa-tree"></i>{" "}
                        </div>
                        <div className={styles["bonus-description"]}>
                            <div>Forest view</div>
                            <div>{""}</div>
                        </div>
                    </div>

                    <div className={styles["bonus-container"]}>
                        <div className={styles.icon}>
                            <i class="fas fa-box-open"></i>
                        </div>
                        <div className={styles["bonus-description"]}>
                            <div>Welcome package</div>
                            <div>{""}</div>
                        </div>
                    </div>

                    <div className={styles["bonus-container"]}>
                        <div className={styles.icon}>
                            <i class="fas fa-campground"></i>{" "}
                        </div>
                        <div className={styles["bonus-description"]}>
                            <div>Calmness</div>
                            <div>{""}</div>
                        </div>
                    </div>
                    <Button>Show all amenities</Button>

                    <hr className={styles.hr} />

                    <div className={styles.heading}>Where you'll be</div>
                </div>
            </div>
        </>
    );
};

export default LocationDetails;
