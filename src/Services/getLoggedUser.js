import React from "react";

export const login = hookData => {

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
    //   const loginSuccessful = () => {
    //     toast("Login successful!! Taking you to your dashboard!", {
    //       position: "top-center",
    //       autoClose: 2000,
    //       draggable: false
    //     });
    //   };

    //   setLoginData({
    //     email: "",
    //     password: ""
    //   })

    //   loginSuccessful();
    })
    .catch(err => {
      alert(err.message)
    })
  }