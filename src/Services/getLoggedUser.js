import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { useHistory } from "react-router-dom"

toast.configure();

const backendURL = process.env.REACT_APP_GET_BACKEND_URL;

export const login = async (
  hookData,
  sethookData,
  setUserData,
  setShowLoginModal,
  setCookie,
  history
) => {
  // let history = useHistory();

  const currloginData = {
    email: hookData.email,
    password: hookData.password,
  };

  const settings = {
    method: "POST",
    body: JSON.stringify(currloginData),
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch(`${backendURL}user/login`, settings)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        switch (response.status) {
          case 400: 
            return response.json().then((err) => {
              throw new Error(err.errors[0].msg)
            })
          case 401:
            return response.json().then((err) => {
              throw new Error(err.message);
            });
          case 403: 
            return response.json().then((err) => {
              throw new Error(err.message);
            })
          default:
            throw new Error("Internal Server Error!");
        }
      }
    })
    .then((data) => {
      // console.log("showData from backend:", data);

      setCookie("UserCookie", data.token);

      const loginSuccessful = () => {
        toast("Login successful!! Taking you to your dashboard!", {
          position: "top-center",
          autoClose: 3000,
          draggable: false,
        });
      };

      // history.push("/welcome-page");
      // window.location.replace("/welcome-page");

      sethookData({
        email: "",
        password: "",
      });

      setUserData({
        _id: data._id,
        firstname: data.firstname,
        lastname: data.lastname,
        locations: data.locations,
        bookings: data.bookings,
      });

      setShowLoginModal(false);

      loginSuccessful();
    })
    .catch((err) => {
      
      if (err.message) {
        const loginFailed = () => {
          toast.error(`Error: ${err.message}`, {
            position: "top-center",
            draggable: false,
            autoClose: 3500,
          });
        };
        loginFailed()
      } else {
        const loginFailed = () => {
          toast.error(`Error: ${err}`, {
            position: "top-center",
            draggable: false,
            autoClose: 3500,
          });
        };
        loginFailed()
      }
    });
};
