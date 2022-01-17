import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
    const settings = {
        // dots: true,
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // arrows: false,
    };
    return (
        // <div className={styles.container}>
        <Slider {...settings}>
            <div className={styles.imagecontainer}>
                <img
                    className={styles.image}
                    src={image1}
                    alt="Credit to Joshua Earle on Unsplash"
                />
            </div>
            <div>
                <img
                    className={styles.image}
                    src={image2}
                    alt="Credit to Alisa Anton on Unsplash"
                />
            </div>
            <div>
                <img
                    className={styles.image}
                    src={image3}
                    alt="Credit to Igor Ovsyannykov on Unsplash"
                />
            </div>
            <div>
                <img
                    className={styles.image}
                    src={image4}
                    alt="Credit to Pierre Châtel-Innocenti on Unsplash"
                />
            </div>
            <div>
                <img
                    className={styles.image}
                    src={image5}
                    alt="Credit to Richard Nolan on Unsplash"
                />
            </div>
            <div>
                <img
                    className={styles.image}
                    src={image6}
                    alt="Credit to Cristina Gottardi on Unsplash"
                />
            </div>
            <div>
                <img
                    className={styles.image}
                    src={image7}
                    alt="Credit to Cristina Gottardi on Unsplash"
                />
            </div>
        </Slider>
        // </div>
    );
};

export default LoggedInCarousel;
