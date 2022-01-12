export const locations = async (setMapEventData) => {
  const res = await fetch("http://localhost:3001/location");
  const events = await res.json();

  // console.log("????", events.returnedLocations[0].title);

  setMapEventData(events.returnedLocations);
};

// export const locations = async (setMapEventData) => {
//   const res = await fetch("http://localhost:3001/location");

//   let events;

//   try {
//     events = await res.json();

//     // console.log("????", events.returnedLocations[0].title);
//   } catch (error) {
//     console.log("Error", error);
//     alert(error);
//   }

//   setMapEventData(events.returnedLocations);
// };
