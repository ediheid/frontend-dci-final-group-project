import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const backendURL = process.env.REACT_APP_GET_BACKEND_URL;

export const createLocation = async (hookData, setErrors) => {
  let formData = new FormData();

  formData.append("locationData", JSON.stringify(hookData));
  formData.append("locationImage", hookData.locationImage);

  try {
    const response = await axios({
      method: "post",
      url: `${backendURL}location`,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    });

    console.log(response);

    const locationCreated = () => {
      toast("Your property has been successfully created!", {
        position: "top-center",
        autoClose: 3500,
        draggable: false
      });
    }

    locationCreated();
  } catch (error) {
    if (error.response) {
      const errors = error.response.data.errors;
      let autoCloseTime = 5000;
      if (errors.length >= 3 && errors.length < 6) {
        autoCloseTime = 7500;
      } else if ( errors.length >= 6) {
        autoCloseTime = 10000
      }
      for (let i = 0; i < errors.length; i++) {
        toast.error(`Error: ${errors[i].msg}`, {
          position: "top-center",
          draggable: false,
          autoClose: autoCloseTime,
        });
      }
    } 
  }
};
