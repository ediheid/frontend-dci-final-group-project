import React, { useContext } from "react";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Button from "../../UI/Button/Button";

import styles from "../LoggedInCarousel/LoggedInCarousel.module.scss";

// ? All Images
import image1 from "./static/pexels-alex-azabache-4171211.jpg";
import image2 from "./static/pexels-baihaki-hine-4314203.jpg";
import image3 from "./static/pexels-baptiste-valthier-803226.jpg";
import image4 from "./static/pexels-gantas-vaičiulėnas-4484179.jpg";
import image5 from "./static/pexels-george-desipris-3647675.jpg";
import image6 from "./static/pexels-krivec-ales-558454.jpg";
import image7 from "./static/pexels-nathan-moore-2603681.jpg";

// import hostImage from "./static/pexels-erik-mclean-4300343.jpg";

const LoggedInCarousel = () => {
  const SearchContext = useContext(AppContext);

  const username = SearchContext.currentUser.firstname;

  const settings = {
    dots: true,
    // autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <div className={styles.container}>
      <Slider {...settings}>
        <div className={styles.imagecontainer}>
          <img
            className={styles.image5}
            src={image5}
            alt="Credit to Joshua Earle on Unsplash"
          />
          <div className={styles["welcome-heading"]}>
            Hi {username}! <br />
            Nice to see you.
          </div>
        </div>
        <div>
          <img
            className={styles.image2}
            src={image2}
            alt="Credit to Alisa Anton on Unsplash"
          />
          <div className={styles["about-us"]}>
            <Link to="/about-us">
              {" "}
              <Button>About us</Button>
            </Link>
          </div>
        </div>
        <div>
          <img
            className={styles.image3}
            src={image3}
            alt="Credit to Igor Ovsyannykov on Unsplash"
          />
        </div>
        <div>
          <img
            className={styles.image4}
            src={image4}
            alt="Credit to Pierre Châtel-Innocenti on Unsplash"
          />
        </div>
        <div>
          <img
            className={styles.image1}
            src={image1}
            alt="Credit to Richard Nolan on Unsplash"
          />
        </div>
        <div>
          <img
            className={styles.image6}
            src={image6}
            alt="Credit to Cristina Gottardi on Unsplash"
          />
        </div>
        <div>
          <img
            className={styles.image7}
            src={image7}
            alt="Credit to Cristina Gottardi on Unsplash"
          />
        </div>
      </Slider>
    </div>
  );
};

export default LoggedInCarousel;
