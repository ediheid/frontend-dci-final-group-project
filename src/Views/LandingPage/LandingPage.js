import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../App";

// ? Stylesheet
import styles from "./LandingPage.module.scss";

// ? All Component and View imports
import Card from "../../UI/Card/Card";
import Carousel from "../../Components/Carousel/Carousel";
import Button from "../../UI/Button/Button";
import LogIn from "../../Components/LogIn/LogIn";
import Search from "../../Components/Search/Search";
import Navbar from "../../Components/Navbar/Navbar";

// ? All Images
import backgroundImage from "./static/pexels-matthew-devries-2775231.jpg";
import host from "./static/pexels-valeria-boltneva-7960259.jpg";
import LoggedInLandingPage from "../LoggedInLandingPage/LoggedInLandingPage";

const LandingPage = () => {
    const landingPageContext = useContext(AppContext);
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

    const content = !landingPageContext.cookies.UserCookie ? (
        <div className={styles["main-container"]}>
            <div className={styles["content-container"]}>
                <img
                    className={styles["title-image"]}
                    src={backgroundImage}
                    alt="Forest by mali maeder from Pexels
"
                />
                <div className={styles.heading}>
                    <div className={styles["text-container"]}>
                        Don't know who <br />
                        we are? <br />
                        No problem.
                        <Link to="/about-us">
                            {/* // ? Button */}
                            <div>
                                <Button>About Us</Button>
                            </div>
                        </Link>
                    </div>
                    {/* <div onClick={openLogIn}>Test log in</div> */}
                </div>
                {/* <div className={styles.adventure}>Find your next adventure</div> */}
                {/* // ?  Carousel Component */}
                <Carousel />

                {/* // ? Info Component */}

                <div className={styles["image-container"]}>
                    <Link to="/location-form">
                        <img
                            className={styles.image}
                            src={host}
                            alt="Camper by Devries from Pexels"
                        />
                        <div className={styles["heading-image"]}>
                            Become a host
                        </div>
                    </Link>
                </div>

                {/* <div className={styles["info-host"]}>
                    <Link to="/location-form">
                        <img
                            className={styles["host-image"]}
                            src={hostImage}
                            alt="Camper by Devries from Pexels"
                        />
                        <div className={styles["heading-host"]}>
                            Become
                            <br />a host
                        </div>
                    </Link>
                </div> */}
            </div>
        </div>
    ) : (
        <LoggedInLandingPage />
    );

    return (
        <>
            <Navbar />
            <Search />
            {content}
        </>
    );
};

export default LandingPage;
