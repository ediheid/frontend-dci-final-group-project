import React, { useState, useEffect, useRef } from "react";

// ? Stylesheet
import styles from "../Card/Card.module.scss";

// ? All Component and View imports
import Search from "../../Components/Search/Search";
import Navbar from "../../Components/Navbar/Navbar";

// ? All Images
import image1 from "./static/pexels-uriel-mont-6271691.jpg";

const Card = () => {
    return (
        <>
            <div className={styles["card-container"]}>
                <div className={styles["card-item"]}>
                    <div className={styles["image-container"]}>
                        <img
                            className={styles.image}
                            src={image1}
                            alt="Credit to Joshua Earle on Unsplash"
                        />
                    </div>
                    <div className={styles.content}>
                        <div className={styles.title}>
                            Lonely place in the middle of black forest
                        </div>

                        <div className={styles["info-box"]}>
                            <div>Feldberg, Baden-Würtemberg, Germany</div>
                            <div>80€ / night</div>
                        </div>
                        <hr className={styles.hr} />

                        <div className={styles.description}>
                            Gummi bears marshmallow biscuit donut fruitcake
                            jelly. Brownie sweet roll croissant dessert tiramisu
                            toffee tootsie roll.
                            {/* Tootsie roll liquorice wafer
                            jelly-o caramels topping jelly icing. Candy canes
                            chupa chups jelly beans chupa chups candy. */}
                            {/* Testing */}
                            <div className={styles["description-link"]}>
                                Show more &#62;
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;
