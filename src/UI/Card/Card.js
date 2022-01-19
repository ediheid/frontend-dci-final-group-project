import React, { useState, useEffect, useRef, useContext } from "react";
import { Link } from "react-router-dom";

import { AppContext } from "../../App";

// ? Stylesheet
import styles from "../Card/Card.module.scss";

// ? All Component and View imports
import Search from "../../Components/Search/Search";
import Navbar from "../../Components/Navbar/Navbar";

// ? All Images

// !!!
// todo: Will eventually be passed in from the backend
import image1 from "./static/pexels-uriel-mont-6271691.jpg";

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
              // !!! Image passed in from backend will live here soon..
              // {loc.image} ?
              className={styles.image}
              // src={image1}
              src={loc.img}
              // !!! Alt will be passed in from backend too.. We can ask Marc to set it up with each corelating photo!
              alt="UPDATE THIS"
            />
          </div>
          <div className={styles.content}>
            <div className={styles.title}>{loc.title}</div>

            <div className={styles["info-box"]}>
              <div>
                {/* {loc.address} */}
                {/* // !! Will be.... */}
                {`${loc.city}, ${loc.country}`}
              </div>

              <div>
                {/* // !! Will be... */}
                80€ / night
                {/* {loc.pricePerNight} */}
              </div>
            </div>
            <hr className={styles.hr} />

            <div className={styles.description}>
              {/* // !! Will be... */}
              {/* {loc.description} */}
              Gummi bears marshmallow biscuit donut fruitcake jelly. Brownie
              sweet roll croissant dessert tiramisu toffee tootsie roll.
              {/* <div className={styles["description-link"]}> */}
              <a
                href={loc.link}
                // style={{ zIndex: 5000 }}
                alt={`Show property page for ${loc.title}`}
              >
                {" "}
                Show more &#62;
              </a>
              {/* <Link to="/about-us">
                                <div className={styles.icon}>
                                    <i className="fas fa-caravan"></i>
                                </div>
                            </Link> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  });

  return <>{content}</>;
};

export default Card;
