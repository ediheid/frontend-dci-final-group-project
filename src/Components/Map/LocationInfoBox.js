import React from "react";

import styles from "../Map/Map.module.scss";

const LocationInfoBox = ({ info }) => {
  return (
    <div className={styles["location-box"]}>
      <div className={styles["inner-location-box"]}>
        <h2>Event Location Info</h2>
        <ul>
          {/* <li>
          ID: <strong>{info.id}</strong>
        </li> */}
          <li>
            <strong>{info.title}</strong>
          </li>
        </ul>
        <img
          className={styles["img-container"]}
          alt={info.title}
          src={info.img}
        ></img>
        <h3>LINK TO PROPERTY PAGE!</h3>
      </div>
    </div>
  );
};

export default LocationInfoBox;
