import React from "react";
import GoogleMapReact from "google-map-react";

import styles from "../Map/Map.module.scss";

const Map = () => {
  const defaultProps = {
    center: { lat: 52.52, lng: 13.405 },
    zoom: 12,
  };

  return (
    <div className={styles["map-container"]}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyAYC-5rh7I_Z9zgclSOQ5JA_p53gFV4Xo8",
          language: "en",
        }}
        defaultCenter={defaultProps.center}
        center={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      />
    </div>
  );
};

export default Map;
