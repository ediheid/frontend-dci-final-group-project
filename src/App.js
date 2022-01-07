import React, { useState, createContext, useEffect } from "react";
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
import CheckMail from "./Components/CheckMail/CheckMail.js";
import LocationCards from "./Components/LocationCards/LocationCards.js";

// !! createContext variable
export const AppContext = createContext();

// export const SearchContext = createContext();

const App = () => {
  // ? Map / Location data collection
  // !!! Testing map marker..
  const [mapEventData, setMapEventData] = useState([]);
  // ! Not sure if we will use loader or not? as it may interfere with already existing conditional rendering on the map from Form
  const [mapLoading, setMapLoading] = useState(false);

  // !! Hardcoded location data..
  const events = [
    {
      id: 1,
      title: "property",
      type: "point",
      coordinates: [48.277486, 8.185997],
    },
  ];

  useEffect(() => {
    const fetchLocationEvents = async () => {
      // setMapLoading(true);
      // !!! Dummy for location data linked from backend
      // !! Events will equal an array of objects
      // const res = await fetch("location data link from backend will go here");
      // const { events } = await res.json();

      setMapEventData(events);
      // ! Not sure if we will use loader or not? as it may interfere with already existing conditional rendering on the map from Form
      // setMapLoading(false);

      // console.log(events);
    };

    fetchLocationEvents();

    // console.log(mapEventData);
  }, []);

  // console.log(mapEventData);

  // !!! =================

  // ? Search and Navbar functionality to pass down via Provider
  //  State hooks
  // Passed down to Form.js - is used to to openSearch but also to change bg opacity
  const [openSearch, setOpenSearch] = useState(false);

  //  Open Search Form function
  // Passed down to Form.js
  const openForm = () => {
    setOpenSearch(true);
  };

  const closeSearchButton = (event) => {
    // event.preventDefault();
    setOpenSearch(!openSearch);
  };

  // ? Display and Hide map functionality
  const [openMap, setOpenMap] = useState(false);

  const mapView = (event) => {
    event.preventDefault();
    setOpenMap(true);
    // console.log("Successful Submit");
    // Todo: Once data collection is setup decide if we want the form to keep information so user can update or not?
  };

  // ? user/login and signup context
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

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  // console.log("!!!!!!!", loginData);

  // console.log("??????", signupData);

  return (
    <div>
      {/* // !!! This is where our context lives */}
      <AppContext.Provider
        value={{
          // ? Collect signup and login data context
          collectSignupData: collectSignupData,
          collectLoginData: collectLoginData,

          // ? Search Context to pass down to Search and Navbar..
          openSearch: openSearch,
          openForm: openForm,
          closeSearchButton: closeSearchButton,

          // ? Map Context
          mapView: mapView,
          openMap: openMap,

          // ? Sign up and login Context
          setShowSignupModal: setShowSignupModal,
          setShowLoginModal: setShowLoginModal,
          showLoginModal: showLoginModal,
          showSignupModal: showSignupModal,

          signupData: signupData,
          setSignupData: setSignupData,
          loginData: loginData,
          setLoginData: setLoginData,

          // !!! Map test..
          // ! Not sure if we will use loader or not? as it may interfere with already existing conditional rendering on the map from Form
          // mapLoading: mapLoading,
          // mapEventData: mapEventData,
          // events: events,
        }}
      >
        <Router>
          {/* NAVBAR and Search Components live in respective View Components */}
          <main>
            <Switch>
              {/* // ? Template/placeholder for how to setup paths with components.. */}
              <Route path="/" exact component={LandingPage} />
              {/* // ? About us overview */}
              <Route path="/about-us" exact component={AboutUs} />
              <Route path="/verify-email" exact component={Verification} />
              <Route path="/user-signed-up" exact component={CheckMail} />
              <Route path="/location-cards" exact component={LocationCards} />

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
