import React, { useState } from "react";
import { Link } from "react-router-dom";

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
import hostImage from "./static/pexels-erik-mclean-4300343.jpg";

const LandingPage = () => {
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
                    {/* // ?  Carousel Component */}
                    <Carousel />

                    {/* // ? Info Component */}

                    <div className={styles["info-host"]}>
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
                    </div>
                </div>
            </div>
        </>
    );
};

export default LandingPage;
