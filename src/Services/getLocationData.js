export const locations = async (setMapEventData) => {
  // setMapLoading(true);
  // !!! Dummy for location data linked from backend
  // !! Events will equal an array of objects
  const res = await fetch("http://localhost:3001/location");
  const events = await res.json();

  // console.log("????", events.returnedLocations[0].title);

  setMapEventData(events.returnedLocations);
  // ! Not sure if we will use loader or not? as it may interfere with already existing conditional rendering on the map from Form
  // setMapLoading(false);
};
