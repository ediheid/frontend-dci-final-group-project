import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

export const signup = async (hookData, sethookData) => {

    const userData = {
        firstname: hookData.firstName,
        lastname: hookData.lastName,
        email: hookData.email,
        password: hookData.password,
        confirmedPassword: hookData.confirmedPassword
    }
    console.log("userData", userData);

    const settings = {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
            "Content-Type": "application/json"
        }
    }

    fetch("http://localhost:3001/user", settings)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                switch (response.status) {
                    case 400:
                        return response.json().then(err => {
                            throw new Error(err.message)
                        })
                    case 401:
                        return response.json().then(err => {
                            throw new Error(err.message)
                        })
                    case 406:
                        return response.json().then(err => {
                            throw new Error(err.message)
                        })
                    default:
                        throw new Error("Internal Server Error!")
                }
            }
        })
        .then(data => {
            console.log(data) // setCurrentUser(data) 
            const loginSuccessful = () => {
                toast("Your User data has been received!", {
                    position: "top-center",
                    autoClose: 2000,
                    draggable: false,
                    onClose: () => window.location.replace(`/user-signed-up?message=${data.message}`)
                });
            }

            sethookData({
                firstname: "",
                lastname: "",
                email: "",
                password: "",
                confirmedPassword: ""
            })

            loginSuccessful();
        })
        .catch(err => {
            const signUpFailed = () => {
                toast.error(`Error: ${err.message}`, {
                    position: "top-center",
                    draggable: false,
                    autoClose: 2000,
                });
            };

            signUpFailed();

            sethookData({
                firstname: "",
                lastname: "",
                email: "",
                password: "",
                confirmedPassword: ""
            })
        })
} 