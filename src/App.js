import React, { useState, createContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import signup from "./Services/createNewUser.js";

// ? Main scss
import styles from "./Styling/app.module.scss";

// ? All Component and View imports
import LandingPage from "./Views/LandingPage/LandingPage";
import AboutUs from "./Views/AboutUs/AboutUs";
import Footer from "./Components/Footer/Footer";
import Verification from "./Components/Verification/Verification";

const App = () => {
  const [signupData, setSignupData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmedPassword: "",
  });
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
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

  const collectSignupData = (event) => {
    setSignupData({ ...signupData, [event.target.name]: event.target.value });
  };

  const collectLoginData = (event) => {
    setLoginData({ ...loginData, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <Router>
        {/* <Navbar /> */}
        {/* // !! Note: Navbar is now passed through individual page components - for the landing page it sits INSIDE the Search.js Component to be able to take over the open of search state */}

        {/* <Search /> */}
        {/* // !! Note: Search is commented out here as we currently only need the search Component to display up the top on the Landing page so it is brought in there  */}

        {/* // todo - Open the form Component on click of search icon in the Navbar for all other pages */}

        <main>
          <Switch>
            {/* // ? Template/placeholder for how to setup paths with components.. */}
            <Route path="/" exact component={LandingPage} />
            {/* // ? About us overview */}
            <Route path="/about-us" exact component={AboutUs} />
            <Route path="/verify-email" exact component={Verification} />

            {/* // ? Url redirect to landing page on unknown path */}
            <Redirect to="/" exact />
          </Switch>
        </main>
        {/* // ? Footer lives outside of Main and is only visible on tablet + views */}
        <Footer />
      </Router>
    </div>
  );
};

export default App;
