import React, { useContext, useState, useEffect } from "react";

import { AppContext } from "../../App";

// ? Stylesheet
import styles from "../Card/Card.module.scss";

// ? All Component and View imports
import Search from "../../Components/Search/Search";
import Navbar from "../../Components/Navbar/Navbar";
import { getCardData } from "../../Services/getCardData.js";

const Card = () => {
  const locationContext = useContext(AppContext);
  const [cardData, setCardData] = useState([]);

  const backendURL = process.env.REACT_APP_GET_BACKEND_URL;
  const frontendURL = process.env.REACT_APP_FRONTEND_URL;

  useEffect(() => {
    getCardData(setCardData)
  }, [])

  console.log("CARDDATA", cardData)

  // console.log("LLLLLLL", locationContext.populateCards);

  let content = cardData.map((loc) => {
    // console.log("444444", loc);

    return (
      <div className={styles["card-container"]}>
        <div className={styles["card-item"]}>
          <div className={styles["image-container"]}>
            <img
              className={styles.image}
              src={`${backendURL}uploads/${loc.img}`}
              alt={`Property view of ${loc.title}`}
            />
          </div>
          <div className={styles.content}>
            <div className={styles.title}>{loc.title}</div>

            <div className={styles["info-box"]}>
              <div>{`${loc.location.city}, ${loc.location.country}`}</div>

              <div>
                {/* 80€ / night */}
                {/* // !! Not getting passed in?!*/}
                {loc.price} € / night
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
                href={`${frontendURL}location-details/${loc._id}`}
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
