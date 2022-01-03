import React, { useEffect, useState, useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

// ? Main scss
import styles from "./Styling/app.module.scss";

// ? Imported dependencies
import { ToastContainer, toast } from "react-toastify";

// ? All Component and View imports
import LandingPage from "./Views/LandingPage/LandingPage";
import AboutUs from "./Views/AboutUs/AboutUs";
import Footer from "./Components/Footer/Footer";
import Search from "./Components/Search/Search";
import Verification from "./Components/Verification/Verification";
import Navbar from "./Components/Navbar/Navbar";

// ? Imported fetch requests
import { signup } from "./Services/createNewUser.js";

const App = () => {
   const [signupData, setSignupData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "", 
        confirmedPassword: ""
    })
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    })
    const [currentUser, setCurrentUser] = useState({
        _id: "",
        firstname: "",
        lastname: "",
        email: "",
        adress: {
            street: "",
            number: "",
            city: "",
            postcode: "",
        },
        birthday: "",
        locations: [],
        bookings: [],
        verified: false,
    });

    // const collectData = create;

    const collectSignupData = event => { 
        setSignupData({...signupData, [event.target.name]: event.target.value })
    }

    const collectLoginData = event => {
        setLoginData({...loginData, [event.target.name]: event.target.value })
    }

    useEffect(() => {
      signup(signupData)
    }, [signupData])
  //   const signup = event => {
  //     event.preventDefault();
  
  //     const userData = {
  //         firstname: signupData.firstname,
  //         lastname: signupData.lastname,
  //         email: signupData.email,
  //         password: signupData.password,
  //         confirmedPassword: signupData.confirmedPassword
  //     } 
  
  //     const settings = {
  //         method: "POST",
  //         body: JSON.stringify(userData),
  //         headers: {
  //             "Content-Type": "application/json"
  //         }
  //     }
  
  //     fetch("http://localhost:3001/user", settings)
  //     .then((response) => {
  //         if (response.ok) {
  //             return response.json();
  //         } else {
  //             switch(response.status) {
  //                 case 400:
  //                     return response.json().then(err => {
  //                         throw new Error(err.message)
  //                     })
  //                 case 401: 
  //                     return response.json().then(err => {
  //                         throw new Error(err.message)
  //                     })
  //                 case 406: 
  //                     return response.json().then(err => {
  //                         throw new Error(err.message)
  //                     })
  //                 default:
  //                     throw new Error("Internal Server Error!")
  //             }
  //         }
  //     })
  //     .then(data => {
  //         console.log(data)// setCurrentUser(data)
  //         const signUpSuccessful = () => {
  //           toast("Login successful!! Taking you to your dashboard!", {
  //             position: "top-center",
  //             autoClose: 2000,
  //             draggable: false
  //           });
  //         };

  //         setSignupData({
  //           firstname: "",
  //           lastname: "",
  //           email: "",
  //           password: "", 
  //           confirmedPassword: ""
  //         })

  //         signUpSuccessful()
  //     })
  //     .catch(err => {
  //         alert(err.message)
  //     })
  // } 


  const login = event => {
    event.preventDefault();

    const currloginData = {
      email: loginData.email,
      password: loginData.password
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

      setLoginData({
        email: "",
        password: ""
      })

      loginSuccessful();
    })
    .catch(err => {
      alert(err.message)
    })
  }



    console.log("signUpData", signupData)
    console.log("loginData", loginData)
  return (
    // !!!! - Figure out module classes..
    <div>
      <Router>
        <Navbar 
          collectLoginData={collectLoginData}
          collectSignupData={collectSignupData}
          signupFetch={signup}
          loginFetch={login}
          signupData={signupData}
          loginData={loginData}
        />
        {/* // ? NavBar Component could live here */}
        {/* // todo - setup conditional display of Navbar to sit underneath the search field on landing page tablet and desktop view - might have to bring in on individual page Views?  */}
        {/* // todo Fix Navbar to bottom of the screen on small devices - kick in from 100vh (just below the landing page main image - Scroll Event Listener?)  */}
        {/* <Search /> */}
        {/* // !! Note: Search is commented out here as we currently only need the search Component to display up the top on the Landing page so it is brought in there  */}
        {/* // todo - Open the form Component on click of search icon in the Navbar for all other pages */}

        <main>
          <Switch>
            {/* // ? Template/placeholder for how to setup paths with components.. */}
            <Route path="/" exact component={LandingPage} />
            {/* <LandingPage /> */}

            {/* // ? Fallback path - directs user back to login page */}
            {/* <Redirect to="/" exact /> */}
            {/* // ? or */}
            {/* <Route path="*" exact /> */}

            {/* // ? About us overview */}
            <Route path="/about-us" exact component={AboutUs} />
            <Route path="/verify-email" exact component={Verification} />
          </Switch>
        </main>
        <Footer />
        {/* // ? Footer  Component could live here */}
      </Router>
    </div>
  );
};

export default App;
