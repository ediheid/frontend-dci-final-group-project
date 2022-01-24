import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../App";

// ? Stylesheet
import styles from "./LandingPage.module.scss";

// ? All Component and View imports
// import Card from "../../UI/Card/Card";
import Carousel from "../../Components/Carousel/Carousel";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";
import Search from "../../Components/Search/Search";
import Navbar from "../../Components/Navbar/Navbar";
import LoadingModal from "../../Components/LoadingModal/LoadingModal";

// ? All Images
import backgroundImage from "./static/pexels-matthew-devries-2775231.jpg";
import host from "./static/pexels-valeria-boltneva-7960259.jpg";
import LoggedInLandingPage from "../LoggedInLandingPage/LoggedInLandingPage";

const LandingPage = () => {
  const landingPageContext = useContext(AppContext);

  let content = null;

  if (!landingPageContext.cookies.UserCookie) {
    content = (
      <div className={styles["main-container"]}>
        <div className={styles["content-container"]}>
          <img
            className={styles["title-image"]}
            src={backgroundImage}
            alt="Forest by mali maeder from Pexels"
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
        </div>
        <div className={styles.cardHeading}>This week's top locations..</div>
        {/* // ? Card component */}
        <div className={styles["card-container"]}>
          <Card />
        </div>
      </div>
    );
  } else if (
    landingPageContext.cookies.UserCookie &&
    landingPageContext.cardData
  ) {
    content = <LoggedInLandingPage />;
  } else {
    content = <LoadingModal />;
  }

  return (
    <>
      <Navbar />
      <Search />
      {content}
    </>
  );
};

export default LandingPage;
