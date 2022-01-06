import React, { useContext } from "react";
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";

import { AppContext } from "../../App";

import styles from "../Map/Map.module.scss";

// !! Hardcoded location data..
const events = [
  {
    id: 1,
    title: "property",
    type: "point",
    coordinates: [48.277486, 8.185997],
  },
  {
    id: 2,
    title: "property",
    type: "point",
    coordinates: [48.006, 8.255999],
  },
];

// Default props passed in to set below Component
const Map = ({ center, zoom }) => {
  // Google Map API
  const MAP_API = process.env.REACT_APP_MAP_API;

  // console.log("!!!!!", events);
  // console.log("??", events[0].id);
  // console.log("##", events[0].coordinates[0]);

  // !! Dummy code to run through 'mapEventData'
  const markers = events.map((event) => {
    if (event.id === 1) {
      // console.log("YES", events);
      // console.log("LATITUDE", events[0].coordinates[0]);
      // console.log("LONGITUDE", events[0].coordinates[1]);

      return (
        <LocationMarker
          lat={events[0].coordinates[0]}
          lng={events[0].coordinates[1]}
        />
      );
    }

    if (event.id === 2) {
      // console.log("Another", events);
      // console.log(" ID 2: LATITUDE", events[1].coordinates[0]);
      // console.log(" ID 2: LONGITUDE", events[1].coordinates[1]);

      return (
        <LocationMarker
          lat={events[1].coordinates[0]}
          lng={events[1].coordinates[1]}
        />
      );
    }
    return null;
  });

  return (
    // Conditionally rendered - will only display onSubmit of form!

    <div className={styles["map-container"]}>
      <GoogleMapReact
        className={styles["map-component"]}
        // !!! API key lives in .env file - when commented out Map runs in dev mode
        // !!! Use like this so we don't use up the API
        bootstrapURLKeys={{
          key: MAP_API,
          language: "en",
        }}
        defaultCenter={center}
        center={center}
        defaultZoom={zoom}
      >
        {markers}
        {/* <LocationMarker lat={center.lat} lng={center.lng} /> */}
      </GoogleMapReact>
    </div>
  );
};

// !!! Map Component default props live here..

Map.defaultProps = {
  // Center coordinates set to Baden-Württemberg
  center: { lat: 48.758339, lng: 8.243008 },
  zoom: 8,
};

export default Map;
