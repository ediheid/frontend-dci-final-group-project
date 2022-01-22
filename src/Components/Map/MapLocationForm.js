import React, { useContext, useState } from "react";
import GoogleMapReact from "google-map-react";

import { AppContext } from "../../App";
import styles from "../Map/Map-location-form.module.scss";

import mapStyles from "./mapStyles";

const MapLocationForm = ({ center, zoom }) => {
  const MAP_API = process.env.REACT_APP_MAP_API;

  return (
    <div className={styles["map-container"]}>
      <GoogleMapReact
        className={"map-component"}
        defaultCenter={center}
        center={center}
        defaultZoom={zoom}
        // bootstrapURLKeys={{
        //   key: MAP_API,
        //   language: "en",
        // }}
      ></GoogleMapReact>
    </div>
  );
};

// !!! Map Component default props live here..

Map.defaultProps = {
  // Center coordinates set to Germany
  center: { lat: 51.1657, lng: 10.4515 },
  defaultCenter: { lat: 51.1657, lng: 10.4515 },
  zoom: 5,
};

export default MapLocationForm;
