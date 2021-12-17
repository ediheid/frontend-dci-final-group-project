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

// ? All Images
import backgroundImage from "./static/pexels-matthew-devries-2775231.jpg";
import guestImage from "./static/pexels-taryn-elliott-5581736.jpg";
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
      <Search />
      <div className={styles["main-container"]}>
        {/* <LogIn onCloseLogin={closeLogIn} showLogin={showLogIn} /> */}
        {/* //  Welcome Image Component */}
        <div className={styles["image-container"]}>
          <img
            className={styles["background-image"]}
            src={backgroundImage}
            alt="Camper by Devries from Pexels"
          />
          <div className={styles.heading}>
            Don't know
            <br />
            who we are?
            <br />
            No problem.
            <Link to="/about-us">
              {/* // ? Button */}
              <div>
                <Button>About Us</Button>
              </div>
            </Link>
            {/* <div onClick={openLogIn}>Test log in</div> */}
          </div>
        </div>

        {/* // ?  Carousel Component */}
        <Carousel />

        <div className={styles["content-container"]}>
          {/* // ? Info Component */}
          <div className={styles.info}>
            <div className={styles["info-guest"]}>
              <img
                className={styles["guest-image"]}
                src={guestImage}
                alt="Camper by Devries from Pexels"
              />
              <div className={styles["heading-guest"]}>
                Become
                <br />a guest
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
      </div>
    </>
  );
};

export default LandingPage;
