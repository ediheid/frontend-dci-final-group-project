import React, { useState, createContext } from "react";

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
import Verification from "./Components/Verification/Verification";
import Navbar from "./Components/Navbar/Navbar";
import CheckMail from "./Components/CheckMail/CheckMail";

// ? Imported fetch requests
import { signup } from "./Services/createNewUser.js";

// !! createContext variable
export const AppContext = createContext();
// export const LoginContext = createContext();
// export const SignupContext = createContext()

// export const SearchContext = createContext();

const App = () => {
    // ? Search and Navbar functionality to pass down via Provider
    //  State hooks
    // Passed down to Form.js - is used to to openSearch but also to change bg opacity
    const [openSearch, setOpenSearch] = useState(false);

    //  Open Search Form function
    // Passed down to Form.js
    const openForm = () => {
      setOpenSearch(true);
    };

    const closeSearchButton = () => {
      setOpenSearch(!openSearch);
    };

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

    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showSignupModal, setShowSignupModal] = useState(false);
    

    console.log(showLoginModal)

    const collectSignupData = event => { 
        setSignupData({...signupData, [event.target.name]: event.target.value })
    }

    const collectLoginData = event => { 
      setLoginData({...loginData, [event.target.name]: event.target.value })
  }

    console.log("signUpData", signupData)
    console.log("loginData", loginData)
  return (
    <div>
      {/* !!! This is where our context lives */ }
      <AppContext.Provider
        value={{
          collectSignupData: collectSignupData,
          collectLoginData: collectLoginData,
          signupData: signupData,
          setSignupData: setSignupData,
          loginData: loginData,
          setLoginData: setLoginData,
          showLoginModal: showLoginModal,
          showSignupModal: showSignupModal,
          setShowSignupModal: setShowSignupModal,
          setShowLoginModal: setShowLoginModal,
          openSearch: openSearch,
          openForm: openForm,
          closeSearchButton: closeSearchButton,
        }}
      >
      <Router>
      {/* <SignupContext.Provider value={[signupData, setSignupData]}>
      <LoginContext.Provider value={[loginData, setLoginData]}> */}
        <Navbar />
        {/* </LoginContext.Provider>
        </SignupContext.Provider> */}
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

              {/* // ? About us overview */}
              <Route path="/about-us" exact component={AboutUs} />
              <Route path="/user-signed-up" exact component={CheckMail} />
              <Route path="/verify-email" exact component={Verification} />

              {/* // ? Url redirect to landing page on unknown path */}
              <Redirect to="/" exact />
            </Switch>
          </main>
          {/* // ? Footer lives outside of Main and is only visible on tablet + views */}
          <Footer />
        </Router>
      </AppContext.Provider>
    </div>
  );
};

export default App;
