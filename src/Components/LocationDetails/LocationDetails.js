import React, { useContext } from "react";

import { AppContext } from "../../App";

// ? Stylesheet
import styles from "../LocationDetails/LocationDetails.module.scss";

// ? All Component and View imports
import Search from "../Search/Search";
import Navbar from "../Navbar/Navbar";

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
                    <div className={styles.info}>This is a rare find.</div>

                    <hr className={styles.hr} />

                    <div className={styles["intro-container"]}>
                        {/* // !! Title + host + intro */}
                        <div className={styles.intro}>
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
                </div>
            </div>
        </>
    );
};

export default LocationDetails;
