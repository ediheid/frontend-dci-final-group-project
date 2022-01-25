import axios from "axios";
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

  try {
    const response = await axios({
      method: "post",
      url: `${backendURL}user`,
      data: JSON.stringify(userData),
      headers: { "Content-Type": "application/json" }
    })

    console.log(response)

    const loginSuccessful = () => {
      toast("Your User data has been received!", {
        position: "top-center",
        autoClose: 3000,
        draggable: false,
        onClose: () =>
          window.location.replace(`/user-signed-up?message=${response.message}`),
      });
    };

    sethookData({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmedPassword: "",
    });

    loginSuccessful();
  } catch (error) {
    const errors = error.response.data.errors;

    for (let i = 0; i < errors.length; i++) {
      toast.error(`Error: ${errors[i].msg}`, {
        position: "top-center",
        draggable: false,
        autoClose: 5000,
      });
    }
  }

  
};
