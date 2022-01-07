import React from "react";

import styles from "../Map/Map.module.scss";

const LocationInfoBox = ({ info }) => {
  return (
    // Location Info Box
    <div className={styles["location-box"]}>
      {/* Inner Location box for styling */}
      <div className={styles["inner-location-box"]}>
        {/* Property image */}
        <img
          className={styles["img-container"]}
          alt={info.title}
          src={info.img}
        ></img>

        {/* // !! Tesxt content container */}
        <div className={styles["text-content-container"]}>
          {/* Property name/title/address */}
          <h2 className={styles["location-heading"]}>{info.title}</h2>

          {/* // !!! */}
          {/* // todo: Pass Property Town into events */}
          <h3 className={styles["location-address"]}>{info.address}</h3>
          {/* Property link */}
          <a
            className={styles["property-link"]}
            href={info.link}
            alt="property-link"
          >
            Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default LocationInfoBox;
