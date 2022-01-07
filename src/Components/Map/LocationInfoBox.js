import React from "react";

import styles from "../Map/Map.module.scss";

const LocationInfoBox = ({ info }) => {
  return (
    <div className={styles["location-box"]}>
      <div className={styles["inner-location-box"]}>
        <img
          className={styles["img-container"]}
          alt={info.title}
          src={info.img}
        ></img>
        <h2 className={styles["location-heading"]}>{info.title}</h2>
        <a
          className={styles["property-link"]}
          href={info.link}
          alt="Link to property"
        >
          View Property
        </a>
      </div>
    </div>
  );
};

export default LocationInfoBox;
