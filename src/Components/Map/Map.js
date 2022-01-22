import React, { useContext, useState } from "react";
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import LocationInfoBox from "./LocationInfoBox";

// ! Testing Image for location box
import property1 from "./Static/property-1.jpeg";
import property2 from "./Static/property-2.jpeg";

import { AppContext } from "../../App";

import styles from "../Map/Map.module.scss";

import mapStyles from "./mapStyles";

const frontendURL = process.env.REACT_APP_FRONTEND_URL;

// ! Hardcoded location data.. (will live in backend)
// const events = [
//   {
//     id: 1,
//     title: "By the Lake",
//     type: "point",
//     // todo:
//     addressForUser: "Only the town will display",
//     // ! Only use full address for the coordnitaes
//     address: "An der Gutach 1, 78098 Triberg, Germany",
//     coordinates: [48.132592, 8.232933],
//     // todo: find a way to add image..
//     img: property1,
//     // !! Page Link will go here with hardcoded property Link Component
//     link: "http://localhost:3000/location-details",
//   },
//   {
//     id: 2,
//     title: "Cherry Manor",
//     type: "point",
//     // todo:
//     addressForUser: "Only the town will display",
//     // ! Only use full address for the coordnitaes
//     address: "Kleinenzhof 1, 7532 Bad Wildbad, Germany",
//     coordinates: [48.735805, 8.574254],
//     img: property2,
//     // !! Page Link will go here with hardcoded property Link Component
//     link: "http://localhost:3000/location-details",
//   },
// ];

// Default props passed in to set below Component
const Map = ({ center, zoom }) => {
  // Google Map API
  const MAP_API = process.env.REACT_APP_MAP_API;

  const mapContext = useContext(AppContext);

  console.log(mapStyles);

  // console.log("!!!!!", events);
  // console.log("??", events[0].id);
  // console.log("##", events[0].coordinates[0]);

  console.log("#####", mapContext.mapEventData);

  // let markers = mapContext.mapEventData;

  // let latitude = mapContext.latitude;
  // let longitude = mapContext.longitude;

  // console.log("TESTLONGLAT", latitude, longitude);

  // !!!
  // Todo: Create a an extra loop to run through ids to the populate..

  let markers = mapContext.mapEventData.map((event) => {
    console.log("*****", event);

    // if (event.id == 1) {
    // console.log("YES", events);
    // console.log("LATITUDE", events[0].coordinates[0]);
    // console.log("LONGITUDE", events[0].coordinates[1]);

    // console.log("ID COUNT!", idCounter);

    return (
      <LocationMarker
        lat={event.coordinates[1]}
        lng={event.coordinates[0]}
        // ? To look into with Kathi
        // !! Testing location Info..
        onClick={() =>
          mapContext.setLocationInfo({
            id: event.id,
            title: event.title,
            // address: event.address,
            // !!
            // Todo: add Town to database to populate card with town instead of full address but keep full address for when a user books
            city: event.city,
            country: event.country,
            pricePerNight: event.pricePerNight,
            img: event.img,
            link: `${event.link}`,
          })
        }
        // ? ======
      />
    );
  });

  return (
    // Conditionally rendered - will only display onSubmit of form!

    <div className={styles["test-container"]}>
      <div className={styles["map-container"]}>
        <button
          className={styles["close-map-button"]}
          onClick={mapContext.closeMap}
        >
          X
        </button>

        <GoogleMapReact
          // !!! - Snazzy Maps only works when API is called (not in dev mode)
          options={{ styles: mapStyles }}
          // ? Added close location box on map so - this works on map but user can still click on a Marker and it will open!
          onClick={mapContext.closeLocationInfoBox}
          className={styles["map-component"]}
          // !!! API key lives in .env file - when commented out Map runs in dev mode
          // !!! Use like this so we don't use up the API
          bootstrapURLKeys={{
            key: MAP_API,
            language: "en",
          }}
          defaultCenter={center}
          // center={lat: {mapContext.latitude}, lng: {mapContext.longitude}}
          center={{ lat: mapContext.latitude, lng: mapContext.longitude }}
          defaultZoom={zoom}
        >
          {markers}
          {/* <LocationMarker lat={center.lat} lng={center.lng} /> */}
        </GoogleMapReact>
        {/*   // ? To look into with Kathi
            // !! Testing location Info.. */}
        {mapContext.locationInfo && (
          <LocationInfoBox info={mapContext.locationInfo} />
        )}
        {/*  // ? ====== */}
      </div>
    </div>
  );
};

// !!! Map Component default props live here..

Map.defaultProps = {
  // Center coordinates set to Germany
  // center: { lat: 51.1657, lng: 10.4515 },
  defaultCenter: { lat: 51.1657, lng: 10.4515 },
  zoom: 5,
};

export default Map;
