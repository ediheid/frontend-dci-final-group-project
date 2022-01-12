import React, { useState, createContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  useHistory,
} from "react-router-dom";
import signup from "./Services/createNewUser.js";
import Cookies from "js-cookie";
import { useCookies } from "react-cookie";

// ? Main scss
import styles from "./Styling/app.module.scss";

// ? All Component and View imports
import LandingPage from "./Views/LandingPage/LandingPage";
import AboutUs from "./Views/AboutUs/AboutUs";
import Footer from "./Components/Footer/Footer";
import Verification from "./Components/Verification/Verification";
import CheckMail from "./Components/CheckMail/CheckMail.js";
import LocationCards from "./Components/LocationCards/LocationCards.js";
import Welcome from "./Views/Welcome/Welcome";
import LocationDetails from "./Components/LocationDetails/LocationDetails";

import { locations } from "./Services/getLocationData.js";

// ? createContext variable
export const AppContext = createContext();

const App = () => {
  // ?  State hooks
  // ?  State passed into fetch request for our database locations
  const [mapEventData, setMapEventData] = useState([]);
  // ? To look into with Kathi
  // !! Testing location Info..
  const [locationInfo, setLocationInfo] = useState(false);
  // ? Display and Hide map functionality
  const [openMap, setOpenMap] = useState(false);
  // ? Passed down to Form.js - is used to to openSearch but also to change bg opacity
  const [openSearch, setOpenSearch] = useState(false);
  // ? Saved/Liked property..
  const [like, setLike] = useState(false);

  // ? login/signup state
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  // !! Moved cookie state hook to top to sit with all other state hooks
  const [cookies, setCookie, removeCookie] = useCookies(["UserCookie"]);

  // ? opens map view - And closes search dropdown so user can see the full map
  const mapView = (event) => {
    event.preventDefault();
    setOpenMap(true);
    // console.log("Successful Submit");
    // ! Note for Jamie: Fixed the problem
    setOpenSearch(false);
  };

  // ? Close map for close map button
  const closeMap = () => {
    setOpenMap(false);
  };

  // ? Allows user to click on Caravan(home) button without re-rendering the page but will close both map and search without state conflicts
  const returnHome = () => {
    setOpenMap(false);
    setOpenSearch(false);
  };

  let history = useHistory();

  // ? User can like and unlike a property (heart on location info boxes)
  const toggleLike = () => {
    setLike(!like);
  };

  // ? Close locationInfo box
  const closeLocationInfoBox = () => {
    setLocationInfo(false);
  };


  // ? Open Search Form function
  const openForm = () => {
    setOpenSearch(true);
  };

  // ? Toggles the Search open and close for the buttons and NOT the search field
  const toggleSearchDropdown = (event) => {
    event.preventDefault();
    setOpenSearch(!openSearch);
  };

  // ? useEffect to pass in location Data from fetch request
  useEffect(() => {
    locations(setMapEventData);
  }, []);
  // console.log("!!!!!MAPEVENT", mapEventData);

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


  const [loginEmailIsValid, setLoginEmailIsValid] = useState(false)
  const [loginEmailMessage, setLoginEmailMessage] = useState('');

  const [loginPasswordIsValid, setLoginPasswordIsValid] = useState(false)
  const [loginPasswordMessage, setLoginPasswordMessage] = useState('');

  const [currentUser, setCurrentUser] = useState({
    _id: "",
    firstname: "",
    lastname: "",
    locations: [],
    bookings: [],
    // adress: {
    //     street: "",
    //     number: "",
    //     city: "",
    //     postcode: "",
    // },
    // birthday: ""
  });

  // useEffect(() => {
  //   setCurrentUser(JSON.parse(window.localStorage.getItem('currentUser')));
  // }, []);

  // useEffect(() => {
  //   window.localStorage.setItem('currentUser', currentUser);
  // }, [currentUser]);

  const collectSignupData = (event) => {
    setSignupData({
      ...signupData,
      [event.target.name]: event.target.value,
    });
  };

  const collectLoginData = (event) => {
    setLoginData({ ...loginData, [event.target.name]: event.target.value });
  };


  useEffect(() => {
    console.log("changed");
    const enteredEmail = loginData.email
    console.log("TEST", enteredEmail);
    if (enteredEmail.trim() === '' || enteredEmail.length >= 50 || !(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(enteredEmail))) {
      if (enteredEmail.trim() === '') {
        // console.log("Hello")
        setLoginEmailIsValid(false);
        setLoginEmailMessage("Email is required")
      };
      if (enteredEmail.length >= 50) {
        setLoginEmailIsValid(false);
        setLoginEmailMessage("'Email should not be longer than 50 characters'")
      }

      if (!(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(enteredEmail))) {
        setLoginEmailIsValid(false);
        setLoginEmailMessage("Should be a valid email")
      }


    } else {
      setLoginEmailIsValid(true);
      setLoginEmailMessage("");
    }
  }, [loginData])

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
          toggleSearchDropdown: toggleSearchDropdown,

          // ? Map Context
          mapView: mapView,
          openMap: openMap,
          closeMap: closeMap,
          mapEventData: mapEventData,
          locationInfo: locationInfo,
          setLocationInfo: setLocationInfo,
          closeLocationInfoBox: closeLocationInfoBox,

          // ? Sign up and login Context
          setShowSignupModal: setShowSignupModal,
          setShowLoginModal: setShowLoginModal,
          showLoginModal: showLoginModal,
          showSignupModal: showSignupModal,

          signupData: signupData,
          setSignupData: setSignupData,
          loginData: loginData,
          setLoginData: setLoginData,

          loginEmailIsValid: loginEmailIsValid,
          loginEmailMessage: loginEmailMessage,

          // ? Set currentUser Data after Login
          currentUser: currentUser,
          setCurrentUser: setCurrentUser,

          // ? pass down cookies
          cookies: cookies,
          setCookie: setCookie,
          removeCookie: removeCookie,

          // ? Liked/Saved property
          like: like,
          toggleLike: toggleLike,

          // ? Return home without re-rendering page but also closing map and search dropdown..
          returnHome: returnHome,

          // ? useHistory
          history: history,
        }}
      >
        {/* NAVBAR and Search Components live in respective View Components */}
        <main>
          <Switch>
            {/* // ? Template/placeholder for how to setup paths with components.. */}
            {/* <Route path="/" exact component={LandingPage} /> */}
            <Route exact path="/" component={LandingPage} />
            {/* {cookies.UserCookie !== "null" ?
                <Redirect to="/welcome-page" />  */}
            {/* :  */}
            {/* <LandingPage />
            </Route> */}

            {/* // ? About us overview */}
            <Route path="/about-us" exact component={AboutUs} />
            <Route path="/verify-email" exact component={Verification} />
            <Route path="/user-signed-up" exact component={CheckMail} />
            <Route path="/location-cards" exact component={LocationCards} />
            <Route path="/welcome-page" exact component={Welcome} />

            <Route path="/location-details" exact component={LocationDetails} />
            {/* // ? Url redirect to landing page on unknown path */}
            <Redirect to="/" exact />
          </Switch>
        </main>
        {/* // ? Footer lives outside of Main and is only visible on tablet + views */}
        <Footer />
      </AppContext.Provider>
    </div>
  );
  //   const [loginData, setLoginData] = useState({
  //     email: "",
  //     password: "",
  //   });
  //   const [currentUser, setCurrentUser] = useState({
  //     _id: "",
  //     firstname: "",
  //     lastname: "",
  //     email: "",
  //     adress: {
  //       street: "",
  //       number: "",
  //       city: "",
  //       postcode: "",
  //     },
  //     birthday: "",
  //     locations: [],
  //     bookings: [],
  //     verified: false,
  //   });

  //   const collectSignupData = (event) => {
  //     setSignupData({
  //       ...signupData,
  //       [event.target.name]: event.target.value,
  //     });
  //   };

  //   const collectLoginData = (event) => {
  //     setLoginData({ ...loginData, [event.target.name]: event.target.value });
  //   };

  //   const [showLoginModal, setShowLoginModal] = useState(false);
  //   const [showSignupModal, setShowSignupModal] = useState(false);

  //   // console.log("!!!!!!!", loginData);

  //   // console.log("??????", signupData);

  //   return (
  //     <div>
  //       {/* // !!! This is where our context lives */}
  //       <AppContext.Provider
  //         value={{
  //           // ? Collect signup and login data context
  //           collectSignupData: collectSignupData,
  //           collectLoginData: collectLoginData,

  //           // ? Search Context to pass down to Search and Navbar..
  //           openSearch: openSearch,
  //           openForm: openForm,
  //           closeSearchButton: closeSearchButton,

  //           // ? Map Context
  //           mapView: mapView,
  //           openMap: openMap,

  //           // ? Sign up and login Context
  //           setShowSignupModal: setShowSignupModal,
  //           setShowLoginModal: setShowLoginModal,
  //           showLoginModal: showLoginModal,
  //           showSignupModal: showSignupModal,

  //           signupData: signupData,
  //           setSignupData: setSignupData,
  //           loginData: loginData,
  //           setLoginData: setLoginData,

  //           // !!! Map test..
  //           // ! Not sure if we will use loader or not? as it may interfere with already existing conditional rendering on the map from Form
  //           // mapLoading: mapLoading,
  //           // mapEventData: mapEventData,
  //           // events: events,
  //         }}
  //       >
  //         <Router>
  //           {/* NAVBAR and Search Components live in respective View Components */}
  //           <main>
  //             <Switch>
  //               {/* // ? Template/placeholder for how to setup paths with components.. */}
  //               <Route path="/" exact component={LandingPage} />
  //               {/* // ? About us overview */}
  //               <Route path="/about-us" exact component={AboutUs} />
  //               <Route path="/verify-email" exact component={Verification} />
  //               <Route path="/user-signed-up" exact component={CheckMail} />
  //               <Route path="/location-cards" exact component={LocationCards} />
  //               <Route path="/welcome-page" exact component={Welcome} />
  //               <Route
  //                 path="/location-details"
  //                 exact
  //                 component={LocationDetails}
  //               />

  //               {/* // ? Url redirect to landing page on unknown path */}
  //               <Redirect to="/" exact />
  //             </Switch>
  //           </main>
  //           {/* // ? Footer lives outside of Main and is only visible on tablet + views */}
  //           <Footer />
  //         </Router>
  //       </AppContext.Provider>
  //     </div>
};

export default App;
