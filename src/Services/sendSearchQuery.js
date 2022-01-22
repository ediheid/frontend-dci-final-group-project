const backendURL = process.env.REACT_APP_GET_BACKEND_URL;

export const sendSearchQuery = async (searchDataToSend) => {
  const settings = {
    method: "POST",
    body: JSON.stringify(searchDataToSend),
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch(`${backendURL}location/find`, settings)
    .then((response) => {
      // console.log("HERE!");
      if (response.ok) {
        return response.json();
      } else {
        switch (response.status) {
          case 400:
            return response.json().then((err) => {
              throw new Error(err.message);
            });
          case 401:
            return response.json().then((err) => {
              throw new Error(err.message);
            });
          case 406:
            return response.json().then((err) => {
              throw new Error(err.message);
            });
          default:
            throw new Error("Internal Server Error!");
        }
      }
    })
    .then((data) => {
      // console.log("NOW", data);
      return data;
    })
    .catch((err) => {
      // console.log(err);
    });
};
