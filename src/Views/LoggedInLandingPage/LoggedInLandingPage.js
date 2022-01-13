import React, { useState } from "react";
import { Link } from "react-router-dom";

// ? Stylesheet
import styles from "./LoggedInLandingPage.module.scss";

// ? All Component and View imports
import Button from "../../UI/Button/Button";
import LogIn from "../../Components/LogIn/LogIn";
import Search from "../../Components/Search/Search";
import Navbar from "../../Components/Navbar/Navbar";
import LoggedInCarousel from "../../Components/LoggedInCarousel/LoggedInCarousel";
import LocationCards from "../../Components/LocationCards/LocationCards";

// ? All Images
// import backgroundImage from "./static/pexels-matthew-devries-2775231.jpg";
// import guestImage from "./static/pexels-taryn-elliott-5581736.jpg";
// import hostImage from "./static/pexels-erik-mclean-4300343.jpg";

const LoggedInLandingPage = () => {
    // const [showLogIn, setShowLogIn] = useState(false);

    // const openLogIn = (event) => {
    //     event.preventDefault();
    //     setShowLogIn(true);
    // };

    // const closeLogIn = (event) => {
    //     event.preventDefault();
    //     setShowLogIn(false);
    //     console.log("background was clicked close log in");
    // };
    return (
        <>
            <Navbar />
            <Search />
            <LoggedInCarousel />
            <div className={styles["main-container"]}>
                <div className={styles["content-container"]}>
                    <div className={styles.heading}>
                        Not sure where to go? Perfect.
                    </div>
                    <div>
                        <LocationCards />
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoggedInLandingPage;
