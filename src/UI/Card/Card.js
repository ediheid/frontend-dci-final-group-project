import React, { useState, useEffect, useRef, useContext } from "react";
import { Link } from "react-router-dom";

import { AppContext } from "../../App";

// ? Stylesheet
import styles from "../Card/Card.module.scss";

// ? All Component and View imports
import Search from "../../Components/Search/Search";
import Navbar from "../../Components/Navbar/Navbar";

// ? All Images

const Card = () => {
  const locationContext = useContext(AppContext);

  // console.log("LLLLLLL", locationContext.populateCards);

  let content = locationContext.populateCards.map((loc) => {
    // console.log("444444", loc);

    return (
      <div className={styles["card-container"]}>
        <div className={styles["card-item"]}>
          <div className={styles["image-container"]}>
            <img
              className={styles.image}
              src={loc.img}
              alt={`Property view of ${loc.title}`}
            />
          </div>
          <div className={styles.content}>
            <div className={styles.title}>{loc.title}</div>

            <div className={styles["info-box"]}>
              <div>{`${loc.city}, ${loc.country}`}</div>

              <div>
                {/* 80€ / night */}
                {/* // !! Not getting passed in?!*/}
                {loc.pricePerNight} / night
              </div>
            </div>
            <hr className={styles.hr} />

            <div className={styles.description}>
              {/* // !! Will be... */}
              {loc.description}
              {/* Gummi bears marshmallow biscuit donut fruitcake jelly. Brownie
              sweet roll croissant dessert tiramisu toffee tootsie roll. */}
              {/* <div className={styles["description-link"]}> */}
              <a
                href={loc.link}
                // style={{ zIndex: 5000 }}
                alt={`Show property page for ${loc.title}`}
              >
                {" "}
                Show more &#62;
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return <>{content}</>;
};

export default Card;
