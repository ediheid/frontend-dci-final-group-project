import React from "react";
import GoogleMapReact from "google-map-react";

import LocationMarker from "./LocationMarker";

import styles from "../Map/Map.module.scss";

// Default props passed in to set below Component
const Map = ({ center, zoom }) => {
  const MAP_API = process.env.REACT_APP_MAP_API;

  return (
    // Conditionally rendered - will only display onSubmit of form!

    <div className={styles["map-container"]}>
      <GoogleMapReact
        className={styles["map-component"]}
        // !!! API key lives in .env file - when commented out Map runs in dev mode
        // !!! Use like this so we don't use up the API
        // bootstrapURLKeys={{
        //   key: MAP_API,
        //   language: "en",
        // }}
        defaultCenter={center}
        center={center}
        defaultZoom={zoom}
      >
        <LocationMarker lat={center.lat} lng={center.lng} />
      </GoogleMapReact>
    </div>
  );
};

// !!! Map Component default props live here..

Map.defaultProps = {
  center: { lat: 52.52, lng: 13.405 },
  zoom: 12,
};

export default Map;
