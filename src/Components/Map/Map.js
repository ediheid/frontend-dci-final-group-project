import React, { useContext, useState } from "react";
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import LocationInfoBox from "./LocationInfoBox";

// ! Testing Image for location box
import property1 from "./Static/property1.png";
import property2 from "./Static/property2.png";

import { AppContext } from "../../App";

import styles from "../Map/Map.module.scss";

// !! Hardcoded location data..
const events = [
  {
    id: 1,
    title: "property-1",
    type: "point",
    coordinates: [48.277486, 8.185997],
    // todo: find a way to add image..
    img: property1,
  },
  {
    id: 2,
    title: "property-2",
    type: "point",
    coordinates: [48.006, 8.255999],
    img: property2,
  },
];

// Default props passed in to set below Component
const Map = ({ center, zoom }) => {
  // Google Map API
  const MAP_API = process.env.REACT_APP_MAP_API;

  // console.log("!!!!!", events);
  // console.log("??", events[0].id);
  // console.log("##", events[0].coordinates[0]);

  // ? To look into with Kathi
  // !! Testing location Info..
  const [locationInfo, setLocationInfo] = useState(null);
  // ? ======

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
          // ? To look into with Kathi
          // !! Testing location Info..
          onClick={() =>
            setLocationInfo({
              id: event.id,
              title: event.title,
              img: event.img,
            })
          }
          // ? ======
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
          // ? To look into with Kathi
          // !! Testing location Info..
          onClick={() =>
            setLocationInfo({
              id: event.id,
              title: event.title,
              img: event.img,
            })
          }
          // ? ======
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
        // bootstrapURLKeys={{
        //   key: MAP_API,
        //   language: "en",
        // }}
        defaultCenter={center}
        center={center}
        defaultZoom={zoom}
      >
        {markers}
        {/* <LocationMarker lat={center.lat} lng={center.lng} /> */}
      </GoogleMapReact>
      {/*   // ? To look into with Kathi
            // !! Testing location Info.. */}
      {locationInfo && <LocationInfoBox info={locationInfo} />}
      {/*  // ? ====== */}
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
