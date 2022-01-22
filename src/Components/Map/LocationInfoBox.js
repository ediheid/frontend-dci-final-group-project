import React, { useContext } from "react";

import { AppContext } from "../../App";

import styles from "../Map/Map.module.scss";

const LocationInfoBox = ({ info }) => {
  // ? From AppContext
  const likedContext = useContext(AppContext);
  const mapContext = useContext(AppContext);

  return (
    // Location Info Box
    <div className={styles["location-box"]}>
      {/* Inner Location box for styling */}
      <div className={styles["inner-location-box"]}>
        {/* Close info box */}
        <button
          className={styles["close-info-box"]}
          onClick={mapContext.closeLocationInfoBox}
        >
          Close
        </button>

        {/* Property image */}
        <img
          className={styles["img-container"]}
          alt={info.title}
          src={info.img}
        ></img>

        {/* // ? Text content container */}
        <div className={styles["text-content-container"]}>
          {/* Property name/title/address */}
          <h2 className={styles["location-heading"]}>{info.title}</h2>

          {/* // !!! */}
          {/* // todo: Pass Property Town into events instead of full address? */}

          <h3 className={styles["location-address"]}>
            {info.city}, {info.country}
          </h3>

          <h3 className={styles["location-address"]}>
            {/* // ! Bug fix why this is not working */}
            {info.pricePerNight}€ /night
          </h3>

          {/* <h3 className={styles["location-address"]}>{info.address}</h3> */}
          {/* Property link */}

          <div className={styles["liked-and-link-container"]}>
            <a
              className={styles["property-link"]}
              href={info.link}
              alt="property-link"
            >
              Details
            </a>

            {/* // ? Set like/saved of property */}
            <div
              className={styles["liked-container"]}
              onClick={likedContext.toggleLike}
            >
              {likedContext.like ? (
                <i className="fas fa-heart"></i>
              ) : (
                <i className="far fa-heart"></i>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationInfoBox;
