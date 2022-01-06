import React from "react";

// ! Testing Image for location box
import property1 from "./Static/property1.png";

import styles from "../Map/Map.module.scss";

const LocationInfoBox = ({ info }) => {
  return (
    <div className={styles["location-box"]}>
      THIS WILL BE THE LINK TO AN INDIVIDUAL PROPERTY PAGE!
      <h2>Event Location Info</h2>
      <ul>
        <li>
          ID: <strong>{info.id}</strong>
        </li>
        <li>
          Title: <strong>{info.title}</strong>
        </li>
      </ul>
      <div className={styles["img-container"]}>
        Image:
        <img>{info.img}</img>
      </div>
      <h3>LINK TO PROPERTY PAGE!</h3>
    </div>
  );
};

export default LocationInfoBox;
