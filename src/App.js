import React, { useState, createContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import signup from "./Services/createNewUser.js";
import Cookies from 'js-cookie';
import { useCookies } from 'react-cookie';


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

// !! createContext variable
export const AppContext = createContext();

// export const SearchContext = createContext();

const App = () => {
  // ? Map / Location data collection
  //  !! Will be used im fetch request
  const [mapEventData, setMapEventData] = useState([]);
  // todo: Not sure if we will use loader or not? as it may interfere with already existing conditional rendering on the map from Form
  const [mapLoading, setMapLoading] = useState(false);

  // ? Display and Hide map functionality
  const [openMap, setOpenMap] = useState(false);
  //  State hooks
  // Passed down to Form.js - is used to to openSearch but also to change bg opacity
  const [openSearch, setOpenSearch] = useState(false);

  const mapView = (event) => {
    event.preventDefault();
    setOpenMap(true);
    // console.log("Successful Submit");
    // ! Note for Jamie: Fixed the problem
    setOpenSearch(false);
    // Todo: Once data collection is setup decide if we want the form to keep information so user can update or not?
  };

  const closeMap = () => {
    setOpenMap(false);
  };

  const returnHome = () => {
    setOpenMap(false);
    setOpenSearch(false);
  };

  // useEffect(() => {
  //   if (!openSearch) {
  //     setOpenMap(false);
  //   }
  // }, [openSearch]);

  // !! Hardcoded location data and dummy code for fetch request of property data - see more in Map.js
  // const events = [
  //     {
  //         id: 1,
  //         title: "property",
  //         type: "point",
  //         coordinates: [48.277486, 8.185997],
  //     },
  // ];

  // useEffect(() => {
  //     const fetchLocationEvents = async () => {
  //         // setMapLoading(true);
  //         // !!! Dummy for location data linked from backend
  //         // !! Events will equal an array of objects
  //         // const res = await fetch("location data link from backend will go here");
  //         // const { events } = await res.json();

  //         setMapEventData(events);
  //         // ! Not sure if we will use loader or not? as it may interfere with already existing conditional rendering on the map from Form
  //         // setMapLoading(false);

  //         // console.log(events);
  //     };

  //     fetchLocationEvents();

  //     // console.log(mapEventData);
  // }, []);

  // console.log(mapEventData);

  // ? Saved/Liked property..
  const [like, setLike] = useState(false);

  const toggleLike = () => {
    setLike(!like);
    // *  Testing for state to pass to backend
    // if (like === false) {
    //   console.log("Liked!");
    // }
    // if (like !== false) {
    //   console.log("Un-liked!");
    // }
  };

  // =================

  // ? Search and Navbar functionality to pass down via Provider

  //  Open Search Form function
  // Passed down to Form.js
  const openForm = () => {
    setOpenSearch(true);
  };

  // !! Bug fix why map re-renders on close...
  const closeSearchButton = (event) => {
    event.preventDefault();
    setOpenSearch(!openSearch);
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

  const [cookies, setCookie] = useCookies(['UserCookie']); 

  const collectSignupData = (event) => {
    setSignupData({
      ...signupData,
      [event.target.name]: event.target.value,
    });
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
          closeMap: closeMap,

          // ? Sign up and login Context
          setShowSignupModal: setShowSignupModal,
          setShowLoginModal: setShowLoginModal,
          showLoginModal: showLoginModal,
          showSignupModal: showSignupModal,

          signupData: signupData,
          setSignupData: setSignupData,
          loginData: loginData,
          setLoginData: setLoginData,

          // ? Set currentUser Data after Login
            currentUser: currentUser,
            setCurrentUser: setCurrentUser,


          // ? pass down cookies
          cookies: cookies,
          setCookie: setCookie,

          // !!! Map test..
          // ! Not sure if we will use loader or not? as it may interfere with already existing conditional rendering on the map from Form
          // mapLoading: mapLoading,
          // mapEventData: mapEventData,
          // events: events,

          // ? Liked/Saved property
          like: like,
          toggleLike: toggleLike,

          // ! Test
          returnHome: returnHome,
        }}
      >
        <Router>
          {/* NAVBAR and Search Components live in respective View Components */}
          <main>
            <Switch>
              {/* // ? Template/placeholder for how to setup paths with components.. */}
              {/* <Route path="/" exact component={LandingPage} /> */}
            <Route exact path="/"> 
                {currentUser.firstname.length > 0 ?
                <Redirect to="/welcome-page" /> 
                : <LandingPage />}
            </Route>

              {/* // ? About us overview */}
              <Route path="/about-us" exact component={AboutUs} />
              <Route path="/verify-email" exact component={Verification} />
              <Route path="/user-signed-up" exact component={CheckMail} />
              <Route path="/location-cards" exact component={LocationCards} />
              <Route path="/welcome-page" exact component={Welcome} />

              <Route
                path="/location-details"
                exact
                component={LocationDetails}
              />
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
