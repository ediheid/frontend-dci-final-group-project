import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const backendURL = process.env.REACT_APP_GET_BACKEND_URL;

export const signup = async (hookData, sethookData) => {
  const userData = {
    firstname: hookData.firstname,
    lastname: hookData.lastname,
    email: hookData.email,
    password: hookData.password,
    confirmedPassword: hookData.confirmedPassword,
  };

  const settings = {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch(`${backendURL}user`, settings)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        switch (response.status) {
          case 400:
            return response.json().then((err) => {
              throw new Error(err.errors[0].msg);
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
      // console.log(data); // setCurrentUser(data)
      const signInSuccessful = () => {
        toast("Your User data has been received!", {
          position: "top-center",
          autoClose: 3500,
          draggable: false,
          onClose: () =>
            window.location.replace(`/user-signed-up?message=${data.message}`),
        });
      };

      sethookData({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmedPassword: "",
      });

      signInSuccessful();
    })
    .catch((err) => {

      if (err.message) {
        console.log(err)
      const signUpFailed = () => {
        toast.error(`Error: ${err.message}`, {
          position: "top-center",
          draggable: false,
          autoClose: 3500,
        });
      };

      signUpFailed();
      } else {
        console.log("ERRORS ARR", err)

        
        const signUpFailed = () => {
          toast.error(`Error: ${err}`, {
            position: "top-center",
            draggable: false,
            autoClose: 3500
          });
        };
  
        signUpFailed();
    }
  });
};
