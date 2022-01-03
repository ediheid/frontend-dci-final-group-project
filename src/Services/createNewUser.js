import React from "react";

export const signup = hookData => {

    const userData = {
        firstname: hookData.firstname,
        lastname: hookData.lastname,
        email: hookData.email,
        password: hookData.password,
        confirmedPassword: hookData.confirmedPassword
    } 

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
            switch(response.status) {
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
        console.log(data)// setCurrentUser(data)
    })
    .catch(err => {
        alert(err.message)
    })
} 