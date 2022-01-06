import React from "react";

import styles from "../Map/Map.module.scss";

const LocationMarker = ({ lat, lng, onClick }) => {
  return (
    <div className={styles["location-marker"]} onClick={onClick}>
      <i className="fas fa-caravan"></i>
    </div>
  );
};

export default LocationMarker;
