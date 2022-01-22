const backendURL = process.env.REACT_APP_GET_BACKEND_URL;
console.log("backendURL", backendURL);

export const getCardData = async (setCardData) => {
  const url = `${backendURL}location/cards`;

  // console.log("URL DETAILS PAGE", url);
  try {
    const response = await fetch(url);
    const data = await response.json();
    // console.log("CARDS", data);
    setCardData(data);
  } catch (e) {
    // console.log(e);
  }
};
