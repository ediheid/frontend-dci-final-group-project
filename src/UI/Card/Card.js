import React, { useContext } from "react";

// ? Stylesheet
import styles from "../Card/Card.module.scss";
import btnStyles from "../Button/Button.module.scss";

// ? All Component and View imports
import Search from "../../Components/Search/Search";
import Navbar from "../../Components/Navbar/Navbar";

import { AppContext } from "../../App";

import { getCardData } from "../../Services/getCardData.js";
// ? All Images

const Card = (props) => {
  const backendURL = process.env.REACT_APP_GET_BACKEND_URL;
  const frontendURL = process.env.REACT_APP_FRONTEND_URL;
  const cardContext = useContext(AppContext);
  const locationContext = useContext(AppContext);

  let content = cardContext.cardData.map((loc, i) => {
    return (
      <div key={i} className={styles["card-container"]}>
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

              <div>{loc.price} € / night</div>
            </div>
            <hr className={styles.hr} />

            <div className={styles.description}>
              <p>{loc.description.slice(0, 800)}</p>
              <a
                href={`${frontendURL}location-details/${loc._id}`}
                alt={`Show property page for ${loc.title}`}
              >
                <button className={btnStyles.button}>show more</button>
                {/* Show more &#62; */}
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
