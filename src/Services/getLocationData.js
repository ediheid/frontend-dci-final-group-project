const backendURL = process.env.REACT_APP_GET_BACKEND_URL;

export const locations = async (setMapEventData) => {
  const res = await fetch(`${backendURL}location`);
  const events = await res.json();

  // console.log("????", events.returnedLocations[0].title);
  setMapEventData(events.returnedLocations);
};
