import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

export const login = async (hookData, sethookData, setUserData, setShowLoginModal) => {

    const currloginData = {
      email: hookData.email,
      password: hookData.password
    }

    const settings = {
      method: "POST",
      body: JSON.stringify(currloginData),
      headers: {
        "Content-Type": "application/json"
      }
    }

    fetch("http://localhost:3001/user/login", settings)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        switch(response.status) {
          case 401: 
              return response.json().then(err => {
                  throw new Error(err.message)
              })
          default:
              throw new Error("Internal Server Error!")
        }
      }
    })
    .then(data => {
      console.log(data);
      const loginSuccessful = () => {
        toast("Login successful!! Taking you to your dashboard!", {
          position: "top-center",
          autoClose: 2000,
          draggable: false
        });
      };

      sethookData({
        email: "",
        password: ""
      })

      setUserData({
        _id: data._id,
        firstname: data.firstname,
        lastname: data.lastname,
        locations: data.locations,
        bookings: data.bookings,
      })

      setShowLoginModal(false)

      loginSuccessful();
    })
    .catch(err => {
      const loginFailed = () => {
        toast.error(`Error: ${err.message}`, {
          position: "top-center",
          draggable: false,
          autoClose: 2000,
        });
      };

      loginFailed();

      sethookData({
        email: "",
        password: ""
      })
    })
  }