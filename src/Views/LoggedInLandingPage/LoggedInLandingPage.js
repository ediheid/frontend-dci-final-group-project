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
import Card from "../../UI/Card/Card";

// ? All Images
import host from "./static/pexels-valeria-boltneva-7960259.jpg";
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
      {/* <Navbar />
      <Search /> */}
      <div className={styles["test-container"]}>
        <LoggedInCarousel />
      </div>
      <div className={styles["main-container"]}>
        <div className={styles["content-container"]}>
          <div className={styles["image-container"]}>
            <Link to="/location-form">
              <img
                className={styles.image}
                src={host}
                alt="Camper by Devries from Pexels"
              />
              <div className={styles["heading-image"]}>Become a host</div>
            </Link>
          </div>

          <div className={styles.heading}>
            Not sure where to go? Browse all below..
          </div>
        </div>
        <Card />
      </div>
    </>
  );
};

export default LoggedInLandingPage;
