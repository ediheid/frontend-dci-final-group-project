const getLocationDataURL = process.env.REACT_APP_GET_LOCATION_DATA_URL;

export const locations = async (setMapEventData) => {
  const res = await fetch(getLocationDataURL);
  const events = await res.json();

  // console.log("????", events.returnedLocations[0].title);
  setMapEventData(events.returnedLocations);
};
