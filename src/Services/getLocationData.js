import axios from "axios";

const frontendURL = process.env.REACT_APP_FRONTEND_URL;
const backendURL = process.env.REACT_APP_GET_BACKEND_URL;

export const locations = async (setMapEventData) => {
  const data = { locationSearchName: "" };

  console.log("Error on map data fetch", data);

  const res = await axios({
    method: "POST",
    // url: "http://localhost:3001/location/find",
    url: `${backendURL}location/findall`,
    headers: { "Content-Type": "application/json" },

    body: JSON.stringify(data),
  });

  console.log("Error on map data fetch", data.returnedLocations);

  let places = res.data.returnedLocations;
  places.map((place) => {
    place.link = `${frontendURL}location-details/${place._id.toString()}`;

    place.img = `${backendURL}uploads/${place.img}`;

    return place;
  });

  setMapEventData(places);
};
