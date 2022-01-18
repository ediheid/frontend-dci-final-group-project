import axios from "axios";

const backendURL = process.env.REACT_APP_GET_BACKEND_URL;

export const locations = async (setMapEventData) => {
  const data = { locationSearchName: "" };

  const res = await axios({
    method: "POST",
    url: "http://localhost:3001/location/find",
    // url: `${backendURL}location/find`,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  console.log("test");
  setMapEventData(res.data.returnedLocations);
};
