export const locations = async (setMapEventData) => {
  const res = await fetch("http://localhost:3001/location");
  const events = await res.json();

  // console.log("????", events.returnedLocations[0].title);
  setMapEventData(events.returnedLocations);
};
