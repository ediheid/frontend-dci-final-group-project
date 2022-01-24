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

    alert("test")
    const locationCreated = () => {
      toast("Your property has been successfully created!", {
        position: "top-center",
        autoClose: 3000,
        draggable: false
      });
    }

    locationCreated();
  } catch (error) {
  if (error.response) 
    console.log(error.response.data.message)
  }
};
