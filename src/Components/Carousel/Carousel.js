import React from "react";

import Slider from "react-slick";

// ? Stylesheet
import styles from "../Carousel/Carousel.module.scss";

// ? Slick styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ? All Images
import middleOfNowhere from "./static/pexels-arthouse-studio-4579021.jpg";
import field from "./static/pexels-rachel-claire-4577786.jpg";
import forrest from "./static/pexels-taryn-elliott-6861137.jpg";
// import camper from "./static/pexels-gantas-vaicciulenas-4499510.jpg";
import cozyCamper from "./static/pexels-pnw-production-9354781.jpg";
import garden from "./static/pexels-matheus-bertelli-1906155.jpg";
import mountains from "./static/pexels-toth-photos-10539693.jpg";
import beach from "./static/pexels-alasdair-braxton-1992889.jpg";

const Carousel = () => {
    const settings = {
        // className: "center",
        centerMode: true,
        dots: true,
        infinite: true,
        centerPadding: "70vw",
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        // arrows: true,
        // centerMode: true,
        // responsive: [
        //     {
        //         breakpoint: 576,
        //         settings: {
        //             slidesToShow: 3,
        //             slidesToScroll: 3,
        //             infinite: true,
        //             dots: true,
        //         },
        //     },
        //     {
        //         breakpoint: 768,
        //         settings: {
        //             slidesToShow: 2,
        //             slidesToScroll: 2,
        //         },
        //     },
        //     {
        //         breakpoint: 992,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1,
        //         },
        //     },
        //     {
        //         breakpoint: 1200,
        //         settings: {
        //             slidesToShow: 2,
        //             slidesToScroll: 2,
        //         },
        //     },
        //     {
        //         breakpoint: 1399,
        //         settings: {
        //             slidesToShow: 2,
        //             slidesToScroll: 2,
        //         },
        //     },
        //     {
        //         breakpoint: 1400,
        //         settings: {
        //             slidesToShow: 2,
        //             slidesToScroll: 2,
        //         },
        //     },
        //     // You can unslick at a given breakpoint now by adding:
        //     // settings: "unslick"
        //     // instead of a settings object
        // ],
    };

    return (
        <>
            <div className={styles["carousel-container"]}>
                <div className={styles["carousel-heading"]}>
                    Find your next
                    <br />
                    adventure
                </div>
                <Slider {...settings}>
                    <div>
                        <h3>
                            <img
                                className={styles.image}
                                src={middleOfNowhere}
                                alt="Camper by Devries from Pexels"
                            />
                        </h3>
                    </div>
                    <div>
                        <h3>
                            <img
                                className={styles.image}
                                src={forrest}
                                alt="Camper by Devries from Pexels"
                            />
                        </h3>
                    </div>
                    <div>
                        <h3>
                            <img
                                className={styles.image}
                                src={cozyCamper}
                                alt="Camper by Devries from Pexels"
                            />
                        </h3>
                    </div>
                    <div>
                        <img
                            className={styles.image}
                            src={garden}
                            alt="Camper by Devries from Pexels"
                        />
                    </div>
                    <div>
                        <img
                            className={`${styles.image} ${styles.mountains}`}
                            src={mountains}
                            alt="Camper by Devries from Pexels"
                        />
                    </div>
                    <div>
                        <img
                            className={`${styles.image} ${styles.beach}`}
                            src={beach}
                            alt="Camper by Devries from Pexels"
                        />
                    </div>
                </Slider>
            </div>
        </>
    );
};

export default Carousel;
